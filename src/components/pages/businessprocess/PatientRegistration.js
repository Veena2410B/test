import React from 'react'

export default function PatientRegistration() {
  return (
    <div>
            <h1>Patient Registration</h1>

            <p>Patient registration process involves activities such as capturing of accurate demographic details for new
                                                    patients, updating of the information for follow up patients, creating correct clinical patient record
                                                    depending on the nature of health problem and deciding on the required mechanism of payment of
                                                    bills. Refer Figure 2.</p>

                                                <h3>Standard Guidelines for process improvements</h3>
                                                SG1. Integrate patient registration and verification activities to be performed at the same center to
                                                avoid multiple patient queues.
                                               <br></br>
                                                SG2. Eliminate corridor/unregistered patients from being attended by clinicians by providing
                                                integration and information sharing between registration and consultation.
                                               <br></br>
                                                SG3. Adapt patient registration flow as shown in figure 2 below.

{/*                                                 <img src="assets/images/figure_2.png">
 */}
                                                <h3>Procedures</h3>
                                                <p>
                                                    At minimum patient registration process should have the following procedures:-
                                                    <br></br>
                                                    P1. Patients arrive to the Health facility reception for verification. The clerk checks the patient
                                                    registration (new or existing)
                                                    <br></br>
                                                    P2. Identify whether the patient has an existing record or is a first-time user.
                                                    <br></br>
                                                    P3. Enter patient record. Create a patient record in the system for new patients. Record demographic
                                                    information with proof of identification.
                                                    <br></br>
                                                    P4. Existing patient. Search and retrieve patient record through identifying information collected. A
                                                    search needs to be done first on all patients in order to avoid duplicates.
                                                    <br></br>
                                                    P5. Validate/update demographic information. Display patient information that can be edited for
                                                    updates so the clerk can verify identification of patient.
                                                    <br></br>
                                                    P6. Exemption required. Identify whether the patient is entitled for exemption.
                                                    <br></br>
                                                    P7. Exemption verification. Verify to determine whether the patient is exempted or not.
                                                    <br></br>
                                                    P8. Credit patient. Check whether, the patient is a credit or a cash client.
                                                    <br></br>
                                                    P9. Credit verification. For credit patient, the clerk will verify and register the patient, and provide
                                                    patient with a form to be filled at each step of service provision. Insured parties, the patient and
                                                    doctor, will sign claim form the insurance card will be kept by the clerk and provided to the
                                                    patient at the end of services.
                                                    <br></br>
                                                    P10. Issue payment request. For cash patient, the clerk will provide cost of all services and provide
                                                    payment sheet to patient for settlement.
                                                    <br></br>
                                                    P11. Bill patient. For credit patient, clerk will prepare bill for each service provided
                                                    <br></br>
                                                    P12. Make payment. The cash patient will settle the payment to the revenue collector
                                                    <br></br>
                                                    P13. Enter encounter to patient record. Document current encounter to create record of the visit.
                                                    <br></br>
                                                    P14. Consultation queue. Nurse will assign order according to the prioritization process based on time
                                                    of arrival. Wait for clinician to conduct consultation.
                                                </p>

    </div>
  )
}
