#Implement API methods
from .setup import startup, manage_client
import json
import logging as log

from fastapi import FastAPI, status
from fastapi.responses import JSONResponse
import requests


app = FastAPI()
log.basicConfig(level=log.DEBUG)
model, db = startup("db")

requests.post("http://gateway:8080/ready", json={
    "service_name": "SERVER"
})

@app.get("/dresses")
async def root(query: str = None, limit: int = 2) -> dict:
    if not query:
        return JSONResponse(status_code=status.HTTP_404_NOT_FOUND, content="No dress found")
    request = {
        "query": query
    }
    try:
        return JSONResponse(status_code=status.HTTP_200_OK, content=manage_client(request, model, db, limit))
    except Exception as e:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, content={"reason": e.__str__()})
    

    
