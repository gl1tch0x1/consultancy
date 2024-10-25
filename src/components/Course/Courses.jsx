import React, { useState, useEffect } from "react";
import CourseImage1 from "../../assets/course-1.jpg";
import CourseImage2 from "../../assets/course-6.jpg";
import CourseImage3 from "../../assets/course-3.jpg";
import { MdOutlineAccessTime } from "react-icons/md";

const courseDetails = [
  {
    title: "Elicos",
    description: `Elicos is for international students who have English as their second language.
    Elicos helps students to develop their level of English so that they can continue on to their academic studies.
    
    There are different types of English Courses:
    • EAP - English for Academic Purposes
    • DEP - Direct Entry Program
    • GE - General English`,
  },
  {
    title: "Vocational Education & Training",
    description: `Types of VET Courses:
    • Certification I and Certification IV
    • Diploma
    • Advanced Diploma
    • Vocational Graduate Certificate/ Diploma

    Entry Requirements:
    • Study equivalent to Australian year 10, 11, 12. Some courses may have prerequisite or work experience requirements
    • Age: 18 years+
    • Overseas student health cover(OSHC)
    • IELTS Academic with an overall band of user equivalent`,
  },
  {
    title: "Higher Education",
    description: `Bachelor's and Master's Degree

    Bachelor's Degree:
    • The degree prepares students for postgraduate studies and professional careers.
    • The degree involves a minimum of 3 years of full-time study.
    
    Entry Requirements:
    • An Australian Secondary School (Year 12) or the overseas equivalent.
    • IELTS Academics with an overall band of 6.0 (no less than 5.5)
    
    Master's Degree:
    • Master Degree courses usually take around 2 years of full-time study.
    • Entry Requirements: An Australian Bachelor's Degree or overseas equivalent.`,
  },
];

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".course-card") && selectedCourse !== null) {
        setSelectedCourse(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [selectedCourse]);

  return (
    <div className="bg-gradient-to-r from-blue-100 via-yellow-50 to-white">
      <div id="courses" className="container lg:py-20 ">
        <div>
          {/* Heading Section */}
          <header className="flex items-center mb-10 ml-9">
            <div className="flex flex-col">
              <h1 className="text-4xl lg:text-5xl text-gray-800 font-jost font-extrabold tracking-wide text-left">
                <span>Find The Right Course</span> <br />
                <span className="inline-block">For You</span>
                <div className="w-44 h-1 bg-red-600 inline-block align-middle ml-2 mt-5"></div>
              </h1>
            </div>
          </header>

          {/* Cards Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-24 mr-5 ml-5 lg:ml-9 lg:mr-9 ">
            {[
              {
                image: CourseImage1,
                title: "Elicos",
                price: "Approx AUD 4,000-1000",
                year: "Upto 1 year",
              },
              {
                image: CourseImage2,
                title: "Vocational Education & Training",
                price: "Approx AUD 2,000 - 22,000",
                year: "Upto 3 year",
              },
              {
                image: CourseImage3,
                title: "Higher Education",
                price: "Approx AUD 8,000 - 60,000",
                year: "1-3 year",
              },
            ].map((course, index) => (
              <div
                key={index}
                className="course-card flex flex-col gap-8 shadow-lg transition-transform duration-300 ease-in-out group w-full lg:w-1/3 overflow-hidden"
                onClick={() => setSelectedCourse(index)}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="shadow-sm transform transition-transform duration-300 ease-in-out group-hover:scale-105 w-full"
                />
                <div className="p-4">
                  <header className="text-2xl tracking-wider font-semibold mb-2 group-hover:text-orange-700">
                    {course.title}
                  </header>
                  <div className="relative py-6">
                    <span className="absolute bg-gray-500 w-full h-0.5"></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-700 text-2xl font-bold">
                      {course.price}
                    </span>
                    <p className="flex justify-center items-center gap-3 text-gray-500 text-base font-poppins font-medium mr-5 ml-10">
                      <MdOutlineAccessTime className="text-4xl  text-blue-700" />
                      {course.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* course infromation showing if card is clicked */}
        {selectedCourse !== null && (
          <div className="fixed inset-1 bg-gray-400 bg-opacity-50 z-50 flex items-center justify-center p-10 transition-transform ">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl w-full">
              <h2 className="text-2xl font-bold mb-4">
                {courseDetails[selectedCourse].title}
              </h2>
              <p className="text-lg text-gray-700 whitespace-pre-line">
                {courseDetails[selectedCourse].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
