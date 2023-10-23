#Implement server setup
from .model import DBConn, Model
import json
import socket
import logging as log

class Message():

    def __init__(self, values: dict) -> None:
        self.values = values

    def as_dict(self) -> dict:
        return self.values

    @classmethod
    def decode(cls, sckt: socket.socket) -> 'Message':
        ### Decodes de message from the stream
        length = int.from_bytes(sckt.recv(4), 'big')
        print("Decoding")
        values = sckt.recv(length)
        print("Decoded!")
        return cls._decode_query(values)
    
    @classmethod
    def _decode_query(cls, stream: bytes) -> 'Message':
        values = {
            "query": stream.decode()
        }
        return Message(values)


    @classmethod
    def encode_list(cls, values: list[dict[str, str]], sckt: socket.socket) -> 'Message':
        pass

    def _encode_field(self, field: str) -> bytes:
        value: str = self.values.get(field, None)
        if not value:
            return bytes()
        value = value.encode()
        value_length = len(value).to_bytes(4, 'big')
        return value_length + value

    def _encode_url(self) -> bytes:
        return self._encode_field("url")
        
    def _encode_description(self) -> bytes:
        return self._encode_field("description")

    def encode(self, sckt: socket.socket) -> None:
        ### Encodes the message and sends it to the stream
        values = self._encode_url() + self._encode_description()
        length = len(values).to_bytes(4, 'big')
        sckt.send(length)
        sckt.send(values)

def startup(db_addr: str) -> tuple[Model, DBConn]:
    model = Model()
    db = DBConn(db_addr)
    return model, db

def manage_client(request: dict, model: Model, db: DBConn, limit: int) -> list[dict[str, str]]:
    ## Hears the client, parses the json file
    ## and returns the answer after asking both 
    query = request.get("query", None)

    if not query:
        return {"answer": "No query given"}
    
    query_result = model.query_data(query, db, limit)
    return query_result

