import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

export default function Example() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Laravel-React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about-us">About Us</Nav.Link>
                        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/software-dev">Software Dev</NavDropdown.Item>
                        <NavDropdown.Item href="#action/app-dev">App Development</NavDropdown.Item>
                        <NavDropdown.Item href="#action/digital-marketing">Digital Marketing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/support-24">Support 24 Hours</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>    
        </Navbar>
    );
}



if (document.getElementById('mainHome')) {
    ReactDOM.render(<Example />, document.getElementById('mainHome'));
}
