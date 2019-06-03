import React from 'react'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from 'react-router-dom';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import InputGroup from 'react-bootstrap/InputGroup'




export default function Navigation() {
  return (

    <div align="center">
      <br></br>
      <br></br>

      <div className="d-flex flex-column">

        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">

              <Link to="/Home">
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



            </Nav>


          </Navbar.Collapse>

        </Navbar>





      </div>

      <br></br>

      {/*   <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
     */}

      {/* <div align="right">
<Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" defaultValue="" />
      <Button variant="outline-primary">Search</Button>
    </Form>
    </div> */}

      <br></br>
      <br></br>
    </div>


  )
}
