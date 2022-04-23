
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';


export default function NavbarHeader() {
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Laravel-React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/home">Home</Nav.Link>
                        <Nav.Link to="/about-us">About Us</Nav.Link>
                        <Nav.Link to="/portfolio">Portfolio</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item to="/services/software-dev">Software Dev</NavDropdown.Item>
                        <NavDropdown.Item to="/services/app-dev">App Development</NavDropdown.Item>
                        <NavDropdown.Item to="/services/digital-marketing">Digital Marketing</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item to="/services/support-24">Support 24 Hours</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>    
        </Navbar>
    );
}