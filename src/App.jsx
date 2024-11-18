import React from 'react';
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
    import Home from './components/Home';
    import Appointments from './components/Appointments';
    import MedicalHistory from './components/MedicalHistory';
    import VaccinationCertificate from './components/VaccinationCertificate';
    import TestingCenters from './components/TestingCenters';
    import Profile from './components/Profile';
    import ScheduleAppointment from './components/ScheduleAppointment';

    function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/vaccination-certificate" element={<VaccinationCertificate />} />
            <Route path="/testing-centers" element={<TestingCenters />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
          </Routes>
        </Router>
      );
    }

    export default App;
