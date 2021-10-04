import axios from "axios";
import authHeader from "./auth-header";

// USER PROFILE REQUESTS
const BASE_URL = 'http://localhost/cleanseAPI/public/api/users/';


// GET USER PROFILE INFO
export function userProfile() {
    return axios.get(BASE_URL + 'profile', { headers: authHeader });
}
// UODATE USER PROFILE
export function updateProfile() {
    return axios.put(BASE_URL + 'update', { headers: authHeader });
}