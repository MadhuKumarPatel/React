import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./header.css"

function Header() {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark" className='headers'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto " >
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Link className='links' to={"/"}>Home</Link>
            <Link className='links' to={"/contact"}>Contact Us</Link>
            <Link className='links' to={"/aboutUs"}>About Us</Link>
            <Link className='links' to={"/cart"}>Cart</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;