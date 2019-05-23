import React from 'react'
import Table from 'react-bootstrap/Table'


export default function FunctionalRequirements() {
  return (
    <div>
      <h2>Functional Requirements</h2>

      <p>Functional requirements capture the intended behavior of the iHFeMS expressed as services, tasks or
                                    functions the system is required to perform. There are various techniques that will help you to indicate
                                    the level of priority of each system requirement. We have chosen to address the minimum requirement
                                    that must be incorporated in each iHFeMS with a word <i>Must</i> to indicate a <i>Mandatory</i> priority.
                                    </p>
                                <br></br>
                                <h4>Objective</h4>
                                <p>
                                    To provide the minimum iHFeMS functional requirements to be followed by health facilities during
                                    implementation of a new iHFeMS or improvement of an existing system
                                </p>
                                <br></br>

                                <h4>Scope</h4>
                                <p>
                                    The Health facility functional areas covered in this document include; patient care management,
                                    laboratory, billing, pharmacy and inventory, medical record management, human resource management,
                                    management information system (dashboard), and financial management.
                                </p>

                                <h3>Patient Care Management</h3>
                                <p>The iHFeMS must provide functionalities that capture the complete and relevant patient information.
                                    The system must also automate the patient administration functions to give a better and efficient
                                    patient care process.
                                    <br></br>
                                    The iHFeMS must answer all enquiries about the patient, which include admission, appointment
                                    scheduling, billing and discharge details. </p>

                                    <p>

                                    <Table responsive>
  <thead>
    <tr>
      <th>Section</th>
      <th>User/Functional Requirements</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th> </th>
    </tr>

  </thead>
  <tbody>
    <tr>
      <td>1.1</td>
      <td>The system should handle all the admission, transfer and discharge
operations for the Health facility. It should allow for a complete
registration for a patient, or a quick registration for rapid registration at
the Ambulatory & Emergency Department.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.2</td>
      <td>System should generate a sequential Medical Record Number (MRN) for
each new patient registration.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.3</td>
      <td>MRN should be unique for each patient, and to be carried by the patient
throughout the life of the Health facility.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.4</td>
      <td>System generated sequential Account Number should be generated for
each new patient visit.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.5</td>
      <td>Account Number should be unique for each visit, and should be used for
all billing purposes.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.6</td>
      <td>The system should have the ability to capture billing and insurance
payment details to enable bills to be sent to correct payer.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>1.7</td>
      <td>The system should have the ability to make certain fields mandatory
during the registration process as per MTUHA guideline.</td>
      <td>Must</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>2.0</th>
      <th>ADMISSIONS / REGISTRATIONS (A&E)</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2.1</td>
      <td>All admissions must be performed through a registration function
(inpatient, outpatient, A&E)</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>2.2</td>
      <td>The system should have the ability to carry out a quick registration with
minimal mandatory registration information process, e.g. for the A&E
Department</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>2.3</td>
      <td>System should be able to flash alert to Registration Clerk if patient has
any outstanding bills</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>2.4</td>
      <td>The system should have the ability to capture insurance and billing
information at admission/registration time. These details will
include whether the patient should be billed or not, Guarantee Letter
information, Third Party Payer/ Insurance information etc.</td>
      <td>Must</td>
    </tr>
    <tr>
      <td>2.5</td>
      <td>If billing is applicable, the system should automatically determine the
consultation charges applicable based on the billing rules, to determine
the applicable charge, and to enable the charges to be collected prior to
the consultation.</td>
      <td>Must</td>
    </tr>
  </tbody>

  <thead>
    <tr>
      <th>3.0</th>
      <th>NEW BORN ADMISSIONS</th>
      <th></th>
    </tr>
  </thead>

  <tbody>

  <tr>
      <td>3.1</td>
      <td>Newborn admissions must be based on mother-baby link, i.e. admission
details to be based on mother’s admission record.</td>
      <td>Must</td>
    </tr>
    </tbody>


    <thead>
    <tr>
      <th>4.0</th>
      <th>BED BOARD MANAGEMENT</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>4.1</td>
    <td>Online, real time bed availability status by Ward / Department Health
facility wide</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.2</td>
    <td>Ability to search for beds by ward</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.3</td>
    <td>Ability to search for beds by bed class, within the ward</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.4</td>
    <td>Ability to search for beds by bed class, throughout the Health facility</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.5</td>
    <td>Ability to create dummy beds which can be used for admission when all
beds in ward are occupied, but pending discharges. These beds are not to
be included in the census count.</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
    <tr>
      <th>5.0</th>
      <th>TRANSFERS</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>5.1</td>
    <td>Can be effected between beds in the same ward or between war</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.2</td>
    <td>System must chronologically sequence each transfer and keep track of
patient’s movement history</td>
    <td>Must</td>
  </tr>
  </tbody>


  <thead>
    <tr>
      <th>6.0</th>
      <th>REFERRALS</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>6.1</td>
    <td>System must be online and able to provide real time status by inward/
outward referrals</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.2</td>
    <td>Ability to set Expected time of Arrival by inward referral (accept
electronic referrals)</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.3</td>
    <td>Ability to prioritize referral by patient status</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.4</td>
    <td>Ability for system to reserve resources (including Operating rooms,
ambulance, wheelchair etc) pending referral arrival</td>
    <td>Must</td>
  </tr>


  </tbody>

  <thead>
    <tr>
      <th>7.0</th>
      <th>DISCHARGES</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>7.1</td>
    <td>Ability for system to check that all formalities have been completed and
to trigger warnings otherwise.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.2</td>
    <td>If a patient has to be billed (i.e. a patient without a Guarantee Letter),
the system will check that a Discharge Bill has been generated; otherwise
the discharge is not to be effected.</td>
    <td>Must</td>
  </tr>

  </tbody>


  <thead>
    <tr>
      <th>8.0</th>
      <th>MASTER CODES</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>8.1</td>
    <td>The system must have a provision to set Master Codes</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.2</td>
    <td>The sex of the patients to be admitted into the ward must be validated
during the admission process.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.3</td>
    <td>Rooms within Wards: all rooms within the ward will be codified</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.4</td>
    <td>Beds for Wards: all beds within the ward will be codified, according to
bed class</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.5</td>
    <td>Type of Ward: specifies classification of ward</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.6</td>
    <td>Bed Class: specifies classification of beds, and should be used to set up
entitlements</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.7</td>
    <td>Admission Type: specifies the nature of admission</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.8</td>
    <td>Transfer Type: specifies the nature of transfer</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
    <tr>
      <th>9.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>9.1</td>
    <td>Standard Reports: Based on the government requirements (MTUHA)</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>9.2</td>
    <td>Ad-hoc Reports: Based on emerging requirements</td>
    <td>Must</td>
  </tr>

  </tbody>


  <thead>
    <tr>
      <th>10.0</th>
      <th>BED CHARGES</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>10.1</td>
    <td>Calculation of bed charges based on number of days stayed</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>10.2</td>
    <td>Calculation of bed charges based on financial class of patient</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>10.3</td>
    <td>Calculation of bed charges based on bed type</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>10.4</td>
    <td>Automatic calculation of bed charge if the bed is occupied for more than
a pre-defined number of days</td>
    <td>Must</td>
  </tr>

  </tbody>



</Table>

</p>
                                    

                                <h3>Laboratory</h3>
                                <p>The iHFeMS shall automate the investigation request and the process involved in delivering the results
                                to the concerned department/doctor of the Health facility.
                                <br></br>The system shall start by receiving online requests from doctors and also allow laboratory personnel
                                to generate requests.
                                <br></br>The iHFeMS shall support performance of various tests such as:

                                <ul>
                                    <li>Biochemistry</li>
                                    <li>Histopathology</li>
                                    <li>Parasitology</li>
                                    <li>Hematology</li>
                                    <li>Microbiology</li>
                                    <li>Serology</li>
                                </ul>

                                Laboratory tests shall be grouped under various sections and sample type (specimen). Based on the
                                request the user can input the sample and generate the sample number. Results can be entered based
                                on the sample type either to one test or multiple tests.
                                <br></br>If the test result requires approval, the supervisor shall approve the result and make it available to
                                concerned doctors. </p>

                                <p>

                                

<Table responsive> 
                                <thead>
    <tr>
      <th>Section</th>
      <th>Functional Description </th>
      <th>Priority</th>
    </tr>
  </thead>


  <thead>
    <tr>
      <th>1.0</th>
      <th>GENERAL </th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>1.1</td>
    <td>The system will be used in the AP Section of the Main Laboratory,
serving the needs of the Inpatients, Outpatients, Emergency
Departments, and Operating Theaters.</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
    <tr>
      <th>2.0</th>
      <th>CHARGING </th>
      <th></th>
    </tr>
  </thead>


  <tbody>
<tr>
    <td>2.1</td>
    <td>To create a charge in the patient’s bill for any procedure that is carried
out.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.2</td>
    <td>There should be flexibility to determine at which point the patient will
be charged for the procedure. For example, for Test A, the patient could
be charged at the point the test is ordered, while he could be charged
only when the procedure has been reported for Test B, or when the
procedure has been completed for Test C.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.3</td>
    <td>There will be an option for a supervisor to reverse a charge if required</td>
    <td>Must</td>
  </tr>

  </tbody>

  <thead>
    <tr>
      <th>3.0</th>
      <th>REPORTS </th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>3.1</td>
    <td>Inquiries by Patient name or MRN, Accession number, Physician, Source
(ward / clinic / department), Test Charges collected lab wise.</td>
    <td>Must</td>
  </tr>

  </tbody>

  </Table>

                                </p>

                                <h3>Laboratory Order Management</h3>
                                <p>
                                    The Order Management application addresses the order entry, order review and/or validation
                                </p>

                                <p>
                                    <Table>

                                    <thead>
    <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>

  </thead>

  <tbody>
<tr>
    <td>1.1</td>
    <td>The Order Management application addresses the order entry, order
review and/or validation, It is envisioned that orders can be placed for
any ancillary department by any user in the Health facility, depending on
the security level assigned to him</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
  <tr>
      <th>2.0</th>
      <th>ORDER ENTRY</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>2.1</td>
    <td>The order entry process can be decentralized, i.e. an order can be placed
from any PC within the Health facility.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.2</td>
    <td>The system will be able to handle the following order types: single order,
multi-departmental orders.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.3</td>
    <td>Users should be able to place any type of order, clinical or non-clinical,
from one application.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.4</td>
    <td>Each order type must have its own set of pre-determined data fields.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.5</td>
    <td>There is an option to identify the urgency of an order.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.6</td>
    <td>There is an option to cancel or modify an order if it has not been
processed yet.</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
  <tr>
      <th>3.0</th>
      <th>ORDER PROCESSING</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>3.1</td>
    <td>The status of any order will be updated automatically, real-time, by the
system to enable users to have an online review of the status of any order
for any patient.</td>
    <td>Must</td>
  </tr>

  </tbody>

  <thead>
  <tr>
      <th>4.0</th>
      <th>ORDER INQUIRY</th>
      <th></th>
    </tr>
  </thead>



<tbody>
<tr>
    <td>4.1</td>
    <td>Users can review the status of any order online from anywhere within the
Health facility.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.2</td>
    <td>Users must be restricted into viewing information only on those patients
in their assigned locations</td>
    <td>Must</td>
  </tr>

  </tbody>

  <thead>
  <tr>
      <th>5.0</th>
      <th>CHARGING</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>5.1</td>
    <td>The system creates a charge in the patient’s bill for any procedure that is
carried out.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.2</td>
    <td>There will be flexibility to determine at which point the patient will be
charged for the procedure. For example, for Test A, the patient could be
charged at the point the test is ordered, while he could be charged only
when the procedure has been reported for Test B, or when the procedure
has been completed for Test C.</td>
    <td>Must</td>
  </tr>

  </tbody>


  <thead>
  <tr>
      <th>6.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>6.1</td>
    <td>Standard Reports: Based on the government requirements (MTUHA)</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.2</td>
    <td>Ad-hoc Reports: Based on emerging requirements</td>
    <td>Must</td>
  </tr>

  </tbody>

  



                                    </Table>

                                    </p>

                                <h3>Operating Theatre Management</h3>
                                <p>
                                    The iHFeMS shall have a component to provide all functions required for managing and charging
                                    operating theatres services of the Health facility.
                                    <br></br>The system component shall be able to automatically create a charge in the patient’s bill for any
                                    procedure that is carried out.
                                    <br></br>It shall provide easily accessible and immediate reports on surgeries not yet charged, surgeries completed
                                    not yet charged, etc.
                                </p>

                                <p>
                                    <Table>

                                    <thead>
  <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
<tr>
    <td>1.1</td>
    <td>The Operating Theatre (OT) Management application will provide all
functions required for charging of the Operating Theatres of the Health
facility</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
  <tr>
      <th>2.0</th>
      <th>CHARGING</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>2.1</td>
    <td>The system automatically creates a charge in the patient’s bill for any
procedure that is carried out.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.2</td>
    <td>There will be an option for a supervisor to reverse a charge if required</td>
    <td>Must</td>
  </tr>
  </tbody>

  <thead>
  <tr>
      <th>3.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>3.1</td>
    <td>Exception Reports for the following:</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.1.1</td>
    <td>Surgeries not yet Charged</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.1.2</td>
    <td>Surgeries completed but charging not done.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.1.3</td>
    <td>Surgeries rescheduled.</td>
    <td>Must</td>
  </tr>

</tbody>

                                        </Table>
                                    </p>

                                <h3>Billing</h3>
                                <p>
                                    The system must provide functionalities related to billing of the patient for all the services taken in the
                                    Health facility. Patients/clients must be billed according to business rules of the Health facility, which
                                    must be maintained and validated by the system.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th></th>
    </tr>
                                        <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
 </thead>

 <tbody>
<tr>
    <td>1.1</td>
    <td>The system must provide the Health facility with a comprehensive
facility to track all charges for a patient from the point of registration to
the stage of discharge / completion of a visit.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>The billing process must be flexible so that it can be done for inpatients
at pre defined periods or at end of the episode, while for outpatients it
can be done at each service point (either at the point the order is placed
or at the point it is completed), or at the end of the visit</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>The system must be fully integrated so that billing transactions can
be automatically posted to the patient’s account from the laboratory,
radiology, operating theatres, pharmacy, wards/clinics and so on.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>Patient Billing must also be integrated with Accounts Receivable for
managing credit patients.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>Electronic payments must be directly credited to the health facility
collection account.</td>
    <td>Must</td>
  </tr>
</tbody>

 <thead>
  <tr>
      <th>2.0</th>
      <th>CHARGING</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>2.1</td>
    <td>The system must be able to classify patients into various Billing Groups
in order to group patients into various paying categories.</td>
    <td>Must</td>
  </tr>
</tbody>

    <thead>
  <tr>
      <th>3.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>3.1</td>
    <td>System must be able to allow users to define various classes of service
rendered in user-defined terms as say, first class single bed / first class
double bed/ second class bed / ordinary class bed / etc</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.2</td>
    <td>Billing classes will be determined and entered into the system at
registration time.</td>
    <td>Must</td>
  </tr>
</tbody>

<thead>
  <tr>
      <th>4.0</th>
      <th>BED CHARGES</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>4.1</td>
    <td>The system should provide flexibility in defining bed charges depending
on the type of ward / room / bed</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.2</td>
    <td>If the patient occupies beds of differing classes on the same day, the bed,
which has the higher daily bed charge, will be selected for billing</td>
    <td>Must</td>
  </tr>
  </tbody>

    <thead>
  <tr>
      <th>5.0</th>
      <th>BILLS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>5.1</td>
    <td>System must have flexibility to print inpatient bills periodically for all
inpatients or individually at the end of the inpatient episode.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.2</td>
    <td>The system must have flexibility to print interim bills for inpatients</td>
    <td>Must</td>
  </tr>
  <tr>
    <td>5.3</td>
    <td>The system must have flexibility to print outpatient bills at each service
point, at the point that the service is provided or consolidated at the end
of the outpatient visit.</td>
    <td>Must</td>
  </tr>
  <tr>
    <td>5.4</td>
    <td>The system must be able to automatically calculate all relevant
government service taxes and add it to the bill. (Where applicable)</td>
    <td>Must</td>
  </tr>
  </tbody>

    <thead>
  <tr>
      <th>6.0</th>
      <th>CASHIERING FUNCTIONS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>6.1</td>
    <td>There must be provision to identify the Cashier Counter during cashier
operations to ensure accountability of all transactions processed. This
will also record the cashier identifications such as his user id, which is
unique within the system.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.2</td>
    <td>The system must have facility to process various kinds of receipts,
for example, Collection against a bill, Collection against an account
receivable for patients with credit facility, Collection of a deposit,
Collection of a pre-payment, etc.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.3</td>
    <td>The system must have facility to process various kinds of refunds, for
example, Refund against a bill, Refund of a deposit etc.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.4</td>
    <td>Ability to print receipts / refund documents on pre-printed stationery in
on-line mode or batch mode</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.5</td>
    <td>All receipts and refund documents must be customizable by the users</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.6</td>
    <td>System must support various types of receipt printing based on visit
type; for example, a different receipt is required for an emergency visit as
compared to an Outpatient visit or Inpatient visit.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.7</td>
    <td>Receipts must have system generated sequential numbers, the format of
which will be user-defined.</td>
    <td>Must</td>
  </tr>
  </tbody>


    <thead>
  <tr>
      <th>7.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
    </thead>
    <tbody>
<tr>
    <td>7.1</td>
    <td>Inquiry on Patient Details</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.2</td>
    <td>Inquiry on Patient Charge Profile</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.3</td>
    <td>Inquiry on account status</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.4</td>
    <td>List of Receipts</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.5</td>
    <td>List of Third Party Payer Bills, to be printed on a pre-defined schedule</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.6</td>
    <td>List of discharges to reconcile with bills</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.7</td>
    <td>Inpatient bills in detail as well as summary</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.8</td>
    <td>Inquiry on patient financial details by
<br></br>Patient name
<br></br>Account number</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.9</td>
    <td>Inquiry on any transactions recorded In an account</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.10</td>
    <td>Inquiry in patient’s current charges and outstanding status</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.11</td>
    <td>Top up reports for patients whose current charges have exceeded the
deposit paid</td>
    <td>Must</td>
  </tr>

  </tbody>


                                    </Table>
                                </p>

                                <h3>Pharmacy and Inventory Management</h3>
                                <p>
                                    The iHFeMS shall provide functionalities for requisition of medical supplies, purchase of items,
                                    issuance of items, stock management, automatic reorder level setting, online request for stock from
                                    main store to various sub-stores and dispensing points, management of stock at different categories
                                    such as physical stock verification and adjustment, return of medical supplies to supplier.
                                    <br></br>
                                    The system shall be able to receive prescriptions from the consulting doctors and reflect automatically
                                    into dispensing unit and payment counter of a respective patient.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
      <th>Section</th>
      <th>User/Functional Requirements</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>STOCK CONTROL</th>
      <th></th>
    </tr>

    </thead>

    <tbody>
    <tr>
    <td>1.1</td>
    <td>The pharmacist may set the stock levels required by the Health facility
to maintain one or more pharmacy outlets within the Health facility.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>The stocks can be replenished by a process or manually triggered by the
person responsible.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>Automatically generate reorder documents for the procurement of new
stock.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>The system will also facilitate manual entry of requisitions from the
various wards/clinics/departments in the Health facility.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>Expiry and non-expiry items must be supported. For expiry items stock
is maintained at batch level with expiry date for each batch; and any
store transaction must identify the batches being processed as part of the
transaction.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.6</td>
    <td>Facility must maintain preparation details and constituent items for
manufacturing items. Manufacturing receipts use this information
to receive the prepared item into stock and reduce stock from the
constituents that have been used. Plus minus variation limits can be set
on usage of constituents.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.7</td>
    <td>Facility to record transfers between main stores, sub stores and
dispensing points.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.8</td>
    <td>Stock balance must be updated immediately on confirming a transaction
(receipt of stock into inventory, returns to vendors, dispensing to
patients) to reflect true on-hand status at any time.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.9</td>
    <td>Automatic validation and warning on expiry of items.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.10</td>
    <td>Provision to remove expired items from active stock to be replaced or
destroyed.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.11</td>
    <td>Provision for recording physical stock check figures and generating
variance reports and automatic adjustments.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.12</td>
    <td>Mandatory entry of reason in adjustments for audit purposes.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.13</td>
    <td>Stock transactions effect on financial accounts need to be reflected in
the General Ledger based on the accounting linkages.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.14</td>
    <td>Provision to close each accounting month, after all transactions have
been recorded for that month.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.15</td>
    <td>Outgoing medicines and prescriptions are automatically deducted from
its stock list.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.16</td>
    <td>For each item-store combination, the minimum/maximum quantities
and re-order quantities are maintained depending on the policies and
procedures adopted for replenishment of stock at the sub-stores and
non-stock stores.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.17</td>
    <td>As the inventory levels reach reorder points, the system will
automatically generate purchase orders for reordering by comparing the
stock-on-hand with the reorder level. The orders must be reconciled
upon delivery.</td>
    <td>Must</td>
  </tr>
    </tbody>

<thead>
    <tr>
      <th>2.0</th>
      <th>MEDICATION ORDERS</th>
      <th></th>
    </tr>
    </thead>

<tbody>
    <tr>
    <td>2.1</td>
    <td>Medication orders can be entered for inpatients that are identified by
their financial numbers so that medications can be connected to each
term of stay separately.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.2</td>
    <td>The medicine item codes must be easily and quickly retrieved in the
system by trade or generic name search.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.3</td>
    <td>The system will allow order entry in centralized or decentralized
locations throughout the Health facility, by various categories of staff
such as physicians, nurses, clerks or technicians.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.4</td>
    <td>Pharmacist verification, if required, will be quickly and efficiently
entered or modified for conditional medication orders. Clinical alert
warnings may be delayed until the pharmacist verification step or
may appear during non-pharmacist order entry. In all cases, clinical
warnings, including user actions, must be recorded for action and review
at a later time.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.5</td>
    <td>Master Codes – the following Master Codes must be set up within the
system:</td>
    <td></td>
  </tr>

  <tr>
    <td>2.5.1</td>
    <td>Medication Forms: Code and description for the various forms in which
medicines are Available.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.5.2</td>
    <td>Route of Administration: Code and description for the different
methods in which a medicine can be administered, e.g. Intravenous,
Oral.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.5.3</td>
    <td>Instructions for Administration: Code and description for brief
instructions on the method of administering a medicine to patients.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.6</td>
    <td>The system must enable users to enter all medications into the system
from the same screen. Medications can be selected by generic name,
therapeutic category or product codes.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.7</td>
    <td>Common order entry sets should be defined to further expedite the
order entry process by having the most commonly used items preselected
for activation and the less customary items Available for
activation.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.8</td>
    <td>If there have been medication orders earlier for the same inpatient, then
medications issued to the patient must be checked for inclusion of these
medicines and warnings issued where appropriate</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.9</td>
    <td>For controlled medicines/drugs, a supervisor must authorize the issue
before the transaction can be processed.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.10</td>
    <td>The system must have provision for returns against prescriptions</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.11</td>
    <td>The system must provide support for all medication orders, processing,
administration, and dispensing in a paperless environment.</td>
    <td>Must</td>
  </tr>

  </tbody>

    <tr>
      <th>3.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>

    <tbody>

    <tr>
    <td>3.1</td>
    <td>Medicines formulary inquiry by code, trade name and generic name.</td>
    <td></td>
  </tr>

  <tr>
    <td>3.2</td>
    <td>Inquiry on medicine interactions.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.3</td>
    <td>Inquiry on patient’s total medicine profile (all medications and
prescriptions to date).</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.4</td>
    <td>List of inpatient medication orders by patient, ward and doctor.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.5</td>
    <td>List of outpatient prescriptions by patient, clinic and doctor.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.6</td>
    <td>List of Repeating Orders for a given drug store/pharmacy and for a
specified range of dates.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.6.1</td>
    <td>Controlled drug register</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.7</td>
    <td>List of discontinued drugs</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.8</td>
    <td>Stock status report</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.9</td>
    <td>Stock ledger</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.10</td>
    <td>Stock Analysis reports on fast moving items, slow moving items and
non-moving items.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.11</td>
    <td>Consumption statement by item and by ward/clinic/department.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.12</td>
    <td>Valuation statements by costing units</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.13</td>
    <td>Expiration list by period</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.14</td>
    <td>Items to be re-ordered</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.15</td>
    <td>Items above maximum stock levels</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.16</td>
    <td>Daily transaction details report</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.17</td>
    <td>On-line stock status inquiry by item for all stores in the Health facility
and by store for all items in that store.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.18</td>
    <td>Inquiry on stock transactions for an item.</td>
    <td>Must</td>
  </tr>
    </tbody>


                                    </Table>
                                    </p>

                                <p> 
                                
                                Pharmacy and Inventory Management - Report and Request

                                <Table>
                                    <thead>
 <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>General</th>
      <th></th>
    </tr>
                                    </thead>

                                    <tbody>
<tr>
    <td>1.1</td>
    <td>The system must be able to handle on-line data entry (including
eLMIS)</td>
    <td>Must</td>
  </tr>

</tbody>

<thead>
<tr>
      <th>2.0</th>
      <th>VENDOR INFORMATION</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>2.1</td>
    <td>Vendor codes should be alphanumeric.</td>
    <td>Must</td>
  </tr>

<tr>
    <td>2.2</td>
    <td>The vendor code should be either system generated or manually
entered.</td>
    <td>Must</td>
  </tr>

<tr>
    <td>2.3</td>
    <td>A short name or vendor codes will be used to access vendors during
transaction entry and enquiries.</td>
    <td>Must</td>
  </tr>

<tr>
    <td>2.4</td>
    <td>The system should cater for the following information on the vendor
record:</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.4.1</td>
    <td>Vendor code, vendor short name, vendor name, vendor address, vendor
telephone, vendor facsimile number, vendor contact person, vendor
type, optional bank details, optional or user-defined multiple credit
terms or contract information, currency details, payment method,
credit limit, last date of activity, lead time, history, GL codes for
purchases, creditors and cash</td>
    <td>Must</td>
  </tr>

<tr>
    <td>2.5</td>
    <td>The system should produce a list of vendors with no activity for a
specified period of time.</td>
    <td>Must</td>
  </tr>
</tbody>


    <thead>
<tr>
      <th>3.0</th>
      <th>VOUCHER ENTRY</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>3.1</td>
    <td>The system should provide:</td>
    <td>Must</td>
  </tr>

  <tr>
    <td></td>
    <td>Invoice register facilities</td>
    <td>Must</td>
  </tr>

  <tr>
    <td></td>
    <td>Validation of invoice values</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.2</td>
    <td>The system should register and certify the invoice at the same time.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.3</td>
    <td>The system should record to whom invoices have been sent for either
approval, General Ledger (GL) coding or adjustment.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.4</td>
    <td>The system should allow for the following fields in the transaction
record: Vendor code, vendor reference invoice number, transaction
reference for internal use, invoice type, terms, invoice date, invoice
receipt date, posting date, due date, period, gross amount, discount,
net amount, optional quantity, optional unit price, transaction
currency, currency rates, payment method e.g. cheque, bank details,
order number and link to order details e.g. Item code, type, order
quantity, GL code, hold information – before updating GL, status
code – delivered or not, flag prepaid for items</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.5</td>
    <td>The system must check for duplicate vendor invoice numbers.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.6</td>
    <td>There should be no limit to the number of lines per invoice.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.7</td>
    <td>General ledger code distributions should be entered on:
<br></br>Purchase orders, vendor record, individual lines on an invoice</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.8</td>
    <td>General ledger distribution codes should be validated online in the
Accounts Payable (AP) and invalid transactions rejected.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.9</td>
    <td>The system must check that the total recorded against the distribution
lines equals the total invoice sum.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.10</td>
    <td>The system should be able to handle discounts as either a percentage or
an amount.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.11</td>
    <td>The system should automatically post a discount to the correct general
ledger account for discounts.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.12</td>
    <td>It should be possible for a group of invoices to be authorized for
payment together.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.13</td>
    <td>Matching should be available for both the whole invoice and line by line</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.14</td>
    <td>It should be possible to process and authorize a goods received note.</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>3.15</td>
    <td>A credit note can be matched with parts of one invoice</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>3.16</td>
    <td>Amount transactions entered on-line can be posted at the end of the day
or period.</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>3.17</td>
    <td>Posting should update the accounts payable, general ledger</td>
    <td>Must</td>
  </tr>
  </tbody>


    <thead>
<tr>
      <th>4.0</th>
      <th>PROCESSING OPTIONS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>4.1</td>
    <td>The system should allow processing of more than one accounting period
typically previous and future periods.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.2</td>
    <td>The system should handle accruals with automatic reversal in the next
period.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.3</td>
    <td>The system accepts open item accounting.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>4.4</td>
    <td>It should be possible to search using:
<br></br>Supplier name, supplier short name, invoice number, invoice reference,
purchase order number, cheque number, transaction date</td>
    <td>Must</td>
  </tr>


  </tbody>


    <thead>
<tr>
      <th>5.0</th>
      <th>PAYMENTS</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>5.1</td>
    <td>It should be possible to process manual cheque and they should appear
on the cheque register.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.2</td>
    <td>It should be possible to pay more than one cheque for a vendor.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.3</td>
    <td>It should be possible to stop payment of a specific invoice temporarily.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.4</td>
    <td>It should be possible to make a payment during the same processing
cycle that the invoice was entered.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.5</td>
    <td>It should be possible to pay invoices as specified without regard to the
payment-scheduled date.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.6</td>
    <td>The system should allow for part payments to be made.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.7</td>
    <td>It should be possible for individual items to be paid on the next
payment date to be listed in advance of the cheque processing cycle.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.8</td>
    <td>Duplicate payments should be identified.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.9</td>
    <td>Individual general ledger codes should be specified for each bank
account.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.10</td>
    <td>The system should be able to handle advance payments.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.11</td>
    <td>The interface with the general ledger should allow the cheque number
reference to be passed into the general ledger to assist with bank
reconciliations.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>5.12</td>
    <td>If a posted payment is voided, the GL posting should automatically be
reversed.</td>
    <td>Must</td>
  </tr>
  </tbody>


    <thead>
<tr>
      <th>6.0</th>
      <th>PURCHASE ORDER PROCESSING</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>6.1</td>
    <td>The system should facilitate matching, of purchase orders, receiving
reports and vendor invoice</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.2</td>
    <td>Matching should be available for both the whole invoice and manual
matching.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>6.3</td>
    <td>The system should produce exception reports of unmatched invoices.</td>
    <td>Must</td>
  </tr>

  </tbody>


    <thead>
<tr>
      <th>7.0</th>
      <th>INTERFACES</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>7.1</td>
    <td>The user should have the option to post to the general ledger:
at the detail level and summary level by voucher</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.2</td>
    <td>The general ledger should be posted at the same time as the accounts
payable subsidiary ledger is posted.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.3</td>
    <td>The system should support interfaces to other systems including:
purchasing, receiving, general ledger, stock control</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>7.4</td>
    <td>The system should support interface to eLMIS (Public Health Facilities)</td>
    <td>Must</td>
  </tr>


  </tbody>


    <thead>
<tr>
      <th>8.0</th>
      <th>ENDOR PURCHASE ANALYSIS (REPORTS)</th>
      <th></th>
    </tr>
    </thead>

    <tbody>
<tr>
    <td>8.1</td>
    <td>There should be a report summarizing purchase and payment history by
vendor.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.2</td>
    <td>There should be a report listing open items and paid items.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.3</td>
    <td>The system should print vendor statements.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.4</td>
    <td>The system should produce a vendor ledger listing by vendor number
and alphabetically</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.5</td>
    <td>The system should be able to produce an accounts payable invoice/
voucher register.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.6</td>
    <td>The system should produce an aged outstanding balance report by
vendor in both detail and summary.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>8.7</td>
    <td>Aging bands (e.g.. 30,60, 90 days) should be user-specified.</td>
    <td>Must</td>
  </tr>

  </tbody>



    

                                </Table>
                                </p>

                                

                                <h3>Medical Record Management</h3>
                                <p>
                                    The iHFeMS must be able to maintain the core information on clinical care. A complete standard
                                    International Classification Diagnosis (ICD) 10 must be used to build up the data for medical records.
                                    <br></br>It must be possible to maintain diagnosis, treatment advised and surgery/treatment details in the
                                    record. The system must provide two levels of medical records: One must have the basic data and the
                                    other level must have the detailed records of diagnosis and treatments.
                                    <br></br>
                                    As part of the medical records, the iHFeMS must be able to store image outputs from used equipment.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
                                        </thead>

                                        <tbody>
<tr>
    <td>1.1</td>
    <td>Collated and formatted of information on patients, as required</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>Search on patient records by patient names, patient ID, etc.</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>Complete clinical data repository</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>Capturing basic patient demographic details</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>ICD-10 codes for diagnosis and clinical findings</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.6</td>
    <td>Real time ordering of tests and medications</td>
    <td>Must</td>
  </tr>
  </tbody>

                                    </Table>
                                </p>

                                <h3>Human Resource Management</h3>
                                <p>
                                    The iHFeMS shall track and manage all the human resourcing activities with respect to the Personal
                                    and Payroll functions.
                                    <br></br>The system shall provide functionality related to employee management, directory management, leave
                                    management, and roaster management.
                                    <br></br>The iHFeMS shall be possible for the system to be integrated with biometric solutions to identify
                                    employees as they arrive and leave the Health facility premises.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
                                        </thead>

                                        <tbody>
<tr>
    <td>1.1</td>
    <td>The system should perform and manage daily attendance</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>Leave accounting and management</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>Pay slips management</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>Produce payroll reports</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>The system should be able to be integrated with biometric solutions</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.6</td>
    <td>Real time ordering of tests and medications</td>
    <td>Must</td>
  </tr>
  </tbody>

                                    


                                    </Table>
                                </p>

                                <h3>Reports Module</h3>
                                <p>
                                    The iHFeMS should provide managers with a dashboard that offers real time, at-a-glance personalized
                                    information related to various activities.
                                    <br></br>The system shall be able to dig deep in the system and come up with real-time reports to support
                                    immediate decision-making.
                                    <br></br>Health Facilities must adhere to Government reporting standards. i.e. MTUHA, CCHP, RITA etc.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
      <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
                                        </thead>

                                        <tbody>
<tr>
    <td>1.1</td>
    <td>Revenue profile doctor wise</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>Revenue profile department wise</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>Revenue profile procedure / package wise</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>Expense profile doctor wise</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>Expense profile department wise</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.6</td>
    <td>Expense profile procedure / package wise</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.7</td>
    <td>Treatment profile and collection profile</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.8</td>
    <td>Exception report on deviation from set of parameters for Purchase,
discounts, collections, credits</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.9</td>
    <td>Patient registration statistics</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.10</td>
    <td>Patient admission statistics by date, ward and clinician</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.11</td>
    <td>Patient discharge statistics by date, ward and clinician</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.12</td>
    <td>Bed occupancy statistics by date and ward, by doctor</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.13</td>
    <td>Outpatient visit statistics by date, clinic and clinician</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.14</td>
    <td>Inpatient visit statistics by date, clinic and clinician</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.15</td>
    <td>Contribution Statement</td>
    <td>Must</td>
  </tr>


  </tbody>

                                    </Table>
                                </p>

                                <h3>Mortuary</h3>
                                <p>
                                    The iHFeMS shall track and manage deceased activities with respect to the storage, preparations,
                                    autopsy and viewing functions.
                                </p>

                                <p>
                                    <Table>
                                        <thead>

<tr>
                                        <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>

                                        </thead>

                                        <tbody>
<tr>
    <td>1.1</td>
    <td>Mortuary accepts only deceased who have been certified dead by
authorized clinician.</td>
    <td>Must</td>
  </tr>

</tbody>

<thead>
<tr>
      <th>2.0</th>
      <th>ADMISSION/DISCHARGE</th>
      <th></th>
    </tr>
</thead>

<tbody>
<tr>
    <td>2.1</td>
    <td>The system should accept deceased body with Clinician authorization</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>2.2</td>
    <td>The system should discharge deceased bodies after burial certificate
rendered, outstanding charges for all services rendered paid and
supervisor approval.</td>
    <td>Must</td>
  </tr>

  </tbody>

  <thead>
<tr>
      <th>3.0</th>
      <th>REPORTS</th>
      <th></th>
    </tr>
</thead>

<tbody>
<tr>
    <td>3.1</td>
    <td>Bodies not yet collected</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.2</td>
    <td>Online, real time storage space availability status</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>3.3</td>
    <td>Ability to search deceased by clinician, name, next of kin, date of death</td>
    <td>Must</td>
  </tr>

  </tbody>

                                    </Table>
                                </p>

                                <h3>Financial Management</h3>
                                <p>
                                    The iHFeMS shall cater for the entire range of accounting activities that is conducted in a typical
                                    Health facility setting.
                                    <br></br>Right from when patient walks in to the time the Health facility presents its profit and loss accounts,
                                    the iHFeMS shall be able to manage and provide information from every transactional point of Health
                                    facility like pharmacy, canteen, blood bank, over time, maintenance.
                                </p>

                                <p>
                                    <Table>
                                        <thead>
                                        <tr>
                                        <th>Section</th>
      <th>Functional Description</th>
      <th>Priority</th>
    </tr>

    <tr>
      <th>1.0</th>
      <th>GENERAL</th>
      <th></th>
    </tr>
                                        </thead>

                                        <tbody>
<tr>
    <td>1.1</td>
    <td>All transaction vouchers generated in the system are collated and they
are posted on daily basis or online onto the system</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.2</td>
    <td>Cash/Credit/Bank Transaction</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.3</td>
    <td>Daily Cash Book</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.4</td>
    <td>Daily Bank Book</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.5</td>
    <td>Account Receivable Statement with Ageing Analysis</td>
    <td>Must</td>
  </tr>

  <tr>
    <td>1.6</td>
    <td>Income & Expense profile department wise / Budget w</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.7</td>
    <td>Supplier Ledger</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.8</td>
    <td>General Ledger</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.9</td>
    <td>Trial Balance</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.10</td>
    <td>Profit & Loss</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.11</td>
    <td>Balance Sheet</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.12</td>
    <td>Expenditure Analysis</td>
    <td>Must</td>
  </tr>


  <tr>
    <td>1.13</td>
    <td>Exception Analysis</td>
    <td>Must</td>
  </tr>



  </tbody>


                                    </Table>
                                </p>

    </div>
  )
}
