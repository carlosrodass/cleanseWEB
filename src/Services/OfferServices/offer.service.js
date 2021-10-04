import axios from "axios";
import authHeader from "../userServices/auth-header";


const BASE_URL = 'http://localhost/cleanseAPI/public/api/offers/';

export function getOffers() {
    return axios.get(BASE_URL + 'all', { headers: authHeader });
}

export function tradeOffers() {
    return axios.post(BASE_URL + 'trade', { headers: authHeader });
}