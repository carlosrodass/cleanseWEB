// Method setting token for every unathorized request
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {}
    }
}