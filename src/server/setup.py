#Implement server setup
from .model import DBConn, Model
import json


DATA_FILE = "/data/FEIDEGGER_release_1.2.json"


def startup(db_addr: str) -> tuple[Model, DBConn]:
    model = Model()
    db = DBConn(db_addr)
    with open(DATA_FILE) as file:
        data = json.load(file)
        model.process_data(data, db)

    return model, db

def manage_client(request: dict, model: Model, db: DBConn, limit: int) -> list[dict[str, str]]:
    ## Hears the client, parses the json file
    ## and returns the answer after asking both 
    query = request.get("query", None)

    if not query:
        return {"answer": "No query given"}
    
    query_result = model.query_data(query, db, limit)
    return query_result

