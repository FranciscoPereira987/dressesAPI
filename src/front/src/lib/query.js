import axios from 'axios'

const SERVER = "http://localhost:8080/dresses"

export default async function getDresses(query, limit) {
    return axios.get(SERVER, {
        params: {
            query: query,
            limit: limit
        }
    }).then((response) => {
        return response.data
    })
}