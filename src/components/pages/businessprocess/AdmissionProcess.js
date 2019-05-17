import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export default function AdmissionProcess() {
  return (
    <div>

      
      <h1>Admission Process</h1>

      <p>
 The admission process consists of various functions required to receive a patient at the Health facility.
  The purpose of the process is to obtain required information, and determine patient care needs. A
patient can be received at various departments or units in the Health facility such as at the Emergency,
 or inpatient. Nurses will register the patient in the registration books or check from the computer if
the patient is already registered in the specific ward. Refer Figure 3.</p>

{/*                                                 <img src="assets/images/figure_3.png">
 */}
<h3>Procedures</h3>
<p>
 In order to improve patient admission process the following procedures should followed:
 <br></br>
                                                    
  <ListGroup>
  <ListGroup.Item>P1. Provide illness history. Patient meets the doctor; provide a detailed history of his/her illness.
</ListGroup.Item>
  <ListGroup.Item>P2. Admit patient. In case of admission, the patient is given the admission date and admission form is filled for further formalities
</ListGroup.Item>
  <ListGroup.Item>P3. Update registration to admission. Before admission, the patient is registered as admission and is counseled/clearly informed by the clerk regarding the treatment package, which includes estimated bill size, average length of stay and various mode of payment accepted.
</ListGroup.Item>
  <ListGroup.Item>P4. Investigate case history. A Doctor record detailed medical history background, observes the vital signs and requests various investigations depending on the condition to determine diagnosis. Doctor receives the results and plan for treatment. Also, decision is made based on the findings. Patient may be instructed to take appointment and continue with treatment as outpatient.
</ListGroup.Item>
  <ListGroup.Item>P5. Make deposit payment. Cash patient are required to make deposit payment on the estimated cost established by the Health facility policy. Otherwise for insurance or credit patient, the clerk issue bills for the service rendered and claim forms are filled properly.
</ListGroup.Item>
  <ListGroup.Item>P6. Receive payment. Revenue collector receives the payment and issue receipt to the patient.
</ListGroup.Item>
  <ListGroup.Item>P7. Receive patient and allocate bed. When the patient arrives at the ward, a nurse receives the patient and allocated him/her a bed. The patient is then attended by the clinician on duty, which involves taking/reviewing the detailed medical history and order the appropriate tests.
</ListGroup.Item>
  <ListGroup.Item>P8. Perform the required investigation/test. Investigation/tests are performed and included in the bill properly
</ListGroup.Item>
  <ListGroup.Item>P9. Billing notification required? The ward nurse liaises with billing section to get the cost and inform the relatives to pay. In some Health facility investigation bills are issued after service delivery.
</ListGroup.Item>
  <ListGroup.Item>P10. Receive and provide the test result to the physician/clinician.
</ListGroup.Item>
  <ListGroup.Item>P11. Provide treatment/administer medication. The doctor receives tests results, plans the medication to be administered to the patient. Nurse receives medication plans from the doctor for execution.
</ListGroup.Item>
  <ListGroup.Item>P12. Recovery and Discharge. After recovery patient is handed over with detailed discharge summary, which includes doctor’s advice for further follow-up treatment and medical description. However, patient must settle the outstanding bills/charges before being handed the discharge summary. The doctor may give appointment for follow-up and that will be verified at outpatient clinic.</ListGroup.Item>
</ListGroup>

  </p>
  <br></br>

  </div>
  )
}
