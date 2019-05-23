import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { Picture } from 'react-responsive-picture';
import fig2 from '../../../../public/images/Fig2-PatientRegProcess.png'; 



export default function PatientRegistration() {
  return (
<div align="center">
 <h1>Patient Registration</h1>
 <p>Patient registration process involves activities such as capturing of accurate demographic details for new patients, updating of the information for follow up patients, creating correct clinical patient record depending on the nature of health problem and deciding on the required mechanism of payment of bills. Refer Figure 2.
</p>
 <h3>Standard Guidelines for process improvements</h3>
<p>

<ListGroup>
  <ListGroup.Item>SG1. Integrate patient registration and verification activities to be performed at the same center to avoid multiple patient queues.
</ListGroup.Item>
  <ListGroup.Item>SG2. Eliminate corridor/unregistered patients from being attended by clinicians by providing integration and information sharing between registration and consultation.
</ListGroup.Item>
  <ListGroup.Item>SG3. Adapt patient registration flow as shown in figure 2 below.
</ListGroup.Item>
</ListGroup>

</p>

            <img src={fig2} alt="Patient Registration Process Map" className="responsive"/>        



<h3>Procedures</h3>
<p>
At minimum patient registration process should have the following procedures:

<ListGroup>
  <ListGroup.Item>P1. Patients arrive to the Health facility reception for verification. The clerk checks the patient registration (new or existing)
</ListGroup.Item>
  <ListGroup.Item>P2. Identify whether the patient has an existing record or is a first-time user.
</ListGroup.Item>
  <ListGroup.Item>P3. Enter patient record. Create a patient record in the system for new patients. Record demographic information with proof of identification.
</ListGroup.Item>
  <ListGroup.Item>P4. Existing patient. Search and retrieve patient record through identifying information collected. A search needs to be done first on all patients in order to avoid duplicates.
</ListGroup.Item>
  <ListGroup.Item>P5. Validate/update demographic information. Display patient information that can be edited for updates so the clerk can verify identification of patient.
</ListGroup.Item>
  <ListGroup.Item>P6. Exemption required. Identify whether the patient is entitled for exemption.
</ListGroup.Item>
  <ListGroup.Item>P7. Exemption verification. Verify to determine whether the patient is exempted or not.
</ListGroup.Item>
  <ListGroup.Item>P8. Credit patient. Check whether, the patient is a credit or a cash client.
</ListGroup.Item>
  <ListGroup.Item>P9. Credit verification. For credit patient, the clerk will verify and register the patient, and provide patient with a form to be filled at each step of service provision. Insured parties, the patient and doctor, will sign claim form the insurance card will be kept by the clerk and provided to the patient at the end of services.
</ListGroup.Item>
  <ListGroup.Item>P10. Issue payment request. For cash patient, the clerk will provide cost of all services and provide payment sheet to patient for settlement.
</ListGroup.Item>
  <ListGroup.Item>P11. Bill patient. For credit patient, clerk will prepare bill for each service provided
</ListGroup.Item>
  <ListGroup.Item>P12. Make payment. The cash patient will settle the payment to the revenue collector
</ListGroup.Item>
  <ListGroup.Item>P13. Enter encounter to patient record. Document current encounter to create record of the visit.
</ListGroup.Item>
  <ListGroup.Item>P14. Consultation queue. Nurse will assign order according to the prioritization process based on time of arrival. Wait for clinician to conduct consultation.</ListGroup.Item>
</ListGroup>
 </p>
 <br></br>
 </div>
  )
}
