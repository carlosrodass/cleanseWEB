import React, { useState } from 'react'
import { Redirect } from 'react-router';
// import styles from './login.css';
import landing from './../../Assets/Images/landing.jpg'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from '../../Redux/actions/userActions/auth';

import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = () => {

    const { history } = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user) {
            alert("No user");
            return;
        }
        dispatch(login(user.email, user.password))
            .then(() => {
                history.push("/home");
                window.location.reload();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <article className="row pt-5">
                <div className="d-none d-md-block col-12 col-md-6">
                    <img style={{ width: '75%' }} src={landing} />
                </div>

                <div className="col-12 col-md-6 pt-5">
                    
                    <h1>Welcome Again if your are logged</h1>

                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group py-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                name="email"
                                value={user.email}
                                onChange={handleChange}

                            />
                        </div>
                        <div className="form-group pb-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-primary col-12 col-md-12 mb-3" type="submit" id="btn">submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </form>
                </div>
            </article>
        </div>
    )
}

export default Login
