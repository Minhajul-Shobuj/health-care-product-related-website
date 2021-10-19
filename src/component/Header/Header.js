import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" className="navbar navbar-expand-lg" bg="dark" variant="dark">
                <Container>
                    <h1 className="text-success fw-bolder">Drug_Hou$e</h1>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        {user.email ?
                            <button className="btn btn-warning rounded-pill" onClick={logOut}>Logout</button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {user?.email &&
                            <Navbar.Text className="ms-2">
                                Signed in as: <span className="text-white">{user.displayName}</span>
                            </Navbar.Text>}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;