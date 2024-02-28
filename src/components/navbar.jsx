import 'bootstrap/dist/css/bootstrap.min.css';
import '../css-sheets/nav_bar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav_bar() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
                <Container>
                    
                    <Navbar.Brand href="#home"> <img src='Full-logo-white.png' className='nav-logo'></img>Mojave Technical Solutions</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">Services</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Nav_bar;

  