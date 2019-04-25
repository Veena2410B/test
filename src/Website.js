import React, { Component } from 'react';
import './App.css';
import './components/layout/style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import MenuBackground from './components/pages/MenuBackground';
import MenuBusinessProcess from './components/pages/MenuBusinessProcess';
import MenuGuidelines from './components/pages/MenuGuidelines';
import MenuRequirements from './components/pages/MenuRequirements';
import Contact from './components/pages/Contact';
import Vision from './components/pages/background/Vision';
import Purpose from './components/pages/background/Purpose';
import Audience from './components/pages/background/Audience';
import PatientCareManagement from './components/pages/businessprocess/PatientCareManagement';
import PatientRegistration from './components/pages/businessprocess/PatientRegistration';
import AdmissionProcess from './components/pages/businessprocess/AdmissionProcess';
import DiagnosticsProcess from './components/pages/businessprocess/DiagnosticsProcess';
import SchedulingAppointment from './components/pages/businessprocess/SchedulingAppointment';
import PharmacyInventoryManagementProcess from './components/pages/businessprocess/PharmacyInventoryManagementProcess';
import MainPharmacyManagementProcess from './components/pages/businessprocess/MainPharmacyManagementProcess';
import MedicalSuppliesDistributionProcess from './components/pages/businessprocess/MedicalSuppliesDistributionProcess';
import DispensingProcess from './components/pages/businessprocess/DispensingProcess';
import PatientBillingProcess from './components/pages/businessprocess/PatientBillingProcess';
import SystemFunctionalNonFunctionalRequirements from './components/pages/requirements/SystemFunctionalNonFunctionalRequirements';
import FunctionalRequirements from './components/pages/requirements/FunctionalRequirements';
import NonFunctionalRequirements from './components/pages/requirements/NonFunctionalRequirements';
import GeneralConstraintsRisk from './components/pages/requirements/GeneralConstraintsRisk';
import StandardsInformationExchange from './components/pages/requirements/StandardsInformationExchange';
import InfrastructureHumanResourceRequirements from './components/pages/requirements/InfrastructureHumanResourceRequirements';
import Implementing from './components/pages/guidelines/implementing';
import MonitoringEvaluation from './components/pages/guidelines/monitoringEvaluation';
import ClosureSignOff from './components/pages/guidelines/closureSignOff';
import AccessingComplianceExistingSystem from './components/pages/guidelines/accessingComplianceExistingSystem';
import Home from './components/pages/Home';
import Modal from './components/layout/modal/Modal';


/* import './components/layout/style.css'; 
 */

class Website extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="main">
            <Header />
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route path="/MenuBackground" component={MenuBackground} />
            <Route path="/MenuBusinessProcess" component={MenuBusinessProcess} />
            <Route path="/MenuRequirements" component={MenuRequirements} />
            <Route path="/MenuGuidelines" component={MenuGuidelines} />
            <Route path="/Contact" component={Contact} />
            <Route path="/background/Vision" component={Vision} />
            <Route path="/background/Purpose" component={Purpose} />
            <Route path="/background/Audience" component={Audience} />
            <Route path="/businessprocess/PatientCareManagement" component={PatientCareManagement} />
            <Route path="/businessprocess/PatientRegistration" component={PatientRegistration} />
            <Route path="/businessprocess/AdmissionProcess" component={AdmissionProcess} />
            <Route path="/businessprocess/DiagnosticsProcess" component={DiagnosticsProcess} />
            <Route path="/businessprocess/SchedulingAppointment" component={SchedulingAppointment} />
            <Route path="/businessprocess/PharmacyInventoryManagementProcess" component={PharmacyInventoryManagementProcess} />
            <Route path="/businessprocess/MainPharmacyManagementProcess" component={MainPharmacyManagementProcess} />
            <Route path="/businessprocess/MedicalSuppliesDistributionProcess" component={MedicalSuppliesDistributionProcess} />
            <Route path="/businessprocess/DispensingProcess" component={DispensingProcess} />
            <Route path="/businessprocess/PatientBillingProcess" component={PatientBillingProcess} />
            <Route path="/requirements/SystemFunctionalNonFunctionalRequirements" component={SystemFunctionalNonFunctionalRequirements} />
            <Route path="/requirements/FunctionalRequirements" component={FunctionalRequirements} />
            <Route path="/requirements/NonFunctionalRequirements" component={NonFunctionalRequirements} />
            <Route path="/requirements/GeneralConstraintsRisk" component={GeneralConstraintsRisk} />
            <Route path="/requirements/StandardsInformationExchange" component={StandardsInformationExchange} />
            <Route path="/requirements/InfrastructureHumanResourceRequirements" component={InfrastructureHumanResourceRequirements} />
            <Route path="/guidelines/Implementing" component={Implementing} />
            <Route path="/guidelines/MonitoringEvaluation" component={MonitoringEvaluation} />
            <Route path="/guidelines/ClosureSignOff" component={ClosureSignOff} />
            <Route path="/guidelines/AccessingComplianceExistingSystem" component={AccessingComplianceExistingSystem} />
          </div>
        </div>
      </Router>

    );
  }
}

export default Website;
