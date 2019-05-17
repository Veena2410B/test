import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'


export class Contact extends Component {
  render() {
    return (
      <div className="c">

        <h2>Contact</h2>

        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name" placeholder="Name" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Category</Form.Label>
    <Form.Control as="select">
      <option>Home</option>
      <option>Background</option>
      <option>Business Process</option>
      <option>Requirements and Standards</option>
      <option>Guidelines</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>

<br></br>
        
      </div>
    )
  }
}

export default Contact
