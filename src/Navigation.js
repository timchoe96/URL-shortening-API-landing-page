import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import logo from './images/logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
        return(
            <div className = 'navigation'>
          <Navbar  expand="lg">
  <Navbar.Brand href="#home"><img src={logo} alt=''></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className='navCollapse'>
    <Nav className="mr-auto">
      <Nav.Link className='hoverText' >Features</Nav.Link>
      <Nav.Link className='hoverText' >Pricing</Nav.Link>
      <Nav.Link className='hoverText' >Resources</Nav.Link>
    </Nav>
    <Nav.Link className='hoverText Login' href="#home">Login</Nav.Link>
    <button className='signUp'>Sign Up</button>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
}

export default Navigation;