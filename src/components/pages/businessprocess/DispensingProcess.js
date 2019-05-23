import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { Picture } from 'react-responsive-picture';
import fig6 from '../../../../public/images/Fig6-DispensingProcess.png'; 


export default function DispensingProcess() {
  return (
<div align="center">
 <h1>Dispensing Process</h1>
 <p>The dispensing business process is a high-level and generic process designed to cover the full spectrum of health-related products including medicines, vaccines and other medical supplies. Dispensing begins with a client encounter and a determination of the type(s) of medication, which the individual needs. If the medicines are available and in the correct quantity and quality, they will be dispensed to the individual and the client’s record will be updated with appropriate information. This business process may trigger a scheduling process to inform the client of their next visit. Refer Figure 6.

</p>
 <h3>Standard Guidelines for process improvement</h3>
 <p>
 <ListGroup>
  <ListGroup.Item>SG1. Use of iHFeMS to make information of available medicines accessible to doctors during prescription to eliminate patient movement and repeat of prescription for missing medicines.
</ListGroup.Item>
  <ListGroup.Item>SG2. Enable online prescription verification by pharmacist to eliminate patient/pharmacist movement and queues to the pharmacist.
</ListGroup.Item>
</ListGroup>
 </p>

 <img src={fig6} alt="Dispensing Process Map" className="Responsive"/> 

 <h3>Procedures for Dispensing Process</h3>
<p>
In order to effective dispensing of right quantity and quality of medicine to the right client with right information for proper use the following procedures should be

 <br></br>
 <ListGroup>
  <ListGroup.Item>P1. Issue prescription. Doctor examines the patient and issue prescription for medication. The verification request is sent to the pharmacist for approval.
</ListGroup.Item>
  <ListGroup.Item>P2. Prescription verification. Pharmacist receives, review and approve the verification request through online systems. Otherwise request is sent back to doctor for modification.
</ListGroup.Item>
  <ListGroup.Item>P3. Check verified patient prescription. Upon arrival of the patient at the payment counter, the revenue collector checks in the system to determine if pharmacist has passed/verified the prescription.
</ListGroup.Item>
  <ListGroup.Item>P4. Issue payment request. The revenue collector issues the payment request for passed/verified prescription.
</ListGroup.Item>
  <ListGroup.Item>P5. Make payment. Patient makes payment and receives receipt for the medicines.
</ListGroup.Item>
  <ListGroup.Item>P6. Submit receipt. Patient submits receipt to pharmacist for verification before issuing the medicine.
</ListGroup.Item>
  <ListGroup.Item>P7. Receive payment receipt. Pharmacist receives the payment receipt before issuing medicine
</ListGroup.Item>
  <ListGroup.Item>P8. Prepare and issue medication. The pharmacist prepares medicine as per doctor prescription and issue to patient. Give the patient right information on how to use the medication
</ListGroup.Item>
  <ListGroup.Item>P9. Receive medication. Patient receives the medication and instructions from pharmacist.</ListGroup.Item>

</ListGroup>
 </p>

 <br></br>

    </div>
  )
}
