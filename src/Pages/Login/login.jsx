import React, { useState } from 'react'
import { Redirect } from 'react-router';
import styles from './login.module.scss';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from '../../Redux/actions/userActions/auth';

const Login = () => {


    const [user, setUser] = useState({ email: '', password: '' });

    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const required = (value) => {
        if (!value) {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };



    return (
        <div className={styles.container}>
            {/* <div className="form-leftside">
                <img></img>
            </div> */}
            <div className="form-rigthside">
                <form onSubmit={handleSubmit()}>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            // onChange={(e) =>}
                            // value={ }
                        />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            // onChange={}
                            // value={ }
                        />
                    </div>
                    <button type="submit" id="btn">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
