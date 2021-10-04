import React from 'react'
import styles from './login.module.scss';

const Login = () => {
    
    return (
        <div className={styles.container}>
            <div className="form-leftside">
                <img></img>
            </div>
            <div className="form-rigthside">
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
            </div>
        </div>
    )
}

export default Login
