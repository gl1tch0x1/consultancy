// src/RouteApp.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Contact from '../components/Contact/Contact';
import AdminPanel from '../components/Admin/Admin';
import AdminLogin from '../components/Admin/AdminLogin';
import TopStudyDestination from '../components/TopDestination/TopDestination';
import PrivateRoute from '../components/PrivateRoute'; 

const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/TopDestination" element={<TopStudyDestination />} />
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
