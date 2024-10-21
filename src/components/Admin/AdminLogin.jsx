import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png"; // Import your logo
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'; // Import icons for notification

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  // Handle input change for both username and password
  const handleInputChange = useCallback(
    (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value }),
    [credentials]
  );

  // Handle login submission
  const handleLogin = useCallback(
    (e) => {
      e.preventDefault();

      const adminUsername = import.meta.env.VITE_ADMIN_USERNAME;
      const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

      if (credentials.username === adminUsername && credentials.password === adminPassword) {
        setNotification({ message: 'Welcome Admin!', type: 'success' });
        localStorage.setItem('admin_logged_in', 'true');
        setTimeout(() => navigate('/admin/dashboard'), 1500); // Navigate after delay
      } else {
        setNotification({ message: "Sorry, Credentials don't match!", type: 'error' });
      }
    },
    [credentials, navigate]
  );

  // Automatically fade the error notification after 10 seconds
  useEffect(() => {
    if (notification?.type === 'error') {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 10000); // Fade after 10 seconds

      return () => clearTimeout(timer); // Cleanup on component unmount
    }
  }, [notification]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative">
      {/* Logo Section - Centered with fixed size */}
      <div className="absolute top-10 flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-40 h-40" /> {/* Fixed size 42x42 */}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative mt-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Admin Login</h2>

        {/* Notification Section */}
        {notification && (
          <div
            className={`fixed top-20 left-1/2 transform -translate-x-1/2 flex items-center text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-500 ${
              notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
            }`}
          >
            {notification.type === 'success' ? (
              <AiOutlineCheckCircle className="mr-2 text-2xl" />
            ) : (
              <AiOutlineCloseCircle className="mr-2 text-2xl" />
            )}
            <p>{notification.message}</p>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username:</label>
            <input 
              type="text" 
              name="username"
              value={credentials.username} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password:</label>
            <input 
              type="password" 
              name="password"
              value={credentials.password} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" 
              required
            />
          </div>

          {/* Login Button */}
          <div className="flex items-center justify-between">
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Back to Home Button */}
        <div className="flex items-center justify-center mt-6">
          <button 
            onClick={() => navigate('/')} 
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
