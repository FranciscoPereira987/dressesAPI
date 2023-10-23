SHELL := /bin/bash

build:
	docker build -t server -f src/server/Dockerfile .
.PHONY: build

run-client:
	docker run --rm  --network llm_dev_net --entrypoint /client client
.PHONY: run-client

docker-compose-up:
	docker compose -f docker-compose-dev.yaml up
.PHONY: docker-compose-up

docker-compose-down:
	docker compose -f docker-compose-dev.yaml down
.PHONY: docker-compose-down