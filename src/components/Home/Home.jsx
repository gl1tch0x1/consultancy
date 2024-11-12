import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import BannerImage from "../../assets/banner-image.png";
import EightYears from "../../assets/eight.png";
import Student from "../../assets/student.png";
import Congratulation from "../../assets/Congratulation.png";
import IdeaBulb from "../../assets/IdeaBulb.png";
import Bannerline from "../../assets/banner-line.png";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [showAdPopup, setShowAdPopup] = useState(false);
  const adImage = localStorage.getItem("adImage");

  useEffect(() => {
    if (adImage) {
      setShowAdPopup(true);
    }
  }, [adImage]);

  const ScrolltoSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white relative overflow-hidden py-10 scroll-smooth bg-gradient-to-r from-blue-100 via-yellow-50 to-white">
      {/* Popup for Advertisement Image */}
      {adImage && showAdPopup && (
        <Popup open={showAdPopup} closeOnDocumentClick onClose={() => setShowAdPopup(false)}>
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60">
            <div className="relative">
              <button
                className="absolute top-2 right-2 text-2xl font-bold text-white p-1 hover:text-gray-300 transition"
                onClick={() => setShowAdPopup(false)}
                style={{ background: "transparent" }}
              >
                ✕
              </button>
              <img
                src={adImage}
                alt="Advertisement"
                className="w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </Popup>
      )}

      {/* Background Blob */}
      <div className="absolute -top-20 -right-40 w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-red-500 to-blue-500 rounded-full filter blur-3xl opacity-70 animate-blob"></div>

      {/* Main Container */}
      <div className="container mx-auto px-4 lg:px-12 py-8 relative z-10">
        <div className="lg:flex justify-between items-center">
          {/* Left Section: Text Content */}
          <div className="lg:w-1/2 w-full font-jost">
            <div className="text-orange-600 text-center lg:text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold uppercase tracking-wide">
              <strong>Welcome to</strong>
              <br />
              <div className="bg-[hsl(229,84%,12%)] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-3 py-2 rounded-lg w-full text-center lg:text-left">
                <span className="text-yellow-500">Felix</span>
                <span className="text-white"> Eastern Educational Consultancy</span>
              </div>
            </div>

            <p className="text-gray-900 text-center lg:text-left lg:text-2xl text-xl font-bold mt-5 tracking-wide ml-2.5">
              Create Pathways for Students to Study <br />
              <span className="underline-img relative">
                Abroad
                <img
                  src={Bannerline}
                  className="absolute bottom-0 left-0 w-full h-auto"
                  alt="Underline"
                  loading="lazy"
                />
              </span>
            </p>

            <p className="text-gray-600 text-center lg:text-left mt-4 lg:mt-6 text-lg px-2 lg:px-0 tracking-wide leading-7">
              Felix assists you in selecting the best destination and university
              for your aspirations. Our experienced staff with 8 years of
              excellence will guide you through the process of studying in the
              UK, USA, Canada, or Australia.
            </p>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mt-6">
              <Link
                to="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  ScrolltoSection("courses");
                }}
              >
                <button className="bg-orange-600 text-white py-4 px-7 rounded-md text-sm lg:text-base uppercase hover:bg-orange-700 transition">
                  Explore Courses
                </button>
              </Link>
              <Link to="/contact">
                <button className="bg-gray-900 text-white py-4 px-7 rounded-md text-sm lg:text-base uppercase hover:bg-orange-700 transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section: Images */}
          <div className="mt-8 lg:mt-10 lg:w-1/2 w-full pr-8">
            <div className="relative left-4 sm:left-9 lg:left-20">
              <img
                src={BannerImage}
                loading="lazy"
                alt="Student with books"
                className="w-[18rem] h-[18rem] sm:w-[24rem] sm:h-[24rem] md:w-[30rem] md:h-[30rem] lg:w-[40rem] lg:h-[40rem] z-10 left-6 lg:left-12 relative"
              />
              <img
                src={IdeaBulb}
                alt="Bulb"
                className="bulb-effect w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 absolute top-10 right-10 md:top-28 md:right-48 lg:right-24 lg:top-5 animate-shake-up-down"
                loading="lazy"
              />
              <div className="hidden lg:flex justify-between items-center absolute top-64 left-24 bg-white p-3 rounded-md shadow-lg text-center animate-shake-left-right z-20">
                <img src={Congratulation} alt="Congratulation" className="w-12 h-12 mr-4" loading="lazy" />
                <div>
                  <p className="text-gray-900 font-bold">Congratulations</p>
                  <p className="text-gray-700 text-xs">Your Admission is complete</p>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center absolute w-54 bottom-10 lg:bottom-20 left-2 lg:left-24 bg-white p-3 rounded-md shadow-lg text-center animate-shake-up-down z-20">
                <img src={EightYears} alt="Eight years of Excellence" className="w-12 h-12" loading="lazy" />
                <div className="mr-4">
                  <p className="text-gray-900 font-bold">Experienced Experts</p>
                  <p className="text-gray-700 text-sm">8 Years of Excellence</p>
                </div>
              </div>
              <div className="hidden lg:flex justify-between items-center absolute w-auto bottom-44 sm:right-40 md:right-52 lg:right-5 bg-white p-3 rounded-md shadow-lg text-center animate-shake-left-right z-20">
                <img src={Student} alt="Student Choice" className="w-12 h-12" loading="lazy" />
                <div>
                  <p className="text-gray-900 font-bold">Students' Choice</p>
                  <p className="text-gray-700 text-xs">Top-Rated University</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
