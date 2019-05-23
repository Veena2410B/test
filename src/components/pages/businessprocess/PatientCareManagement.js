import React from 'react'
import { Picture } from 'react-responsive-picture';
import fig1 from '../../../../public/images/Fig1-HealthFacilityBusinessProcessFramework.png'; 


export default function PatientCareManagement() {
  return (
<div align="center">
            <h1>Patient Care Management</h1>

            <p>

Patient care management processes is one of the core business processes of the Health facility in the framework (Figure 1). Major processes that need improvements within the patient care management in the Health facility include registration, admission, laboratory, radiology, discharge and appointment scheduling.
           

            </p>

            <img src={fig1} alt="Figure 1: Health Facility Business Process Framework" className="responsive"/>        


    </div>
  )
}
