import React from 'react'

export default function FunctionalRequirements() {
  return (
    <div>
      <h2>Functional Requirements</h2>

      <p>Functional requirements capture the intended behavior of the iHFeMS expressed as services, tasks or
                                    functions the system is required to perform. There are various techniques that will help you to indicate
                                    the level of priority of each system requirement. We have chosen to address the minimum requirement
                                    that must be incorporated in each iHFeMS with a word <i>Must</i> to indicate a <i>Mandatory</i> priority.</p>
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
                                concerned doctors.

                                </p>

                                <h3>Laboratory Order Management</h3>
                                <p>
                                    The Order Management application addresses the order entry, order review and/or validation
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

                                <h3>Billing</h3>
                                <p>
                                    The system must provide functionalities related to billing of the patient for all the services taken in the
                                    Health facility. Patients/clients must be billed according to business rules of the Health facility, which
                                    must be maintained and validated by the system.
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

                                <h3>Human Resource Management</h3>
                                <p>
                                    The iHFeMS shall track and manage all the human resourcing activities with respect to the Personal
                                    and Payroll functions.
                                    <br></br>The system shall provide functionality related to employee management, directory management, leave
                                    management, and roaster management.
                                    <br></br>The iHFeMS shall be possible for the system to be integrated with biometric solutions to identify
                                    employees as they arrive and leave the Health facility premises.
                                </p>

                                <h3>Reports Module</h3>
                                <p>
                                    The iHFeMS should provide managers with a dashboard that offers real time, at-a-glance personalized
                                    information related to various activities.
                                    <br></br>The system shall be able to dig deep in the system and come up with real-time reports to support
                                    immediate decision-making.
                                    <br></br>Health Facilities must adhere to Government reporting standards. i.e. MTUHA, CCHP, RITA etc.
                                </p>

                                <h3>Mortuary</h3>
                                <p>
                                    The iHFeMS shall track and manage deceased activities with respect to the storage, preparations,
                                    autopsy and viewing functions.
                                </p>

                                <h3>Financial Management</h3>
                                <p>
                                    The iHFeMS shall cater for the entire range of accounting activities that is conducted in a typical
                                    Health facility setting.
                                    <br></br>Right from when patient walks in to the time the Health facility presents its profit and loss accounts,
                                    the iHFeMS shall be able to manage and provide information from every transactional point of Health
                                    facility like pharmacy, canteen, blood bank, over time, maintenance.
                                </p>

    </div>
  )
}
