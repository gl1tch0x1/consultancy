// src/RouteApp.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Contact from '../components/Contact/Contact';
import AdminPanel from '../components/Admin/Admin';
import AdminLogin from '../components/Admin/AdminLogin';
import PrivateRoute from '../components/PrivateRoute'; 
import StudyInEurope from "../components/TopDestination/Europe";
import Newzealand from "../components/TopDestination/Newzealand";
import UnitedKingdom from "../components/TopDestination/UnitedKingdom";

const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/details/europe' element={<StudyInEurope />} />
        <Route path='/details/new-zealand' element={<Newzealand />} />
        <Route path='/details/united-kingdom' element={<UnitedKingdom />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        
        {/* Protecting the admin dashboard route */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
        
      </Routes>
    </Router>
  );
};

export default RouteApp;
