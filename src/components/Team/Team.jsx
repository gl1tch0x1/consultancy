import React, { useEffect, useState, useRef } from "react";
import netraImage from "../../assets/team/netra.jpg";
import premImage from "../../assets/team/prem.jpg";
import yugashaImage from "../../assets/team/yugasha.jpg";

const teamMembers = [
  { name: "Netra Pandey", position: "Founder/ CEO", image: netraImage },
  { name: "Roshan Bhusal", position: "Director/ Felix Butwal", image: premImage },
  {
    name: "Yugasha Hamal",
    position: "Manager, Felix Kathmandu",
    image: yugashaImage,
  },


];

const Team = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-oxblue py-20 px-4 lg:px-20 relative bg-gradient-to-r from-blue-100 via-yellow-50 to-white">
      <div>
        <h1 className="text-center text-l font-bold text-blue-600 mb-6">
          TEAM OF EXPERTS
        </h1>
      </div>
      <div className="flex items-center mb-12 justify-center relative">
        {/* Left Line */}
        <div
          className={`h-1 bg-gray-400 absolute left-0 right-auto transition-all duration-1000 ease-in-out ${
            isInView ? "w-1/5 lg:w-1/3 md:w-1/3" : "w-0"
          }`}
        ></div>
        <h2 className="text-center text-5xl lg:text-6xl font-bold text-gray-900">
          Our Team
        </h2>
        {/* Right Line */}
        <div
          className={`h-1 bg-gray-400 absolute right-0 left-auto transition-all duration-1000 ease-in-out ${
            isInView ? "w-1/5 lg:w-1/3 md:w-1/3" : "w-0"
          }`}
        ></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-contain"
              />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-center text-gray-900 hover:text-orange-500 transition-colors">
              {member.name}
            </h3>
            <p className="text-blue-600 text-sm text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
