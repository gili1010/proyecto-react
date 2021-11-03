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
                         <Nav.Link className="cBlanco"><NavLink to={'/'}>Home</NavLink></Nav.Link>
                         <Nav.Link className="cBlanco"><NavLink to={'/contacto'}>Contacto</NavLink></Nav.Link>
                         <Nav.Link className="cBlanco"><NavLink to={'/nosotros'}>Nosotros</NavLink></Nav.Link>              
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
