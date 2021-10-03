import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand className="fw-bold fs-3" href="#home">Learner</Navbar.Brand>
                <Nav className="ms-auto fw-bold">
                    <NavLink
                        className="text-light ms-4"
                        style={{ textDecoration: "none" }}
                        to="/home">Home</NavLink>
                    <NavLink
                        className="text-light ms-4"
                        style={{ textDecoration: "none" }}
                        to="/services">Services</NavLink>
                    <NavLink
                        className="text-light ms-4"
                        style={{ textDecoration: "none" }}
                        to="/about">About</NavLink>
                    <NavLink
                        className="text-light ms-4"
                        style={{ textDecoration: "none" }}
                        to="/contacts">Contacts</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;