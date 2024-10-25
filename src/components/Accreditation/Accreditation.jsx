import React from 'react';
import QEAC from '../../assets/QEAC.png'; 
import TITI from '../../assets/TITI.png';
import NepalGov from '../../assets/NepalGov.png';
import NewZealand from '../../assets/NewZealand.png';

const Accreditation = () => {
  return (
    <div className="py-10  pb-48 bg-gradient-to-r from-blue-100 via-yellow-50 to-white">
      <h2 className="text-center text-5xl font-bold text-grey-900 mb-10">Accreditation</h2>
      
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-8">
        {/* Accreditation logos */}
        <img src={QEAC} alt="QEAC" className="w-16 md:w-40 lg:w-64 hover:scale-105 transition-transform" />
        <img src={TITI} alt="TITI" className="w-16 md:w-40 lg:w-64 hover:scale-105 transition-transform" />
        <img src={NepalGov} alt="Nepal Government" className="w-16 md:w-40 lg:w-64 hover:scale-105 transition-transform" />
        <img src={NewZealand} alt="New Zealand Education" className="w-16 md:w-40 lg:w-64 hover:scale-105 transition-transform" />
      </div>
    </div>
  );
};

export default Accreditation;
