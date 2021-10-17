import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../image/logo.png'

const Header = () => {
    return (
        <div>
            <Navbar className="fixed-top" bg="primary" variant="dark">
                <Container>
                    <img style={{ width: '200px', height: '30px' }} src={logo} alt="" />
                    <Nav className="mx-auto">
                        <NavLink className="ms-3 text-white" to="/home">Home</NavLink>
                        <NavLink className="ms-3 text-white" to="/products">Products</NavLink>
                        <NavLink className="ms-3 text-white" to="/about">About</NavLink>
                        <NavLink className="ms-3 text-white" to="/login">Login</NavLink>
                        <NavLink className="ms-3 text-white" to="/register">Register</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;