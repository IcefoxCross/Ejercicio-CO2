import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >Gestion de Viajes</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to ="/lista">Listado de Viajes</Nav.Link>
                    <Nav.Link as={Link} to="/nuevo">Nuevo Viaje</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;