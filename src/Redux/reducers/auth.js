import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, REGISTER_SUCCESS, REGISTER_FAIL } from './../actions/userActions/types';

// Si existe el usuario, esta logueado = true, devolver el estado del usuario
// Si NO existe el usuario, logueado = false, devolver null
const initial_state = user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null }



const auth_reducer = (state = initial_state, action) => {
    const { type, payload } = action;

    switch (type) {

        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            };

        case REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: payload.user
            };

        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }


        default: return state;
    }
}

export default auth_reducer;