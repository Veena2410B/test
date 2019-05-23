import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (


        <div align="center">
    <Card>
  <Card.Header as="h5">Guidelines and Standards for Intergrated Health Facility Electronic Management System </Card.Header>
  <Card.Body>
    <Card.Title>This guideline and standard is based on the ministry's official document
    </Card.Title>
{/*     <Card.Text>
        text here
     </Card.Text> */}
    <a href="http://moh.go.tz/en/">
    <Button variant="primary">Go to the Ministry's official webpage here</Button>
    </a>

  </Card.Body>
</Card>
    
    
    
    
        </div>
      )
    }
    