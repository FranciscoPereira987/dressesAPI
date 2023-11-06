import json
import logging as log

from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import requests


class ServiceUpData(BaseModel):
    service_name: str

class TranslateData(BaseModel):
    sentence: str


class Ready():

    def __init__(self) -> None:
        self._ready = 0

    def is_ready(self) -> bool:
        return self._ready >= 2

    def new_ready(self) -> None:
        self._ready += 1

app = FastAPI()
ready = Ready()
log.basicConfig(level=log.DEBUG)


@app.get("/dresses")
def get_dresses(query: str = "", limit: int = 2) -> JSONResponse:
    if not ready.is_ready():
        return JSONResponse(status_code=status.HTTP_425_TOO_EARLY, content="Server not ready yet")

    try:
        translation = get_translation(query)
        return get_dresses(translation, limit)
    except Exception as e:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content="Unexpected error occured")

@app.post("/ready")
def service_ready(service: ServiceUpData):
    log.info(f"service is up: {service.service_name}")
    ready.new_ready()


@app.post("/translation")
def translate(sentence: TranslateData):
    return JSONResponse(status_code=status.HTTP_200_OK, content={"translation": get_translation(sentence.sentence)})

def get_translation(query: str) -> str:
    response = requests.post("http://translator:8080/translate", json={"sentence": query})

    return response.json().get("translation", "")

def get_dresses(query: str, limit: int) -> JSONResponse:
    reply = requests.get("http://server:8080/dresses", params={
        "query": query,
        "limit": limit
    })
    if reply.status_code != status.HTTP_200_OK:
        log.debug(f"Got server invalid reply: {reply.status_code}")
    return JSONResponse(status_code=reply.status_code, content=reply.json())
    