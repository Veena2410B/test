import React from 'react'
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'


export default function MenuBusinessProcess() {
  return (
    <div>

        <h2>Business Process</h2>

<br></br>

       {/*  <Link to="/businessprocess/PatientCareManagement">Patient Care Management</Link> 
        <br></br><Link to="/businessprocess/PatientRegistration">Patient Registration</Link> 
        <br></br><Link to="/businessprocess/AdmissionProcess">Admission Process</Link> 
        <br></br><Link to="/businessprocess/DiagnosticsProcess">Diagnostics Process</Link> 
        <br></br><Link to="/businessprocess/SchedulingAppointment">Scheduling Appointment</Link> 
        <br></br><Link to="/businessprocess/PharmacyInventoryManagementProcess">Pharmacy and Inventory Management Process</Link> 
        <br></br><Link to="/businessprocess/MainPharmacyManagementProcess">Main pharmacy management process</Link> 
        <br></br><Link to="/businessprocess/MedicalSuppliesDistributionProcess">Medical supplies distribution process</Link> 
        <br></br><Link to="/businessprocess/DispensingProcess">Dispensing process</Link> 
        <br></br><Link to="/businessprocess/PatientBillingProcess">Patient Billing Process</Link>  */}

        <h3>HEALTH FACILITY BUSINESS PROCESS REENGINEERING</h3>

        <div class="c">

        <Card bg="light" text="white" >
    <Card.Body>
         <Card.Text>
      <div> Health facility business process reengineering involves critical analysis and redesign of workflows and
work practices of existing business processes within the Health facility setting in order to maximize the
value of the computerization process.</div>
<br></br>
<div>IMAGE HERE</div>
<br></br>
<div>Figure 1: Presents an overview of the Health facility business processes framework, which includes
business processes classified as core processes, support processes and back office processes. The
framework presents a high level representation of how a typical Health facility operates. This section
provides guidelines and procedures for process improvement, and process map (flow of activities) for
each business process to be supported by iHFeMS.</div>


      </Card.Text>
    </Card.Body>
  </Card>
  <br />




<Card bg="success" text="white" >
    <Card.Header> Objective</Card.Header>
    <Card.Body>
      <Card.Title>Objective </Card.Title>
      <Card.Text>
      To provide guidelines and procedures for business process analysis and improvement in order to help
health facilities rethink and improve their business processes
      
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="warning" text="white" >
  <Card.Header>Scope </Card.Header>
    <Card.Body>
      <Card.Title>Scope </Card.Title>      <Card.Text>
      All functional areas in the Health facility shall use the guidelines and procedures during acquisition of
new iHFeMS or reviewing and enhancing an existing Health facility management system.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  <Card bg="dark" text="white" >
  <Card.Header> General Standard Guidelines</Card.Header>
    <Card.Body>
      <Card.Title> General Standard Guidelines</Card.Title>      <Card.Text>
      SG1. Health facilities shall perform business process analysis and improvement based on the national
 guidelines and standards
<br></br> SG2. The business process analysis and improvement should be done alongside with iHFeMS
system requirement specifications (SRS) gathering exercise.
<br></br> SG3. The SRS shall be developed by the health facility owner and should comply with minimum
requirements provided in chapter 3.
 <br></br> SG4. The SRS shall include both functional requirements and non-functional requirements and
shall be approved by the Health facility steering committee
      </Card.Text>
    </Card.Body>
  </Card>
  <br />

  </div>



 <div>


 <Link to="/businessprocess/PatientCareManagement">    
<Button size="lg" variant="outline-success" >Patient Care Management</Button>
</Link> 

<br></br><br></br>

<Link to="/businessprocess/PatientRegistration">    
<Button size="lg" variant="outline-success" >Patient Registration</Button>
</Link> 

<br></br><br></br>

<Link to="/businessprocess/AdmissionProcess">
  <Button size="lg"  variant="outline-success">Admission Process</Button>
  </Link>

  <br></br><br></br>


  <Link to="/businessprocess/DiagnosticsProcess">
  <Button size="lg"  variant="outline-success">Diagnostics Process</Button>
  </Link>

  <br></br><br></br>


<Link to="/businessprocess/SchedulingAppointment">
  <Button size="lg" variant="outline-success">Scheduling Appointment</Button></Link>

  <br></br><br></br>


  <Link to="/businessprocess/PharmacyInventoryManagementProcess">
  <Button size="lg" variant="outline-success">Pharmacy and Inventory Management Process</Button></Link>
  
  <br></br><br></br>


  <Link to="/businessprocess/MainPharmacyManagementProcess">
  <Button size="lg" variant="outline-success">Main pharmacy management process</Button></Link>

  <br></br><br></br>


<Link to="/businessprocess/MedicalSuppliesDistributionProcess">
  <Button size="lg" variant="outline-success">Medical supplies distribution process</Button></Link>

  <br></br><br></br>

  <Link to="/businessprocess/DispensingProcess">
  <Button size="lg" variant="outline-success">Dispensing process</Button></Link>

  <br></br><br></br>

  <Link to="/businessprocess/PatientBillingProcess">
  <Button size="lg" variant="outline-success">Patient Billing Process</Button>
  </Link>

  <br></br>
  <br></br>


 </div>
  </div>
  )
}
