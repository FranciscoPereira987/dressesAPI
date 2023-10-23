## Vestidos Vestidos Vestidos

Este es un pequeño sistema, que se ejecuta sobre docker utilizando docker compose. El sistema se compone de una base de datos y de una API que permite realizar queries a la misma.
El sistema utiliza una base de datos vectorial y un modelo de embeddings (all-MiniLM-L6-v2) para realizar busquedas por similitud sobre un conjunto de datos con muchos vestidos.


#### Instrucciones de uso

1. Buildear las imagenes de docker
    ```bash
        make build
    ```
2. Ejecutar el sistema utilizando el siguiente comando:

    ```bash
        make docker-compose-up
    ```

> En este momento, para realizar busquedas se debe usar el siguiente endpoint /dresses?query={queryString}&limit={cantidadResultados}
> Antes de realizar consultas, es importante esperar a que terminen de procesarse los datos iniciales.

3. Al terminar de ejecutar el sistema, se pueden eliminar los contenedores utilizando:

    ```bash
        make docker-compose-down
    ```