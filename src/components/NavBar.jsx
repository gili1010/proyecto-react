import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';

import '../components/Navbar.scss';
import CartWidget from './CartWidget';

const NavBar = () => {
     return (
          <div>
               <Navbar expand="lg" bg="danger" variant="dark">
               <Container>
               <Navbar.Brand href="#home" className="cBlanco">Tienda</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                         <Nav.Link className="cBlanco" href="#home">Home</Nav.Link>
                         <Nav.Link className="cBlanco" href="#link">Link</Nav.Link>
                         <Nav.Link className="cBlanco" href="#home">Nosotros</Nav.Link>
                         <Nav.Link className="cBlanco" href="#link"><CartWidget /></Nav.Link>
                    </Nav>
               </Navbar.Collapse>
               </Container>
               </Navbar>
          </div>
     )
}

export default NavBar
