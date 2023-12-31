import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/components/Admin';
import DonorPage from './pages/components/Donor';
import SchoolAdminPage from './pages/components/SchoolAdmin';
import StudentPage from './pages/components/Student';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/school-admin" element={<SchoolAdminPage />} />
        <Route path="/student" element={<StudentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
