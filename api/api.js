import axios from "axios";
import { env } from "../env";

export function Get(path) {
    return axios.get(`https://pokeapi.co/api/v2${path}`)
        .then((res) => {
            return res.data.results;
        }).catch((error) => {
            console.error(error);
        });
}