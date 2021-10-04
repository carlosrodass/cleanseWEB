import { SET_MESSAGE, CLEAR_MESSAGE } from './../actions/userActions/types';

const initial_state = {};

const message_reducer = (state = initial_state, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_MESSAGE:
            return {
                message: payload
            };
        case CLEAR_MESSAGE:
            return {
                message: ""
            };

        default: return state;
    }
}

export default message_reducer;