import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';


export class MenuRequirements extends Component {
  render() {
    return (
      <div>
        <h2>Requirements and Standards</h2>

        <p>
        This part provides the minimum requirements and standards the iHFeMS must meet to ensure that it creates value and the utility to its stakeholders. These requirements and standards have been drawn from the stakeholders, international literature and best practices. The requirements include both systems requirements, computing infrastructure and human resource requirements.
        </p>

        <div>


<div>
<Link to="/requirements/SystemFunctionalNonFunctionalRequirements">    
<Button size="lg" variant="outline-success" >System Functional and Non-functional Requirements</Button>
</Link> 
</div>

<br></br>

<div>
<Link to="/requirements/FunctionalRequirements">
  <Button size="lg"  variant="outline-success">Functional Requirements</Button>
  </Link>
  </div>

  <br></br>


  <div>
  <Link to="/requirements/NonFunctionalRequirements">
  <Button size="lg"  variant="outline-success">Non Functional Requirements</Button>
  </Link>
  </div>

  <br></br>



  <div>
<Link to="/requirements/GeneralConstraintsRisk">
  <Button size="lg" variant="outline-success">General Constraints and Risk</Button></Link>
  </div>

  <br></br>


  <div>
  <Link to="/requirements/StandardsInformationExchange">
  <Button size="lg" variant="outline-success">Standards and Information Exchange</Button></Link>
  </div>

  <br></br>


  <div>
  <Link to="/requirements/InfrastructureHumanResourceRequirements">
  <Button size="lg" variant="outline-success">Infrastructure and Human Resource Requirements</Button></Link>
  </div>

  </div>

 
        {/* <Link to="/requirements/SystemFunctionalNonFunctionalRequirements">System Functional and Non-functional Requirements</Link> 
        <br></br><Link to="/requirements/FunctionalRequirements">Functional Requirements</Link> 
        <br></br><Link to="/requirements/NonFunctionalRequirements">Non Functional Requirements</Link> 
        <br></br><Link to="/requirements/GeneralConstraintsRisk">General Constraints and Risk</Link> 
        <br></br><Link to="/requirements/StandardsInformationExchange">Standards and Information Exchange</Link> 
        <br></br><Link to="/requirements/InfrastructureHumanResourceRequirements">Infrastructure and Human Resource Requirements</Link> 
 */}
      </div>
    )
  }
}

export default MenuRequirements
