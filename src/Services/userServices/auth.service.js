import axios from "axios";

const BASE_URL = 'http://localhost/cleanseAPI/public/api';

class AuthService {

    // Login 
    login(email, password) {
        return axios
            .post(`${BASE_URL}/login?email=${email}&password=${password}`)
            .then((response) => {
                console.log(response.data.Token);
                if (response.data.Token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            })
            .catch((error) => {
                console.error(error);
            })
    }
    // Logout
    logout() {
        localStorage.removeItem("user");
    }
    // Registro
    register(username, email, password, password_confirmation) {
        return axios
            .post(`${BASE_URL}/register/${username}/${email}/${password}/${password_confirmation}`, {
                username,
                email,
                password,
                password_confirmation
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            })
    }
}

export default new AuthService();