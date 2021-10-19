import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { error, takeEmail, takePassword, takeName, handleRegistration } = useAuth();
    return (
        <div>
            <h1>Please Register</h1>
            <div className="mt-5 d-flex align-items-center justify-content-center">
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control onBlur={takeName} type="text" placeholder="Enter your name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={takeEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={takePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <div className="text-danger mt-2 text-center d-flex align-items-center justify-content-center"><h5>{error}</h5>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <p className="mt-3">Already have an account??</p><Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Register;