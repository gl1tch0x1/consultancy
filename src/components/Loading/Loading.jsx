import React, { useState, useEffect } from 'react';
import logo from '/src/assets/logo-white.png'; // Path to the logo file
import './Loading.css'; // Custom CSS for animation

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 20 seconds
    }, 80000); // 80 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  if (!isLoading) {
    return null; // Once loading is complete, render nothing or replace with actual content
  }

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{ backgroundColor: 'hsl(229, 84%, 12%)' }} // Applying Oxford Blue background color
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="w-45 h-20" />

      <p className="text-xl mt-4 italic text-white">Pathways to Success</p>

      {/* Loading dots */}
      <div className="loading-dots mt-4">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Loading;
