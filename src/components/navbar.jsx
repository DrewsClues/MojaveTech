import 'bootstrap/dist/css/bootstrap.min.css';
import '../css-sheets/nav_bar.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Nav_bar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src='Full-logo-white.png' alt="logo" className='nav-logo'></img>
                        Mojave Technical Solutions
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Services</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Nav_bar;
