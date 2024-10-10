import React, { useState, useEffect, useRef } from "react";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/images2.png";
import Image3 from "../../assets/images3.png";
import Image4 from "../../assets/images4.png";
import Image5 from "../../assets/images5.png";
import Image6 from "../../assets/images6.png";

const ServiceCard = ({ image, title, listItems }) => (
  <div className="relative flex flex-col md:flex-row items-center text-left mt-10 border-2 border-gray-300 p-6 shadow-md rounded-xl bg-white group hover:bg-orange-600 hover:border-none transition-all duration-300 hover:drop-shadow-lg">
    {/* Image section */}
    <div className="flex justify-center items-center w-full md:w-1/3 mb-4 md:mb-0">
      <img
        src={image}
        alt={title}
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain transition-all duration-300 group-hover:filter group-hover:brightness-200"
      />
    </div>

    {/* Text section */}
    <div className="flex flex-col justify-start items-start md:ml-6">
      <header className="text-gray-900 text-xl font-semibold group-hover:text-white mb-4">
        {title}
      </header>
      <ul className="list-disc pl-5 space-y-1 text-gray-700 group-hover:text-white">
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Service = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when the section enters the viewport
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

  const serviceData = [
    {
      title: "English Test Preparation Class IELTS & PTE",
      listItems: [
        "Experienced Trainers",
        "Free Intensive Materials",
        "Latest Resources",
        "Discussion Sessions",
        "Affordable Fees",
        "Real Home Test Environment",
        "Small Group classes with flexible hours",
        "Mock Exam & Individual Feedback",
      ],
      image: Image1,
    },
    {
      title: "High Rate of College University Selection",
      listItems: [
        "University and College application Guidance",
        "Scholarship Guidance",
        "Health Insurance (OSHC, OVHC)",
        "Authorised Representatives for Universities and Colleges",
      ],
      image: Image2,
    },
    {
      title: "Genuine Student Requirements guidance ",
      listItems: [
        "Financial Documents Guidance",
        "Visa compliance Guidance",
        "⁠Education loan Guidance ",
        "⁠Sop Guidance",
        "⁠Visa interview guidance",

      ],
      image: Image3,
    },
    {
      title: " Career Counseling and Job search assistance",
      listItems: [
        "Resume and Cover Letter Writing",
        "Networking Strategies",
        "Internship and Work Experience Opportunities",
        "Job Search Techniques",
        "Cultural Competence Training",
        "Interview Preparation",
        "Work Rights and Visa Information",
        "Career Goals and Planning",
        "Mental Health and Well-being",
        "industry training placement ",
        "wide range of Job Opportunities for suitable candidates",
      ],
      image: Image4,
    },
    // {
    //   title: "Career Counselling",
    //   listItems: ["Guidance regarding Career"],
    //   image: Image5,
    // },
    // {
    //   title: "Educational Loan Assistance",
    //   listItems: ["Provision of Educational Loan based on eligibility"],
    //   image: Image6,
    // },
  ];

  return (
    <div ref={sectionRef} className="bg-white py-16 px-6 lg:px-24">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-16 relative">
          {/* Animated horizontal lines */}
          <div className="flex items-center justify-center">
            <div
              className={`h-1 bg-gray-400 absolute left-0 right-auto transition-all duration-1000 ease-in-out ${
                isInView ? "w-1/5 lg:w-1/3 md:w-1/3" : "w-0"
              }`}
            ></div>
            <h1 className="text-gray-900 text-3xl md:text-4xl lg:text-6xl font-bold font-poppins relative z-10 mx-4 ">
              Our Services
            </h1>
            <div
              className={`h-1 bg-gray-400 absolute right-0 left-auto transition-all duration-1000 ease-in-out ${
                isInView ? "w-1/5 lg:w-1/3 md:w-1/3" : "w-0"
              }`}
            ></div>
          </div>
        </div>

        {/* Service Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-10">
          {serviceData.map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              listItems={service.listItems}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Service;
