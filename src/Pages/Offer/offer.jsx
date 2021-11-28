import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const Offer = () => {


    const history = useHistory();
    const user = useSelector((state) => state.auth_reducer.user);

    if (!user) {
        history.push("/login");
    } else if (user === null) {
        history.push("/login");
    }

    return (
        <div>
            PROFILE
        </div>
    )
}

export default Offer
