import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" bg="dark" expand="lg">
                <h1 className="text-success fw-bolder">Drug_Hou$e</h1>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="text-white mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className="text-white" as={Link} to="/home" >Home</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/about">About</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/support">Support</Nav.Link>
                        <Nav.Link className="text-white" as={Link} to="/register">Register</Nav.Link>
                        {user.email ?
                            <button className="btn btn-warning rounded-pill" onClick={logOut}>Logout</button> :
                            <Nav.Link className="text-white" as={Link} to="/login">Login</Nav.Link>}
                        {user?.email &&
                            <Navbar.Text className="ms-2 text-danger">
                                Signed in as: <span className="text-white">{user.displayName}</span>
                            </Navbar.Text>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default Header;
