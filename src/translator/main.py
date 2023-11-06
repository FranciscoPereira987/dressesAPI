import json
import logging as log
from .model import Translator
from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import requests

class TranslateData(BaseModel):
    sentence: str

app = FastAPI()

log.basicConfig(level=log.DEBUG)

model = Translator()



requests.post("http://gateway:8080/ready", json={
    "service_name": "TRANSLATOR"
})


@app.post("/translate")
def translate(data: TranslateData):
    result = model.translate(data.sentence)
    return JSONResponse(status_code=status.HTTP_200_OK, content={"translation": result})