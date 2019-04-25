import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'; 
import Nav from 'react-bootstrap/Nav'; 
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form'; 
import FormControl from 'react-bootstrap/FormControl'; 

export default function Navigation() {
    return (
        <div>
       <br></br>
        <Navbar bg="dark"  variant="dark" expand="lg">
{/*   <Navbar.Brand href="#home">Prototype 2</Navbar.Brand>
 */}  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/MenuBackground">Background</Nav.Link>
      <Nav.Link href="/MenuBusinessProcess">Business Process</Nav.Link>
      <Nav.Link href="/MenuRequirements">Requirements and Standards</Nav.Link>
      <Nav.Link href="/MenuGuidelines">Guidelines </Nav.Link>
      <Nav.Link href="/Contact">Contact </Nav.Link>

      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

        </div>

        
    )
}
