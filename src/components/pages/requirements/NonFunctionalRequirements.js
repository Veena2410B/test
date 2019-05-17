import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


export default function NonFunctionalRequirements() {
  return (
    <div>
      <h2>Non Functional Requirements</h2>

      <p>Non-functional requirements define the overall qualities or attributes of the resulting system that
                                    place restrictions or conditions on the system being developed, the development process, and specify
                                    external constraints that the system must meet. The non-functional requirements usually impact many
                                    parts of the system, and they may be related to one or many features e.g. How long can the system
                                    be down and how easy should it be to restart it, or if data becomes corrupt how does a user fix it and
                                    which users can do so? Taking into consideration the intricacies of Health facility setting, involving
                                    precarious situations of serving lives, ensuring that the iHFeMS adhere to a minimum set of nonfunctional
                                    attributes is indispensable.</p>
                                <h4>Objectives</h4>
                                <p>To ensure that the iHFeMS adhere to a minimum set of non-functional attributes for improved clinical
                                    and administrative service provision at the health facility.</p>
                                <h4>Scope</h4>
                                <p>The non-functional requirements covered in this guide revolve around the factors that ensure proper
                                    functioning of the iHFeMS such as usability, usefulness, etc. and its surrounding environment.</p>
                                <h4>Standard Guidelines</h4>
                                <p>The iHFeMS system should meet the following non-functional quality attributes:</p>

                                <h3>Security Requirements</h3>
                                <p>The system to be developed shall enforce security requirements based on different controls such as
                                    preventive controls, detective controls, compensating controls, corrective controls and recovery controls
                                    as well as standards and best practices. All these controls shall work while maintaining the following;
                                <br></br>

                                    <b>Confidentiality</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. The system will be handling massive of sensitive information and integrate with bodies that keep crucial information too. For this reason, sophisticated security measures must be implemented and tested from time to time to ensure their strength.
</ListGroup.Item>
  <ListGroup.Item>SG2. All sensitive data entered into the system must be encrypted by strong cryptographic techniques.
</ListGroup.Item>
  <ListGroup.Item>SG3. Additionally the system should provide security means to protect itself from automated attacks by using methods such as “CAPTCHA” when processing login requests in special cases (when the user has elevated privileges, or when a user repeatedly attempts to login without success).
</ListGroup.Item>
  <ListGroup.Item>SG4. The system shall provide the users with a secure way to change their passwords, whether when initializing a new account or by user request.
</ListGroup.Item>
  <ListGroup.Item>SG5. The system should use the HTTPS protocol in subsequent iterations in order to prevent unauthorized third-party viewing of the contents.
</ListGroup.Item>
  <ListGroup.Item>SG6. The system shall provide access for authorized users while screening out those who do not need to view confidential data.
</ListGroup.Item>
  <ListGroup.Item>SG7. The system shall provide transparent and automated security management of IDs, security policy enforcement and automated password resets. These features shall significantly reduce the on-going administration and management costs associated with web security.
</ListGroup.Item>
</ListGroup>
                                </p>

                                <p>
                                    <b>Authentication</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. First Login password generation followed by mandatory account password be changed on next login
</ListGroup.Item>
  <ListGroup.Item>SG2. Passwords must adhere to complex password rules including encryption
</ListGroup.Item>
  <ListGroup.Item>SG3. Two Factors Authentication may be used when possible (a. Username & Password b. PIN)
</ListGroup.Item>
  <ListGroup.Item>SG4. Credential Control (Official Government Email as username for Public Institution)
</ListGroup.Item>
  <ListGroup.Item>SG5. Password Expiry (3 months Max)
</ListGroup.Item>
  <ListGroup.Item>SG6. Password Reset (automated)
</ListGroup.Item>
  <ListGroup.Item>SG7. Maximum number of login failures (4 times) followed by inactivity (5 minutes)
</ListGroup.Item>
  <ListGroup.Item>SG8. Minimum number of inactivity events (2 times) followed by account lockout
</ListGroup.Item>
  <ListGroup.Item>SG9. Issue (automated) alert on inactivity events
</ListGroup.Item>
</ListGroup>

                                    <br></br>
                                </p>

                                <p>
                                    <b>Log Audit/Traceability</b>

                                    <ListGroup>
  <ListGroup.Item>SG1. Provide log records for audit and traceability on authentication violation
</ListGroup.Item>
  <ListGroup.Item>SG2. Provide automated notification when set thresholds exceed e.g. of authentication violations or role privilege violation

</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Information Access</b>
                                    <br></br>
                                    <ListGroup>
  <ListGroup.Item>SG1. Provide authorized access on role based and need to know basis
</ListGroup.Item>
  <ListGroup.Item>SG2. Provide information access (read, write, execute) right requests with respect to account role/ privilege
</ListGroup.Item>
  <ListGroup.Item>SG3. Roles mapped with Groups
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Session Life Cycle</b>
                                    <br></br>
                                    <ListGroup>
  <ListGroup.Item>SG1. Limit session inactivity/idleness (5 minutes)
</ListGroup.Item>
  <ListGroup.Item>SG2. Limit concurrent account access i.e. inactivate any other live sessions should another session get
</ListGroup.Item>
</ListGroup>
 </p>

                                <p>
                                    <b>Access Mode</b>
                                    <br></br>
                                    <ListGroup>
  <ListGroup.Item>SG1. Allow only web access to all users
</ListGroup.Item>
  <ListGroup.Item>SG2. Allow SSH only from Facility Internal Network or via the VPN for remote access only to Facility System Administrator
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Integrity</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. The system shall be shown to be capable of maintaining the integrity of all the data which it controls and makes it available.
</ListGroup.Item>
  <ListGroup.Item>SG2. Integrity testing shall form part of the system acquisition and acceptance process
</ListGroup.Item>
  <ListGroup.Item>SG3. The transaction history should be maintained
</ListGroup.Item>
  <ListGroup.Item>SG4. The system should retain partial data from interrupted entry for 15 minutes
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Reliability</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. The system must be reliable in a sense that all the functions work properly as intended and therefore users have trust in it.
</ListGroup.Item>
  <ListGroup.Item>SG2. Additionally, whenever there is an error the system should be able to communicate the problem/ error to users by reporting the likely cause and propose solution(s).
</ListGroup.Item>
  <ListGroup.Item>SG3. All LAN and/or WAN infrastructure must be fully resilient so that the failure of any single component or link cannot cause interruption of service.
</ListGroup.Item>
  <ListGroup.Item>SG4. All computer hardware (particularly all servers) and associated equipment including power supply, network interfaces, air conditioning etc. must offer full fail over capability so that the failure of any one server or other component cannot cause interruption of service.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Availability</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. The systems shall be designed to allow for continuous operation on a 24 hour, 365 day per year basis.
</ListGroup.Item>
  <ListGroup.Item>SG2. The system shall deliver an overall availability of 99.95% with the maximum length of a single downtime incident in any one calendar (January - January) year being 4 hours. This shall be enhances also by the support of frequently taken data as well as disaster recovery plan to be put in place.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Safety</b>
                                    <br></br>
                                    <ListGroup>
  <ListGroup.Item>SG1. Data on the server shall be protected from power loss but data in transit from server to requester could be lost. Given that these data will also remain on the system, rather than expend resources to prevent this loss, such failures will be monitored and the uploading process will be repeated.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <h3>System Requirements</h3>
                                <p>
                                    <b>Scalability</b>
                                    <br></br>
                                    <ListGroup>
  <ListGroup.Item>SG1. The system shall be designed to allow expansion through additional web and mobile applications.
</ListGroup.Item>
  <ListGroup.Item>SG2. The system shall be “device aware” and vary content and access based on which device a user is utilizing i.e. users can securely access the system via alternate devices, such as handheld PDAs and mobile phones.
</ListGroup.Item>
  <ListGroup.Item>SG3. It will have the capability to integrate with more stakeholders that are not specified for the time being.
</ListGroup.Item>
</ListGroup>
                                </p>

                                <p>
                                    <b>Usability</b>
                                    <br></br>

                                    <ListGroup>
  <ListGroup.Item>SG1. New visitors should not spend much time to understand how to use the system. It should be easy to use and navigate from page to page.
</ListGroup.Item>
  <ListGroup.Item>SG2. Other tools like search options and alphabetical arrangement of items can be implemented to help user obtain specific information easily and quickly.
</ListGroup.Item>
  <ListGroup.Item>SG3. Further the web interface of the system will be designed to be concise and user-friendly, with a well-designed graphical interface to help users identify the proper choice on the screen.
</ListGroup.Item>
  <ListGroup.Item>SG4. An online help shall be provided for the users.
</ListGroup.Item>
  <ListGroup.Item>SG5. Users are expected to be able to use the system productively with no training requiring only awareness of the availability of the system.
</ListGroup.Item>
  <ListGroup.Item>SG6. The system should provide interactive touch screen interface for ease and fast access
</ListGroup.Item>
  <ListGroup.Item>SG7. The average user learning time must be less than 1 day
</ListGroup.Item>
  <ListGroup.Item>SG8. The system should help users to avoid doing mistakes
</ListGroup.Item>
  <ListGroup.Item>SG9. The system should provide screen, mouse and keyboard navigation.
</ListGroup.Item>
  <ListGroup.Item>SG10. The system should be easy to navigate by using clear words, menus and drop-down lists.

</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Accessibility</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. System accessibility shall encompass all disabilities that affect access to the web-based systems, including visual, auditory, physical, speech, cognitive, and neurological disabilities.
</ListGroup.Item>
  <ListGroup.Item>SG2. The system shall provide handicap access and must provide multilingual support.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Adaptability</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. Implementation of the application software and design of database structure shall be flexible enough for the necessary changes in the later phase.
</ListGroup.Item>
  <ListGroup.Item>SG2. The software shall be flexible for migration to another Operating System platforms or Databases.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Maintainability</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. Essential maintenance to the system and all associated applications shall be capable of performance without interruption to service.
</ListGroup.Item>
  <ListGroup.Item>SG2. If downtime is experienced for any application delivered through the system, a notice should be displayed on the system stating the expected time to repair.
</ListGroup.Item>
  <ListGroup.Item>SG3. Within one hour of any malfunction, the problem will be logged, analyzed to gauge the severity of the problem and a course of remedial action identified with appropriate persons notified.
</ListGroup.Item> 
</ListGroup>

                                </p>

                                <p>
                                    <b>Performance</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. All pages shall be loaded within three seconds or less, assuming a broadband connection on the client side.
</ListGroup.Item>
  <ListGroup.Item>SG2. Therefore, response time for transactions will be three seconds or less.
</ListGroup.Item>
  <ListGroup.Item>SG3. The system shall support as many as 100 online users simultaneously with negligible response delay.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Portability</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. As a web-based application, the system shall support the latest version of the majority of browsers such as Internet Explorer, Firefox Mozilla, Chrome and Safari, as well as common mobile devices.
</ListGroup.Item>
  <ListGroup.Item>SG2. In addition, the system shall be easily migrated to other platform in case of hardware failure in both servers.
</ListGroup.Item>
</ListGroup>

                                </p>

                                <p>
                                    <b>Standards</b>
                                    <ListGroup>
  <ListGroup.Item>SG1. The project development in public health facility must comply with all the relevant e-Government related standards, guidelines, procedures and other best practices.
</ListGroup.Item>
  <ListGroup.Item>SG2. This will require a full risk assessment of the system implementation and the identification of suitable counter-measures where indicated.
</ListGroup.Item>
  <ListGroup.Item>SG3. The system’s security and measures may be independently evaluated and audited.
</ListGroup.Item>
  <ListGroup.Item>SG4. The system must comply with a designated policy for the processes of secure data disposal from the system.
</ListGroup.Item>
  <ListGroup.Item>SG5. The system may also use the communications resources provided by the Government such as National ICT Backbone, GovNet, etc using HTTP/HTTPS protocol for communication with the web browser and the web server and TCP/IP network protocol with HTTP/HTTPS protocol.</ListGroup.Item>
</ListGroup>

                                </p>
                                <br></br>
    </div>
  )
}
