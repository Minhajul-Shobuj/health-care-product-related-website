import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleLogIn } = useAuth();
    return (
        <div className="mt-5 d-flex align-items-center justify-content-center">
            <div>
                <h1>Please,Login</h1>
                <form onSubmit="">
                    <input type="text" name="email" placeholder="enter your email" />
                    <br />
                    <br />
                    <input type="password" name="password" placeholder="enter your password" />
                    <br />
                    <br />
                    <input type="button" value="Submit" />
                </form>
                <button onClick={googleLogIn}>login</button>
            </div>
        </div >
    );
};

export default Login;