import React from 'react'

export default function GeneralContraintsRisk() {
  return (
    <div>
      <h2>General Constraints and Risk</h2>

      <p>The system shall be Web-based and Mobile enabled. There is an assumption that, users will have some
                                    familiarity with Web-based and mobile (text-messages and USSD) systems.
                                    <br></br>
                                    Each requirement listed above pose a number of risk(s), which may cause minimal or big impact. This
                                    part addresses the risks that cannot be accepted and propose mitigation strategies. The following are
                                    the main risks;</p>

                                <h3>Registration of Illegal Employee</h3>
                                <p>
                                    SG1. Employee who will be allowed to login to the system and provide required details has to be
                                    uniquely identified and real, to resolve the risk of getting the wrong information and from the
                                    wrong person.
                                    <br></br>
                                    SG2. Only responsible personnel(s) will be responsible to enter details into the system.
                                    <br></br>
                                    SG3. Further, the use of the employee’s unique identifier such as his or her check number (for
                                    Government Health Facility) or email address may be implemented to distinguish the users
                                    uniquely.
                                </p>

                                <h3>Privacy of Alerts Information</h3>
                                <p>
                                    SG1. Emphasis should focus on the use of official government or business mails to avoid risks of
                                    disclosing patient sensitive information when sending reports through emails.
                                    <br></br>SG2. Alternative solution can be to put control measures on the system to avoid the system from
                                    sending status to non-government/business mails.
                                </p>

                                <h3>Security of the System</h3>
                                <p>
                                    SG1. Ensuring security of data and information stored and processed by the system is the top issues
                                    that need to be addressed.
                                    <br></br>SG2. Security loopholes can happen in various ways including Denial of Service, malicious attacks,
                                    access control and others that can affect the integrity, confidentiality and availability of data.
                                    <br></br>SG3. The threats mentioned above can be reduced/avoided by implementation of stronger firewall,
                                    antivirus, patches, and standard policy for access control
                                </p>

                                <h3>Technology</h3>
                                <p>
                                    SG1. The iHFeMS is expected to run over proper infrastructures that do not allow single point of
                                    failure.
                                    <br></br>SG2. This means that if network/hardware failures occur, other link should pick up and continue
                                    operation without user noticing, the same apply to all hardware infrastructures.
                                    <br></br>SG3. This can be accomplished by deploying redundant network links and hardware.
                                </p>

                                <h3>Process Management Change</h3>
                                <p>
                                    SG1. Since most of clinical operations are currently done manually, the automation of this entire
                                    process may cause collapsing of some functions and creation of new opportunities.
                                    <br></br>SG2. Set up training for using new system and process change will help users interacting with the
                                    system to migrate to new ways of doing their work and therefore enjoy the opportunities.
                                </p>

                                <h3>Interoperability</h3>
                                <p>
                                    SG1. The system should be capable to talk with other systems.
                                    <br></br>SG2. It could be possible that technical complexities disable communication between system and
                                    other functionalities/systems.
                                    <br></br>SG3. When this happen, developer can outsource/joint venture/search secondary sources to resolve
                                    the difficulties.
                                </p>

                                <h3>Reliability</h3>
                                <p>
                                    SG1. System parts must work as expected, and the entire system behaves the same.
                                    <br></br>SG2. Some parts may be forgotten during development or they may be incomplete or may be
                                    complete but did not meet standards specified.
                                    <br></br>SG3. All of these issues may result to unreliable system for its users and stakeholders.
                                    <br></br>SG4. To ensure the system developed is reliable, several tests must be conducted prior to system
                                    acceptance
                                </p>

                                <h3>Technical Obsolescence</h3>
                                <p>
                                    New technologies evolve every day; most of the time the new one is more improved in-terms of its
                                    efficiency and effectiveness. As time goes on, it’s likely that iHFeMS may become obsolete. This may
                                    cause entire system or parts to malfunction. This risk can be mitigated by frequent system upgrade and when necessary replace with newer system.
                                </p>

                                <h3>Schedule</h3>
                                <p>
                                    SG1. The project is expected to finish within (agreed number of days as per contract) business days.
                                    <br></br>
                                    SG2. The schedule can remain the same given that no any change occurs during the specified period.
                                    <br></br>
                                    SG3. But several things may happen that can alter the schedule; including delaying in finishing sub
                                    tasks, delay or non-response in preparing stakeholder meeting, changing project leaders/teams,
                                    delay in obtaining the resources and so forth.
                                    <br></br>
                                    SG4. In order to ensure that the project finish within time, project sponsor should guarantee that
                                    all the resources are available in time, Project leadership/teams remain unchanged and project
                                    leader should guarantee all the deliverables are produced and at least half of the stakeholders
                                    attend meeting/workshops.
                                </p>

    </div>
  )
}
