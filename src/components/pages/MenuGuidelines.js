import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export class MenuGuidelines extends Component {
  render() {
    return (
      <div>


<br></br>

<div>
<Link to="/guidelines/implementing">    
<Button size="lg" variant="outline-success" >Implementing The iHFeMS: Guidelines</Button>
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
