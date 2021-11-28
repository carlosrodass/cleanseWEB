import { LOGIN_SUCCESS, LOGIN_FAIL, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, SET_MESSAGE } from './types';
import AuthService from './../../../Services/userServices/auth.service';

export const register = (username, email, password, password_confirmation) => (dispatch) => {
    return AuthService.register(username, email, password, password_confirmation)
        .then((response) => {

            if(response.status !== 201){
                dispatch({
                    type: REGISTER_FAIL
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: "Error al crear"
                });

                return Promise.reject();
            }
            
            dispatch({
                type: REGISTER_SUCCESS
            });

            dispatch({
                type: SET_MESSAGE,
                payload: response.data.message
            });

            return Promise.resolve();
            // return response;
        },

            (error) => {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                dispatch({
                    type: REGISTER_FAIL
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message
                });
                return Promise.reject();
            }

        );
};

//ACCIONES
export const login = (email, password) => (dispatch) => {
    //LLAMANDO A LA PETICION POST LOGIN
    return AuthService.login(email, password)
        .then((response) => {//SI LA REQUEST ES SUCCESS, REALIZA LA ACCION DEL REDUCER Y ESTE LO GUARDA EN EL ESTADO DE LA APLICACIÓN 
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response
            });

            dispatch({
                type: SET_MESSAGE,
                payload: "Registered"
            });

            return Promise.resolve(); 
        },
            (error) => {
                const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

                dispatch({
                    type: LOGIN_FAIL
                });

                dispatch({
                    type: SET_MESSAGE,
                    payload: message
                })

                return Promise.reject();
            },
        );
};

export const logout = () => (dispatch) => {
    AuthService.logout()

    dispatch({
        type: LOGOUT
    });
};

