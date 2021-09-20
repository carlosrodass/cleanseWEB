import React from 'react'
import styles from './login.module.scss';

function Login() {
    return (
        <div className={styles.container}>
            <article className="form-leftside">
                <img></img>
            </article>
            <article className="form-rigthside">
                <form>
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <button type="submit" id="btn">Log in</button>
                </form>
            </article>
        </div>
    )
}

export default Login
