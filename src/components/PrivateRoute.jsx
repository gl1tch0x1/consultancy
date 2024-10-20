
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('admin_logged_in') === 'true';

  return isLoggedIn ? children : <Navigate to="/adminLogin" />;
};

export default PrivateRoute;
