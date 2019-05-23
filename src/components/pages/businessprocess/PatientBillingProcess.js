import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

import { Picture } from 'react-responsive-picture';
import fig7 from '../../../../public/images/Fig7-PatientBillingProcess.png'; 



export default function PatientBillingProcess() {
  return (
<div align="center">
            <h1>Patient Billing Process</h1>

            <p>Health facility billing is a process to obtain payments for services and items rendered by the Health facility. The Health facility billing process begins when a patient arrives at the Health facility for diagnosis and treatment of injury, illness, diseases, or any other health condition. Patient care services and items provided during the patient stay are recorded on the patients account. Charges are posted to patients account by various departments. When patient leaves the Health facility, all information and charges are prepared for billing. Refer Figure 7.

</p>

                                                <h3>Standard Guidelines for process improvement</h3>
                                                <p>
                                                <ListGroup>
  <ListGroup.Item>SG1. Health facility payment for services can be done directly through the bank, and other methods such as mobile payment.
</ListGroup.Item>
  <ListGroup.Item>SG2. Standardize the claim forms for the credit payments.
</ListGroup.Item>
  <ListGroup.Item>SG3. Enable detection of the services covered and those that are not by the credit payment during patient care delivery.
</ListGroup.Item>
</ListGroup>
 </p>
                                                
 <img src={fig7} alt="Patient Billing Process Map" className="Fig7-PatientBillingProcess.png"/> 

 <h3>Procedures for Patient Billing Process</h3>
 <p>To ensure services rendered in a health facility are properly charged to recover the incurred costs the following procedures should be followed:-
 <ListGroup>
  
  <ListGroup.Item>P1. Patient registration and admission. Patient is received at the Health facility either as an outpatient or inpatient basis.
</ListGroup.Item>
  <ListGroup.Item>P2. Patient care order entry. Patient care services are rendered in accordance with physician’s order. The physician’s order are entered in Health facility’s information system and distributed to the appropriate department.
</ListGroup.Item>
  <ListGroup.Item>P3. Charges capture. All services and items provided during patient’s stay are documented in the patient’s record. All departments, including pharmacy and sterile supplies, involved in providing patient care are responsible for posting charges to the patient’s account.
</ListGroup.Item>
  <ListGroup.Item>P4. Chart review and coding. The patient is released from the Health facility when attending physician provides a written discharge orders and instructions. Once the patient is discharged the completed medical record, is forwarded for coding and review of patient’s medical record to identify and verify charges.
</ListGroup.Item>
  <ListGroup.Item>P5. Charge/Claim preparation. The claim management unit utilizes information gathered during the patient stay to prepare appropriate documents required for charge or claim submission. Patient invoice or statement is utilized to submit charges to the patient. Claim forms are utilized to submit charges to the third-party payer (i.e. Credit Company such as NHIF, AAR etc.).
</ListGroup.Item>
  <ListGroup.Item>P6. Charge/Claim submission. The claim management unit utilizes information gathered during the patent stay to prepare appropriate documents required for charge or claim submission. Patient invoice or statement is utilized to submit charges to the patient. Claim forms are utilized to submit charges to the third-party payer (i.e. Credit Company).
</ListGroup.Item>
  <ListGroup.Item>P7. Bill payment. Patient payments are posted and balance owed are printed on a statement and sent to the patient until the balance is paid. Claim received by payers (i.e. Credit Company) is processed after review is performed. Payment determination is conducted by the payers after claim review is performed which can results in one of the following: claim may be paid, or pended, or denied.
</ListGroup.Item>
  <ListGroup.Item>P8. Post payment transaction. Patient payments are posted and balance owed are printed on a statement and sent to the patient until the balance is paid. Claim received by payers (i.e. insurance) are processed after review is performed. Payment determination is conducted by the payers after claim review are performed which can results in one of the following: claim may be paid, or pended, or denied.</ListGroup.Item>

</ListGroup>
 </p>
 <br></br>


    </div>
  )
}
