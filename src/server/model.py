from sentence_transformers import SentenceTransformer
import psycopg2 as pg
import numpy
from pgvector.psycopg2 import register_vector
from multiprocessing import cpu_count
from tqdm.contrib.concurrent import process_map
import logging as log

DB_USER = "admin"
DB_PASS = "admin"
DB_NAME = "test"

class Model:

    def __init__(self) -> None:
        self._model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2')

    def _embedd(self, data: dict[str, str]) -> dict:
        r = {}
        r['url'] = data['url']
        r['descriptions'] = data['descriptions']
        r['split'] = data['split']
        inp = ' '.join( data['descriptions'] )
        vector = self._model.encode(inp)
        r['descriptions_embeddings'] = vector
        return r

    def _generate_embeddings(self, data: list[dict[str, str]]) -> list[dict]:
        
        return map(self._embedd, data)


    def cls_pooling(self, model_output: list) -> list[list[float]]:
        #First element of model_output contains all token embeddings
        return [sublist[0] for sublist in model_output][0]

    def process_data(self, data: list[dict[str, str]], db: 'DBConn') -> None:
        embeddings = self._generate_embeddings(data)
        log.info("action: create embeddings | result: success")
        db.load_data(embeddings)
        log.info("action: load data | result: success")
        db.clean()

    def query_data(self, data: str, db: 'DBConn', limit: int) -> list[dict[str, str]]:
        vector = self._model.encode(data)
        return db.query(numpy.array(vector), limit)


class DBConn:

    def __init__(self, db_addr: str) -> None:
        self.conn = pg.connect(host=db_addr, user=DB_USER, password=DB_PASS, database=DB_NAME)
        cur = self.conn.cursor()
        cur.execute("CREATE EXTENSION IF NOT EXISTS vector;")
        register_vector(self.conn)
        cur.execute("DROP TABLE IF EXISTS products;")
        cur.execute("""CREATE TABLE IF NOT EXISTS products(
               id bigserial primary key, 
               description text, 
               url text, 
               split int, 
               descriptions_embeddings vector(384));""")
        self.conn.commit()
        cur.close()
    
    def clean(self) -> None:
        cur = self.conn.cursor()
        cur.execute("""CREATE INDEX ON products 
               USING ivfflat (descriptions_embeddings vector_l2_ops) WITH (lists = 100);""")
        #cur.execute("VACUUM ANALYZE products;")
        cur.close()

    def load_data(self, data: list[dict]) -> None:
        cur = self.conn.cursor()
        for x in data:
            cur.execute("""INSERT INTO products
                (description, url, split, descriptions_embeddings) 
                VALUES(%s, %s, %s, %s);""", 
            (' '.join(x.get('descriptions', [])), x.get('url'), x.get('split'), x.get('descriptions_embeddings') ))
        self.conn.commit()
        cur.close()

    def query(self, embeddings: numpy.ndarray, limit: int) -> list[dict[str, str]]:
        cur = self.conn.cursor()
        cur.execute("""SELECT id, url, description, descriptions_embeddings 
            FROM products 
            ORDER BY descriptions_embeddings <-> %s limit %s;""", 
            (embeddings,limit,))
        result = list(map(lambda x: {
            "url": x[1],
            "description": x[2]
        }, cur.fetchall()))
        cur.close()
        return result