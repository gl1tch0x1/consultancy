import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from '../layout/Layout';
import Contact from '../components/Contact/Contact';
import AdminPanel from '../components/Admin/Admin';
import TopStudyDestination from '../components/TopDestination/TopDestination';


const RouteApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path='/TopDestination' element={<TopStudyDestination />} />
      </Routes>
    </Router>
  );
};

export default RouteApp;
