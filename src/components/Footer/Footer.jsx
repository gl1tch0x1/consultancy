import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Logo from "../../assets/logo-white.png";

const Footer = () => {
  const navigate = useNavigate(); 

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white m-0">
      {/* Banner Section */}
      <div className="bg-blue-600 flex flex-col sm:flex-row justify-between items-start text-white py-12 px-10 w-[90%] mx-auto -mt-52 shadow-lg rounded-lg">
        <h1 className="text-4xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-xl font-bold font-jost mb-4 sm:mb-0 max-w-xl">
          Start Your Best Abroad Journey With Us
        </h1>
        <button
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0); // Scroll to top
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 w-56 mt-8 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
        >
          CONTACT US
        </button>
      </div>

      {/* Footer Main Section */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 px-10 pt-20 pb-5">
        {/* Logo and Company Info */}
        <div className="lg:col-span-2 pr-16">
          <img src={Logo} alt="Logo" className="w-40 mb-4" />
          <p className="text-sm font-jost mb-4">
            Approved test center, approved by Minister of Education. We're here
            to assist you in selecting the appropriate destination and
            university for your objectives and aspirations.
          </p>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/felixeastern?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-facebook-f text-3xl"></i>
            </a>
            <a
              href="https://www.instagram.com/felixeastern?igsh=MWt6amZuMXZzcjhqbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-instagram text-3xl"></i>
            </a>
            <a
              href="https://vm.tiktok.com/ZSd2JTP2R/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition duration-300"
            >
              <i className="fab fa-tiktok text-3xl"></i>
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Our Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#home"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Home
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#about"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#courses"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Courses
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#blog"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Other Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Other Links</h2>
          <ul>
            <li className="mb-2">
              <a
                href="#team"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Instructor
              </a>
            </li>
            <li className="mb-2">
              <HashLink
                to="/contact#faq"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                FAQ
              </HashLink>
            </li>
            <li>
              <a
                href="#event"
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 ease-in-out hover:translate-x-2 inline-block"
              >
                Event
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">Contact Us</h2>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            1st Floor HBL Building Madan Bhandari Path New Baneshwor,
            Kathmandu-31
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            +977 1 4437975, 9843161346
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            kathmandu@felixeastern.info
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            26 Kate Street, Kedron, QLD, 4031 Australia
          </p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4 text-gray-300">
            Butwal Contact
          </h2>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            Moti Marga, Rajmarga Chauraha, M-Square Building, First Floor,
            Butwal
          </p>
          <p className="text-sm mb-2 hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            9843894338
          </p>
          <p className="text-sm hover:text-orange-500 hover:translate-x-2 transition-all duration-300 ease-in-out">
            butwal@felixeastern.info
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-center text-sm text-gray-400 font-poppins py-4 sm:px-4 mt-10">
        <p>
          &copy; 2024{" "}
          <span
            className="text-orange-500 cursor-pointer hover:text-blue-500 transition duration-300"
            onClick={scrollToTop}
          >
            Felix Education
          </span>
          . Developed by Solarius Technologies Pvt.Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
