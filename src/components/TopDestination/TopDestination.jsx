import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import operaHouse from '../../assets/operaHouse.jpeg';
import liberty from '../../assets/liberty.jpeg';
import nzland from '../../assets/nzland.jpeg';
import niagara from '../../assets/niagra.jpeg';
import london from '../../assets/london.jpeg';
import korea from '../../assets/korea.jpg';
import europe from '../../assets/europe.jpeg';

const studyDestinations = [
  { name: 'Australia', image: operaHouse, path: '/details/australia', details: 'Australia offers top-tier education with globally recognized universities, and diverse cultural experiences.' },
  { name: 'USA', image: liberty, path: '/details/usa', details: 'The USA is home to many of the world’s best universities, offering cutting-edge research and diverse academic programs.' },
  { name: 'New Zealand', image: nzland, path: '/details/new-zealand', details: 'New Zealand is known for its innovative education system and a safe, friendly environment for students.' },
  { name: 'Canada', image: niagara, path: '/details/canada', details: 'Canada provides high-quality education at affordable costs, with a focus on research and cultural diversity.' },
  { name: 'United Kingdom', image: london, path: '/details/united-kingdom', details: 'The UK is known for its prestigious universities and rich academic heritage.' },
  { name: 'South Korea', image: korea, path: '/details/south-korea', details: 'South Korea offers cutting-edge technology and a strong emphasis on innovation and research.' },
  { name: 'Europe', image: europe, path: '/details/europe', details: 'Europe offers diverse educational experiences with universities known for excellence and historical significance.' }
];

const TopStudyDestination = () => {
  const navigate = useNavigate();

  const handleNavigate = (destination) => {
    navigate(destination.path, { state: { destination } });
  };

  return (
    <div className="bg-gray-50 py-16 px-10 lg:px-20 bg-gradient-to-r from-blue-100 via-yellow-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className='flex flex-col'>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            <span className="block relative">
              <span className="absolute left-0 top-0 w-44 h-1 bg-red-600"></span>
              Top Study Destinations
              <span className="absolute right-0 bottom-0 w-44 h-1 bg-red-600"></span>
            </span>
          </h1>
        </div>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Explore the best countries for higher education that offer exceptional learning opportunities and a rich cultural experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {studyDestinations.map((destination, index) => (
          <div 
            key={index} 
            className="relative group overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => handleNavigate(destination)}
          >
            <img
              src={destination.image}
              alt={`View more about studying in ${destination.name}`}
              className="w-full h-56 object-cover transition-transform duration-300 transform group-hover:scale-105"
              loading="lazy"
            />
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
