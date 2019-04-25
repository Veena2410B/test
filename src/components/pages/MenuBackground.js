import React, {Component } from 'react'
import { Link } from 'react-router-dom';

import Modal from '../../components/layout/modal/Modal';
import Vision from './background/Vision';
import Purpose from './background/Purpose';
import Audience from './background/Audience';

import Card from 'react-bootstrap/Card'



class MenuBackground extends Component {


  state = {
    isOpen1: false,
    iOpen2: false,
    isOpen3: false

  }

 render(){

  return (

       
    <div>

    <h1>Background</h1>
        <br></br>
        <div>
      <button onClick={(e) => this.setState({ isOpen1: true, isOpen2: false, isOpen3: false})}>Vision</button>
      <button onClick={(e) => this.setState({ isOpen2: true, isOpen1: false, isOpen3: false})}>Purpose</button>
      <button onClick={(e) => this.setState({ isOpen3: true, isOpen1: false, isOpen2: false})}>Audience</button>
      <Modal isOpen={this.state.isOpen1} onClose={(e) => this.setState({isOpen1: false})}>
      <Vision></Vision>
        </Modal>
      <Modal isOpen={this.state.isOpen2} onClose={(e) => this.setState({isOpen2: false})}>
         <Purpose></Purpose>
        </Modal>
        <Modal isOpen={this.state.isOpen3} onClose={(e) => this.setState({isOpen3: false})}>
         <Audience></Audience>
        </Modal>
        <br></br>
        </div>
        <div className="c">
        <Card bg="success" text="white" >
    <Card.Header> </Card.Header>
    <Card.Body>
      <Card.Title> </Card.Title>
      <Card.Text>
    
        The Ministry recognizes the potential of information and communication technology (ICT) in
transforming healthcare delivery by enabling information access and supporting healthcare operations,
management, and decision-making. In response to this the National eHealth Strategy was formulated
to guide such a transformation. One of the key areas targeted for transformation is the use of ICT
to make health facilities more effective and efficient. This necessitates the need to have an integrated
Health Facility Electronic Management System (iHFeMS) that implements the re-engineered Health
facility business processes in order to make Health facility become effective and efficient.
The feasibility study revealed that efforts to computerize various clinical and administrative functions
have been noticeable in some health facilities in Tanzania. While there is significant improvement in
management of health resources, the degree of success on automation has been varying significantly,
with some obtaining poor results. However, few challenges were observed as follows.
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card bg="warning" text="white" >
  <Card.Header>Inadequate governance </Card.Header>
    <Card.Body>
      <Card.Title>Inadequate governance </Card.Title>      <Card.Text>
      The study revealed inadequate governance in implemented information systems for Health facility
business processes. Acquisitions, deployment, operationalization of many existing systems were handed
in ad-hoc way resulting in either insufficient utilization or poor performance.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card bg="dark" text="white" >
  <Card.Header> Diverse scope of functionalities</Card.Header>
    <Card.Body>
      <Card.Title> Diverse scope of functionalities</Card.Title>      <Card.Text>
      The study revealed diverse scope of functionalities being implemented by Health facility. Existing
information systems cater for fragmented functionalities relative to a range of activities in a typical
Health facility setting. There is neither criterion for establishing functionalities of high priority for
automation nor established minimum set of requirements for the same. Thus, data sharing among
these information systems is difficult.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="primary" text="white" >
  <Card.Header> Inadequate standards</Card.Header>
    <Card.Body>
      <Card.Title> Inadequate standards</Card.Title>      <Card.Text>
      Standards are essential for ensuring interoperability. The feasibility study revealed that many
information systems were implemented without focus on standards. Thus, facilitation of information
exchange between two or more different systems is a challenging exercise.
One possible approach to addressing the above mentioned challenges that is well acknowledged is to
establish a national-driven iHFeMS implementation framework that constitute (i) a minimum set
of requirements that the iHFeMS must meet to provide the value and utility to the stakeholders, (ii)
a minimum set of standards that the iHFeMS system must support to ensure interoperability and
therefore information exchange and sharing between eHealth systems, and (iii) a set of guidelines that
must be followed for successful implementation of the iHFeMS. In response to this, the Ministry has
developed the requirements, standards and implementation guidelines for Integrated Health Facility
Electronic Management System.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
</div>
    </div>
  )
}
}

export default MenuBackground