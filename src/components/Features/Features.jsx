import React from "react";
import featureIcon1 from "../../assets/feature-icon-1.png";
import featureIcon2 from "../../assets/feature-icon-2.png";
import featureIcon3 from "../../assets/feature-icon-3.png";
import coreFeatureImage from "../../assets/coure-features-img.jpg";

const Features = () => {
  return (
    <div className="bg-gray-900 w-full">
      {/* Wrapper container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full py-10 lg:pl-16">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 mb-10 px-6 md:px-8 lg:px-0 text-center lg:text-left space-x-5 lg:space-x-0">
          <div className="flex items-center mt-6 mb-6">
            <div className="w-24 h-1 bg-red-600 mr-4"></div>
            <h1 className="text-blue-600 uppercase text-2xl tracking-wider leading-tight font-bold">
              Core Feature
            </h1>
          </div>

          <header className="text-4xl md:text-5xl lg:text-6xl text-left text-gray-100 tracking-wide font-bold leading-tight mb-8">
            See What Our <br />
            Mission Are
          </header>
          <div className="space-y-8 lg:mr-36 md:mr-16">
            {/* Mission Section */}
            <div className="flex items-center">
              {/* Smaller square image */}
              <div className="w-16 h-16 bg-blue-900 rounded-md flex justify-center items-center">
                <img
                  src={featureIcon1}
                  alt="featureIcon1"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <section className="ml-4 flex-1">
                <h2 className="text-gray-200 text-xl font-bold leading-8 text-left">
                  Mission
                </h2>
                <p className="text-gray-300 leading-7 text-left">
                  To provide full support and help to the students who aim to be
                  part of different international universities around the globe.
                </p>
              </section>
            </div>

            {/* Vision Section */}
            <div className="flex items-center">
              {/* Smaller square image */}
              <div className="w-16 h-16 bg-green-600 rounded-md flex justify-center items-center">
                <img
                  src={featureIcon2}
                  alt="featureIcon2"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <section className="ml-4 flex-1">
                <h2 className="text-gray-200 text-xl font-bold leading-8 text-left">
                  Vision
                </h2>
                <p className="text-gray-300 leading-7 text-left">
                  We are established with a vision to provide quality services
                  that exceed the expectations of our esteemed students.
                </p>
              </section>
            </div>

            {/* Objective Section */}
            <div className="flex items-center">
              {/* Smaller square image */}
              <div className="w-16 h-16 bg-blue-800 rounded-md flex justify-center items-center">
                <img
                  src={featureIcon3}
                  alt="featureIcon3"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <section className="ml-4 flex-1">
                <h2 className="text-gray-200 text-xl font-bold leading-8 text-left">
                  Objective
                </h2>
                <p className="text-gray-300 leading-7 text-left">
                  To be one of the trusted leaders in the Educational Counseling
                  Service industry by providing enhanced services and
                  relationships.
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Right side image filling full height */}
        <div className="w-full lg:w-1/2 px-6 md:px-8 lg:px-0 lg:pl-10">
          <img
            src={coreFeatureImage}
            alt="coreFeatureImage"
            className="w-full h-screen object-cover lg:max-h-[90vh] md:max-h-[70vh] sm:max-h-[60vh] iPadPro:max-h-[50vh]"
          />
        </div>
      </div>

      {/* Custom Styles for iPad Pro */}
      <style jsx>{`
        @media (max-width: 1024px) {
          .iPadPro\\:max-h-\\[50vh\\] {
            max-height: 50vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
