import React from 'react';
import { useLocation } from 'react-router-dom';

const DestinationDetails = () => {
  const location = useLocation();
  const { destination } = location.state;

  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold">{destination.name}</h1>
      <img src={destination.image} alt={destination.name} className="w-full h-64 object-cover mt-4" />
      <p className="mt-4 text-lg">{destination.details}</p>
    </div>
  );
};

export default DestinationDetails;
