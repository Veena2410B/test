import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table'
import fig8 from '../../../../public/images/Fig8-FlowActivities.png'; 

export default function accessingComplianceExistingSystem() {
  return (
    <div>
      <h2>Guidelines For Accessing Compliance Of Existing iHFeMS</h2>

      <p>It is undeniable fact that there are efforts to computerize various clinical and
                                    administrative functions
                                    noticeable in some health facilities in the country. While there is significant
                                    improvement in management
                                    of health resources and service provision in those facilities, the degree of success
                                    on these automations
                                    varies significantly, with some obtaining suboptimal results. In order to ensure
                                    that Health facility
                                    accrue maximum benefits from the existing systems and be able to address issues of
                                    standards and data
                                    exchange, a number of activities need to be carried out by the respective
                                    facilities. This will ensure that
                                    the existing systems become compliant with the national iHFeMS standards and
                                    guidelines.</p>

                                <h3>Objective</h3>
                                <p>
                                    To guide health facilities with existing iHFeMS to improve their systems to meet the
                                    national iHFeMS
                                    standards and guidelines
                                </p>

                                <h3>Scope</h3>
                                <p>The guidelines cater for the health facilities that need to improve their existing
                                    iHFeMS.</p>

                                <h3>Standard Guidelines</h3>
                                <p>
                                <ListGroup>
  <ListGroup.Item>SG1 Health facilities with existing iHFeMS should conduct assessment to ensure compliance with the national iHFeMS implementation standards and guidelines.
</ListGroup.Item>
  <ListGroup.Item>SG2 The health facilities with existing iHFeMS that meets the stipulated national standards upon passing rigorous assessment by Central Certification Team in collaboration with the health facility shall officially be certified as an indication of compliance with the national iHFeMS standards and guidelines.
</ListGroup.Item>
  <ListGroup.Item>SG3 The health facility that fall short of the stipulated national iHFeMS guidelines and standards shall improve their existing system by following the stipulated standards, guidelines and procedures (See Figure 9).
</ListGroup.Item>
  <ListGroup.Item>SG4 Following improvement of the existing iHFeMS, the health facility shall conduct again a thorough and rigorous assessment of the same, to ensure compliance with the national standards and guidelines. Upon passing the rigorous assessment the health facility shall be certified by the Ministry of Health, Community Development, Gender, Elderly and Children as an indication of compliance with the national iHFeMS standards and guidelines.
</ListGroup.Item>
  <ListGroup.Item>SG5 The existing iHFeMS systems that prove difficult to improve as per the rigorous assessment and a thorough cost-benefit analysis of the system conducted by the Health facility in collaboration with the Central Certification Team `shall require total replacement. The health facility shall then follow the stipulated guidelines and procedures to acquire and implement a new iHFeMS system (Refer to Figure 9)
</ListGroup.Item>
</ListGroup>

<img src={fig8} alt="" className="responsive"/>  
Figure 8: Flow of Activities for Assessing and Improving an Existing iHFeMS 
<br></br>    


                                    <br></br>
                                    <b>Responsibility</b>
                                    <Table>
                                      <thead>
                                      <tr>
      <th>Responsible Person/team</th>
      <th>Roles</th>
      </tr>
                                      </thead>

                                      <tbody>
                                      <tr>
    <td>iHFeMS implementation team</td>
    <td>1. Prepare, review and test the iHFeMS assessment tool using
the iHFeMS assessment template
<br></br>2. Conduct assessment of the existing iHFeMS
<br></br>3. Analyze the data and prepare assessment report
<br></br>4. Share assessment report with the Health facility in-charge</td>
</tr>

<tr>
    <td>Health facility Management
Team</td>
    <td>5. Review the assessment report and make a decision as per the
national iHFeMS standards and guidelines
<br></br>6. Take action to certify, improve or replace the existing iHFeMS
with a new system as per the assessment results</td>
</tr>

                                      </tbody>
                                    </Table>
                                </p>

                                <h3>Procedures</h3>
                                <p>

                                <ListGroup>
  <ListGroup.Item>P1. Review the standard iHFeMS assessment tool. Health facilities are at liberty to add more parameters in the assessment tool, as long as the standard parameters remain intact.
</ListGroup.Item>
  <ListGroup.Item>P2. Test and review the assessment tool to ensure consistent and effective results
</ListGroup.Item>
  <ListGroup.Item>P3. Conduct the assessment of the existing iHFeMS covering all the areas stipulated in the tool
</ListGroup.Item>
  <ListGroup.Item>P4. Conduct data analysis and report writing
</ListGroup.Item>
  <ListGroup.Item>P5. Submit the assessment report to the facility in-charge, who will table it to the Health facility management team for review, and comments
</ListGroup.Item>
  <ListGroup.Item>P6. Take action in-line with the assessment results and the national iHFeMS standards and guidelines (Refer Figure 9)
</ListGroup.Item>
</ListGroup>
</p>
    </div>
  )
}
