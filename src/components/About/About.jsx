import React from "react";
import AboutImage from "../../assets/about-img.png";
import EightYears from "../../assets/eight.png";
import Congratulation from "../../assets/Congratulation.png";
import { FaRegCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./About.css";


const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        {/* Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-12 gap-8 pl-8">
          {/* Left side: Image */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="relative top-20 right-4">
                <img src={AboutImage} alt="About Us" className="w-full h-full" />
              </div>
              {/* Shaking card: 8 Years of Excellence */}
              <div className="flex flex-row justify-between items-center absolute w-54 top-80 right-12 lg:right-72 bg-white p-3 rounded-md shadow-lg text-center animate-shake-left-right z-20">
                <div>
                  <img src={EightYears} alt="Eight years Image" className="w-12 h-12" />
                </div>
                <div className="mr-4">
                  <p className="text-gray-900 font-bold">Experience Experts</p>
                  <p className="text-gray-700 text-sm mb-2">8 Years of Excellence</p>
                </div>
              </div>
              {/* Shaking card: Student's Choice */}
              <div className="hidden lg:flex justify-between items-center flex-row w-54 absolute bottom-16 right-4 lg:right-16 bg-white p-3 rounded-md shadow-lg text-center animate-shakeRightLeft z-20">
                <div>
                  <img
                    src={Congratulation}
                    alt="Congratulation"
                    className="w-12 h-12 mr-4"
                  />
                </div>
                <div>
                  <p className="text-gray-900 font-bold">Congratulation</p>
                  <p className="text-gray-700 text-xs mb-2">
                    Your Admission is complete
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Text and content */}
          <div className="lg:w-1/2 lg:mt-10 md:mt-10 mt-10 pl-4 pr-10">
            <div className="flex items-center">
            <div className="w-24 h-[2px] bg-red-600 mr-4 mt-4"></div>
              <h1 className="text-blue-600 text-4xl font-bold font-poppins">About Us</h1>
            </div>
            <h1 className="text-gray-900 text-left lg:text-left text-4xl lg:text-5xl font-poppins font-extrabold my-7">
              Pathway To Success
            </h1>
            <p className="mb-4 text-gray-700 font-semibold">
              Felix Eastern Education Consultancy is a government-registered and test-preparation
              center with a long history. With a central office in Nepal and a branch office in Australia, 
              we have been delivering services since 2016. Felix is here to assist you in selecting the 
              best destination and university for your objectives and aspirations. We collaborate closely with 
              the Students, bringing challenges and concerns to the table. The resolution of our students' 
              issues and complaints is critical to the company's overall effectiveness. Our experienced staff 
              will assist you throughout the full process of pursuing higher education in another country.
            </p>

            <div className="mb-8">
              <ul className="leading-10">
                <li className="flex items-start gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-6 h-6 flex-shrink-0 mt-2" />
                  <span>Experienced and Skilled Team of Experts</span>
                </li>
                <li className="flex items-start gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-6 h-6 flex-shrink-0 mt-2" />
                  <span>8 years of experience</span>
                </li>
                <li className="flex items-start gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-6 h-6 flex-shrink-0 mt-2" />
                  <span>Authorised representatives for multiple colleges and Universities</span>
                </li>
                <li className="flex items-start gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-6 h-6 flex-shrink-0 mt-2" />
                  <span>High Visa Success Rate</span>
                </li>
                <li className="flex items-start gap-4 text-blue-950 font-poppins font-semibold">
                  <FaRegCircleCheck className="text-white bg-green-800 rounded-full w-6 h-6 flex-shrink-0 mt-2" />
                  <span>Assistance throughout and after the process</span>
                </li>
              </ul>
            </div>

            <div>
              <button className="bg-orange-500 p-3 px-8 rounded-lg text-white uppercase text-center hover:bg-green-700 transition-all duration-500 mb-12">
                <Link to={"/contact"}>Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
