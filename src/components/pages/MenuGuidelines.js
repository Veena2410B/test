import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export class MenuGuidelines extends Component {
  render() {
    return (
      <div align="center"> 


<br></br>

<div>

<h2>Implementing The iHFeMS: Guidelines</h2>

<p>Part C presents the minimum requirements and standards that the iHFeMS must meet to
                              ensure
                              that it create the value and the utility to its stakeholders. However, meeting the
                              above-mentioned
                              requirements alone does not guarantee successful implementation and use of the
                              iHFeMS in a Health
                              facility. Therefore in this part we provide a set of guidelines to ensure successful
                              implementation and
                              use of the iHFeMS.
                              <br></br>
                              Activities related to the implementation and use of iHFeMS in a Health facility can
                              be grouped into
                              three main phases. They are planning, deployment, and maintenance and support. In
                              the following
                              sections, a set of activities and guidelines is presented for each of the phases.
                          </p>

<Link to="/guidelines/implementing">    
<Button size="lg" variant="outline-success" >Implementing iHFeMS</Button>
</Link> 
</div>

<br></br>


<div>
<Link to="/guidelines/monitoringEvaluation">
  <Button size="lg"  variant="outline-success">Monitoring and Evaluation</Button>
  </Link>
  </div>

  <br></br>


  <div>
  <Link to="/guidelines/closureSignOff">
  <Button size="lg"  variant="outline-success">iHFeMS Implementgation Closure And Sign-Off</Button>
  </Link>
  </div>

  <br></br>


  <div>
  <Link to="/guidelines/accessingComplianceExistingSystem">
  <Button size="lg"  variant="outline-success">Guidelines For Accessing Compliance Of Existing iHFeMS</Button>
  </Link>
  </div>

  <br></br>


{/* 
                <Link to="/guidelines/implementing">Implementing The iHFeMS: Guidelines</Link> 
                <br></br><Link to="/guidelines/monitoringEvaluation">Monitoring and Evaluation</Link> 
                <br></br><Link to="/guidelines/closureSignOff">iHFeMS Implementgation Closure And Sign-Off</Link> 
                <br></br><Link to="/guidelines/accessingComplianceExistingSystem">Guidelines For Accessing Compliance Of Existing iHFeMS</Link> 

 */}

      </div>
    )
  }
}

export default MenuGuidelines
