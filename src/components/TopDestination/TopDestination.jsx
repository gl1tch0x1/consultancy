import React from 'react';
import operaHouse from '../../assets/operaHouse.jpeg';
import liberty from '../../assets/liberty.jpeg';
import nzland from '../../assets/nzland.jpeg';
import niagara from '../../assets/niagra.jpeg';
import london from '../../assets/london.jpeg';
import korea from '../../assets/korea.jpg';
import europe from '../../assets/europe.jpeg';

const studyDestinations = [
  { name: 'Australia', image: operaHouse },
  { name: 'USA', image: liberty },
  { name: 'New Zealand', image: nzland },
  { name: 'Canada', image: niagara },
  { name: 'United Kingdom', image: london },
  { name: 'South Korea', image: korea },
  { name: 'Europe', image: europe }
];

const TopStudyDestination = () => {
  return (
    <div className="bg-gray-50 py-16 px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className='flex flex-col'>
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
        <div className="lg:w-44 md:w-14 w-4 h-1 bg-red-600 inline-block align-middle ml-2 mt-5"></div>
          Top Study Destinations
        <div className="lg:w-44 md:w-14 w-4 h-1 bg-red-600 inline-block align-middle ml-2 mt-5"></div>
        </h1>
        </div>
        <p className="mt-4 text-lg text-gray-600">
          Explore the best countries for higher education that offer exceptional learning opportunities and a rich cultural experience.
        </p>
      </div>

      {/* Grid for study destinations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {studyDestinations.map((destination, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image for each country */}
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
            />

            {/* Country name overlay, always visible and slightly transparent */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold transition-opacity duration-300 opacity-80 group-hover:opacity-100">
                {destination.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopStudyDestination;
