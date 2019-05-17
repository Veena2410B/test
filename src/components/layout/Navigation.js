import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb'; 



export default function Navigation() {
  return (

    <div align="center">


  <Navbar bg="light" variant="light">

<Link to="/">    
<Button size="lg" variant="outline-success" >Home</Button>
</Link> 

<Link to="/MenuBackground">    
<Button size="lg" variant="outline-success" >Background</Button>
</Link> 

<Link to="/MenuBusinessProcess">    
<Button size="lg" variant="outline-success" >Business Process</Button>
</Link> 

<Link to="/MenuRequirements">    
<Button size="lg" variant="outline-success" >Requirements and Standards</Button>
</Link> 

<Link to="/MenuGuidelines">    
<Button size="lg" variant="outline-success" >Guidelines</Button>
</Link> 

{/* <Link to="/Contact">    
<Button size="lg" variant="outline-success" >Contact</Button>
</Link> 
 */}
</Navbar>

{/*       <br></br>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Prototype 3</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link to={"/"} style={{ fontSize: 18 }}> Home </Link>
          <Link to={"/MenuBackground"} style={{ fontSize: 18 }}>Background </Link>
          <Link to={"/MenuBusinessProcess"} style={{ fontSize: 18 }}>Business Process </Link>
          <Link to={"/MenuRequirements"} style={{ fontSize: 18 }}>Requirements and Standards </Link>
          <Link to={"/MenuGuidelines"} style={{ fontSize: 18 }}>Guidelines </Link>
          <Link to={"/Contact"} style={{ fontSize: 18 }}>Contact </Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar> */}

    </div>


  )
}
