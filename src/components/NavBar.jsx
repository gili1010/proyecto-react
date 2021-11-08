import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import '../components/Navbar.scss';
import CartWidget from './CartWidget';

const NavBar = () => {
     return (
          <div>
               <Navbar expand="lg" bg="danger" variant="dark">
               <Container>
               <Navbar.Brand><NavLink to={'/'}>Tienda</NavLink></Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                         <NavLink to={'/'} className="cBlanco">Home</NavLink>
                         <NavLink to={'/contacto'} className="cBlanco">Contacto</NavLink>
                         <NavLink to={'/nosotros'} className="cBlanco">Nosotros</NavLink>              
                    </Nav>
               </Navbar.Collapse>

                    <Nav>
                         <Nav.Link className="cBlanco" href="#link"><CartWidget cantidad="0"/></Nav.Link>
                    </Nav>
               </Container>
               </Navbar>
          </div>
     )
}

export default NavBar
