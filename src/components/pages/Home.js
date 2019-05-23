import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import guidelinefrontpage from '../../../public/images/guidelinefrontpage.png'; 
import { Link } from 'react-router-dom';

import { useSpring, animated} from 'react-spring'


class Home extends Component {
  render() {
    return (
      <div align="center">
      <br></br>

        <div className="c">

        <img src={guidelinefrontpage}  className="responsive"/>        
        <br></br>
        <br></br>
<Card bg="dark" text="white" >


  <Card.Header>GUIDELINES AND STANDARDS
FOR INTEGRATED HEALT FACILITY ELECTRONIC MANAGEMENT SYSTEM</Card.Header>
  <Card.Body>
    <Card.Title>This website is a guideline based on the already existing PDF document called "Guidelines and Standards for Intergrated Health Facility Electronic Management System"
    </Card.Title>
    <Card.Text>
    The Government of Tanzania’s (GoT) mission is to facilitate the provision of quality and accessible health services efficiently. Despite the noticeable improvement towards this mission, the sector still faces several challenges. These include inadequate funding, rising health facility management costs, shortage of healthcare workers and inefficiencies in the use of available resources to adequately provide required health services. To overcome these challenges the government has implemented various reforms in the health sector.
    <br></br> 

    <Link to="/home2" >[More...]</Link>


    </Card.Text>
  </Card.Body>
</Card>
<br />

        


        <br></br>

  </div>

      </div>
    );
  }
}
 
export default Home;