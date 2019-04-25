import React from 'react'

export default function StandardsInformationExchange() {
  return (
    <div>
      <h2>Standards and Information Exchange</h2>

      <p>It is required that the iHFeMS be able to share and exchange information with other systems in the
                                    health sector. This is important because of several reasons; increased efficiency through decreasing
                                    entry of duplicate data, decreased errors in medical information through the same mechanism,
                                    increased availability of health information promoting better decision making and improved continuity
                                    of patient care. The integration and information sharing between health systems requires systems
                                    to be interoperable. The interoperability is achieved through standardization process that requires
                                    the creation, acceptance and implementation of clinical data standards to ensure that data in one
                                    system are available and meaningful in another system. The selection of iHFeMS data, coding and
                                    interoperability standards has been guided by the following principles:
                                <ul>
                                <li>Open non-proprietary standards will be given preference over proprietary ones.</li>
                                <li>International standards, which have been implemented and validated, will be preferred.</li>
                                <li>Development of a new standard will only be considered as a last resort when there is no
                                    international standard available.</li>
                                <li>The standards proposed will ensure value for money and minimize cost of compliance</li>
                                </ul>


                                </p>

                                <h3>Objectives</h3>
                                <p>
                                    To identify the minimum set of standards required for implementing iHFeMS. The standards have
                                    been drawn from international standards.
                                </p>

                                <h3>Scope</h3>
                                <p>
                                    The scope of the iHFeMS standards covers data exchange, coding standards to enable interoperability
                                    and data sharing.
                                </p>

                                <h3>Standard Guidelines</h3>

                                <h4>iHFeMS shall support Data exchange (or messaging) standards</h4>
                                <p>SG1. The iHFeMS must have the capability to transmit and receive a defined minimum set of
                                    patient data via standardized HL7 messaging. Health Level 7 (HL7) is a flexible standard by
                                    which various health care systems can communicate with each other; it is typically used for
                                    transmission of patient level data.
                                    <br></br>SG2. By using the HL7 the iHFeMS shall be able to exchange of information, data standards have to
                                    be developed to ensure consistency of both structure and meaning of data between information
                                    Guidelines and Standards for Integrated Health Facility Electronic Management Systems 37
                                    systems. Standard formats require agreement both on format (syntax) and meaning (semantics).
                                    Format is the order and structure of specific data fields, while meaning is expressed through the
                                    choice of coding schemes, rules, and other constraints on content.</p>

                                <h4>iHFeMS shall support coding standards</h4>
                                <p>
                                    SG1. The iHFeMS system should be able to build up the data for medical records using standard
                                    the International Classification of Diseases (ICD) version 10. International Classification of
                                    <br></br>Diseases (ICD) is a statistical classification system used to assign diagnostic and procedural
                                    codes in order to produce coded data for statistical analysis, epidemiology, reimbursement and
                                    resource allocation.

                                </p>

                                <h4>iHFeMS shall support interoperability standards</h4>
                                <p>
                                    For information sharing between different systems to occur it requires data exchange standards for
                                    packaging and transmitting the data.
                                    <br></br>SG1. The iHFeMS must be able to share data with other systems such as DHIS2, HRHIS, PACS,
                                    financial systems etc. using data exchange standards /communication interfaces e.g. Application
                                    Programming Interfaces (APIs) developed based on different technologies such as JSON, XML,
                                    DXML etc.
                                    <br></br>SG2. The system shall also be able to interface seamlessly with third party diagnostic devices such as
                                    digital X-Rays, MRIs etc.
                                    SG3. In addition to the above, Health Facilities should adhere to eGovernment related standards and
                                    guidelines such as eGovernment Interoperability Framework (eGIF), Data Architecture etc.
                                </p>

    </div>
  )
}
