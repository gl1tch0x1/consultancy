import React, { useState } from "react";
import Button from "./Button"; // Reusing the Button component from Admin
import Input from "./Input";   // Reusing the Input component from Admin

const Login = ({ onLoginSuccess }) => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve credentials from environment variables
    const adminUsername = process.env.REACT_APP_ADMIN_USERNAME;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;

    if (
      credentials.username === adminUsername &&
      credentials.password === adminPassword
    ) {
      onLoginSuccess(); // Callback to indicate successful login
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-panel p-8 md:p-12 bg-gray-50 min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Admin Login</h2>
        <Input
          label="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={credentials.username}
          onChange={handleChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          label="Login"
          className="bg-blue-600 text-white w-full"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Login;
