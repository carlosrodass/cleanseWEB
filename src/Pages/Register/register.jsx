import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import { register } from '../../Redux/actions/userActions/auth';

import registro from './../../Assets/Images/registro.jpg'

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [createUser, setCreateUser] = useState({ username: '', email: '', password: '', password_confirmation: '' });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        setCreateUser({ ...createUser, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!createUser) {
            alert("No user");
            return;
        }
        dispatch(register(createUser.username, createUser.email, createUser.password, createUser.password_confirmation))
            .then(() => {
                history.push('/');
                window.location.reload();
            })
            .catch((error) => {
                console.log("soy error", error);
            });
    }


    return (
        <div className="container">
            <article className="row pt-5">
                <div className="d-none d-md-block col-12 col-md-6">
                    <img style={{ width: '80%', borderRadius: '20px' }} src={registro} />
                </div>

                <div className="col-12 col-md-6 pt-5">

                    <h1>Register now To Cleanse</h1>

                    <form className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group pt-2">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                name="username"
                                value={createUser.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group py-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                className="form-control"
                                name="email"
                                value={createUser.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group pb-2">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                name="password"
                                value={createUser.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group pb-2">
                            <label htmlFor="password_confirmation">Confirm Password</label>
                            <input
                                type="password"
                                id="password_confirmation"
                                className="form-control"
                                name="password_confirmation"
                                value={createUser.password_confirmation}
                                onChange={handleChange}
                            />
                        </div>
                        <button className="btn btn-success col-12 col-md-12 mb-3" type="submit" id="btn">Submit</button>
                        <p className="sign-in text-right">
                            Already <a href="/">Registered?</a>
                        </p>
                    </form>
                </div>
            </article>
        </div>
    )
}

export default Register
