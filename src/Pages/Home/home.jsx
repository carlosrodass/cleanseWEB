import {React , useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const Home = () => {

    const history = useHistory();
    const user = useSelector((state) => state.auth_reducer.user);
    // componentDidUpdate(prevProps) {
    //     if (!user || user === null) {
    //         history.push("/login");
    //     }
    // }
   

    return (
        <div>
            <h1>Hola que tal</h1>
        </div>
    )
}

export default Home;
