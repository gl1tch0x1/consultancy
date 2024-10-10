import React, { useEffect, useState } from 'react';
import JyotiImage from '../../assets/jyoti.jpg'; 
import AnotherImage from '../../assets/rahul.jpg'; 
import YetAnotherImage from '../../assets/aditi.jpeg'; 
import NewImage from '../../assets/sita.jpeg';

const testimonialsData = [
  {
    text: "I had a lot of questions about Australia’s admission and visa procedure because I didn’t know much about it. Felix Education Consultancy assisted me throughout the process and answered all of my questions. I would like to express my gratitude to all the experts at Felix Eastern Educational Consultancy.",
    name: "Jyoti Gurung",
    title: "Student",
    image: JyotiImage,
  },
  {
    text: "The support I received from Felix Education Consultancy was invaluable. They guided me step-by-step through my application process, making everything so much easier for me. I'm now studying in my dream university in Australia!",
    name: "Rahul Sharma",
    title: "Student",
    image: AnotherImage,
  },
  {
    text: "Felix Education Consultancy provided me with the best advice on scholarships and university selections. Their staff was professional and knowledgeable, and I couldn't have done it without them.",
    name: "Aditi Pandey",
    title: "Student",
    image: YetAnotherImage,
  },
  {
    text: "Thanks to Felix Education Consultancy, I was able to find the right program for me. Their team was incredibly supportive and knowledgeable. I highly recommend them to any student looking to study abroad.",
    name: "Sita Thapa",
    title: "Student",
    image: NewImage,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        setIsAnimating(false);
      }, 1000); 
    }, 6000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-start justify-between space-y-6 lg:space-y-0 lg:space-x-16">
        {/* Left Side Text Section */}
        <div className="text-left lg:w-1/2 mt-8">
          <div className='flex items-center'>
            <div className="w-24 h-1 bg-red-600 mr-4"></div>
            <h2 className="text-blue-600 text-xl font-bold font-poppins">TESTIMONIAL</h2>
          </div>
          <h1 className="text-grey-900 text-5xl font-extrabold font-poppins mt-4 mb-6 leading-tight">
            What Our Students Say About Us
          </h1>
          <p className="text-gray-600 text-lg font-poppins max-w-lg">
            We work directly with the students, addressing their issues and concerns. 
            We're all listening to what students have to say about us.
          </p>
        </div>

        {/* Right Side Testimonial Section */}
        <div className={`bg-white p-6 shadow-lg text-left lg:w-1/2 rounded-lg transition-all duration-1000 ease-in-out transform ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <p className="text-gray-700 font-poppins text-lg mb-4">
            {testimonialsData[currentIndex].text}
          </p>

          {/* Image Card Section */}
          <div className="flex justify-left items-start space-x-4 mb-4">
            {/* Image Card with Thick Orange Border */}
            <div className="bg-white p-2 shadow-md rounded-lg border-2 border-orange-500">
              <img
                src={testimonialsData[currentIndex].image} 
                alt={testimonialsData[currentIndex].name}
                className="w-24 h-24 rounded-lg"
              />
            </div>

            {/* Name and Title */}
            <div className="flex flex-col justify-center mt-5">
              <h3 className="font-bold text-grey-900 text-xl font-poppins mb-1">
                {testimonialsData[currentIndex].name}
              </h3> 
              <p className="text-orange-500 font-semibold font-poppins">
                {testimonialsData[currentIndex].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
