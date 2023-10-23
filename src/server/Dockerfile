FROM python:3.9.7-slim

WORKDIR /code

COPY requirements.txt /code/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /code/requirements.txt
COPY src/server /code/app


CMD [ "uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8080" ]