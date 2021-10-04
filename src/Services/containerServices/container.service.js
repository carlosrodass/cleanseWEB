import axios from "axios";
import authHeader from "../userServices/auth-header";


const BASE_URL = 'http://localhost/cleanseAPI/public/api/containers/';


export function getAllContainers() {
    return axios.get(BASE_URL + 'all', { headers: authHeader });
}

export function getOneContainer() {
    return axios.get(BASE_URL + 'show', { headers: authHeader });
}

export function trade() {
    return axios.post(BASE_URL + 'trade', { headers: authHeader });
}