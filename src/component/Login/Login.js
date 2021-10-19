import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleLogIn, resetPassword } = useAuth();
    return (
        <div>
            <h1>Please,Login</h1>
            <div className="mt-5 d-flex align-items-center justify-content-center">
                <form >
                    <input type="text" name="email" placeholder="enter your email" />
                    <br />
                    <br />
                    <input type="password" name="password" placeholder="enter your password" />
                    <br />
                    <br />
                    <input type="button" value="login" />
                </form>
            </div>
            <br />
            <button onClick={googleLogIn}>login</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="mt-3">Don't have an account??</p><Link to="/register">Register</Link>
            </div>
            <button className="btn btn-secondary rounded" onClick={resetPassword}>Reset password</button>
        </div >
    );
};

export default Login;