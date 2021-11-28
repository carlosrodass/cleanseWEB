import axios from "axios";

const BASE_URL = 'http://localhost/cleanseAPI/public/api';

class AuthService {

    // Login REQUEST
    login(email, password) {
        return axios
            .post(`${BASE_URL}/login?email=${email}&password=${password}`)
            .then((response) => {
                if (response.data.Token) {
                    localStorage.setItem("user", JSON.stringify(response.data.Token));
                }
                return response.data.Token;
            })
            .catch((error) => {
                console.error(error);
            })
    }
    // Logout REQUEST
    logout() {
        localStorage.removeItem("user");
    }
    // Retgister REQUEST
    register(username, email, password, password_confirmation) {
        return axios
            .post(`${BASE_URL}/register?username=${username}&email${email}&password${password}&password_confirmation${password_confirmation}`, {
                username,
                email,
                password,
                password_confirmation
            })
            .then((response) => {
                console.log("soy request",response);
                return response;
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export default new AuthService();