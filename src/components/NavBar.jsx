import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
const NavBar = () => {
     return (
          <div>
               <Navbar bg="light" expand="lg">
               <Container>
               <Navbar.Brand href="#home">Tienda</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                         <Nav.Link href="#home">Home</Nav.Link>
                         <Nav.Link href="#link">Link</Nav.Link>
                         <Nav.Link href="#home">Nosotros</Nav.Link>
                         <Nav.Link href="#link">Contacto</Nav.Link>
                    </Nav>
               </Navbar.Collapse>
               </Container>
               </Navbar>
          </div>
     )
}

export default NavBar
