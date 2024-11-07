import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import SouthKorea from "../../assets/TopDestination/southkorea.jpeg";
import Footer from "../Footer/Footer";

const StudySouthKorea = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the process for applying to study in South Korea?",
      answer: (
        <div>
          The application process generally involves:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Choosing a program and institution.</li>
            <li>
              Filling out the application and submitting required documents.
            </li>
            <li>Receiving an offer letter and confirming enrollment.</li>
            <li>
              Applying for a student visa with a Confirmation of Enrollment
              (COE).
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the costs associated with studying in South Korea?",
      answer: (
        <div>
          Tuition fees vary by program:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>
              ₩4,000,000 to ₩7,000,000 per semester for undergraduate programs.
            </li>
            <li>
              ₩5,000,000 to ₩9,000,000 per semester for postgraduate programs.
            </li>
            <li>₩3,000,000 to ₩6,000,000 for vocational programs.</li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Can international students work while studying in South Korea?",
      answer: (
        <div className="text-sm md:text-base">
          Yes, students with a valid student visa (D-2) can work part-time up to
          20 hours per week during semesters and full-time during breaks, with
          permission from the university.
        </div>
      ),
    },
    {
      question:
        "What is the process for obtaining a student visa for South Korea?",
      answer: (
        <div>
          To obtain a student visa, students must:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>
              Provide an acceptance letter from a recognized institution in
              South Korea.
            </li>
            <li>
              Show proof of sufficient funds for tuition and living expenses.
            </li>
            <li>
              Submit the visa application through the Korean embassy or
              consulate.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Are there scholarships for international students in South Korea?",
      answer: (
        <div>
          Yes, some scholarships include:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Korean Government Scholarship Program (KGSP).</li>
            <li>
              University-specific scholarships based on academic performance.
            </li>
            <li>
              Private and corporate scholarships available to international
              students.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the permanent residency options after graduation?",
      answer: (
        <div>
          Graduates can apply for residency through:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>D-10 Job Seeker Visa.</li>
            <li>E-7 Special Occupation Visa based on employment.</li>
            <li>F-2 Resident Visa for long-term residency.</li>
          </ul>
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div className="px-4 py-8 md:px-8 lg:px-24 bg-white">
        {/* Title Section */}
        <div className="mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why Study in South Korea from Nepal?
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 items-start lg:items-center mb-10">
          {/* Text Section */}
          <div className="lg:w-2/3 text-gray-700 text-sm md:text-base">
            <p className="mb-6 lg:mb-0">
              South Korea is known for its high-quality education, modern
              cities, and technology-driven society. It is also recognized for
              its unique cultural heritage, which blends traditional and modern
              elements. Studying in South Korea offers Nepalese students a
              chance to experience a vibrant education system, gain
              international exposure, and explore various career opportunities.
            </p>
            <p className="mb-6 mt-5 lg:mb-0">
              South Korean universities are increasingly becoming popular among
              international students due to their global ranking, affordable
              education, and a supportive environment for international
              students.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={SouthKorea}
              alt="Study in South Korea"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Facts about South Korea Section */}
        <section className="mt-16 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Facts about South Korea
          </h2>
          <ul className="list-disc pl-5 sm:pl-8 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed sm:leading-relaxed">
            <li>
              South Korea is home to prestigious institutions like Seoul
              National University, KAIST, and Yonsei University.
            </li>
            <li>
              South Korean universities offer a diverse range of programs with a
              focus on technology, science, and engineering.
            </li>
            <li>
              International students in South Korea have access to scholarships,
              especially through the Korean Government Scholarship Program.
            </li>
            <li>
              South Korea is known for its high safety standards and
              student-friendly environment.
            </li>
            <li>
              Seoul is one of the leading cities for technology and innovation,
              making it a top choice for international students interested in
              tech careers.
            </li>
            <li>
              The country has a rich culture of K-pop, Korean cuisine, and
              traditions that attract students globally.
            </li>
          </ul>
        </section>

        {/* Top Universities and Colleges in South Korea */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Top Universities and Colleges in South Korea
          </h2>
          <div className="overflow-x-auto">
            <p className="text-gray-700 my-5">
              The table below shows the top universities and colleges in South
              Korea.
            </p>
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                    University/College
                  </th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                    World Rank
                  </th>
                  <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                    South Korea Rank
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Seoul National University (SNU)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    37
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    1
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    KAIST (Korea Advanced Institute of Science and Technology)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    42
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    2
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    POSTECH (Pohang University of Science and Technology)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    91
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    3
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Yonsei University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    124
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    4
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Korea University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    142
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    5
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Ewha Womans University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    174
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    6
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Hanyang University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    227
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    7
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Sungkyunkwan University (SKKU)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    235
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    8
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Kyung Hee University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    276
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    9
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Chung-Ang University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    348
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-16 mb-10">
          {/* Flexbox Container */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Popular Courses Section (Left) */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Popular Courses in South Korea
              </h3>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        Rank
                      </th>
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        Course
                      </th>
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        1
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Computer Science
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4 years
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        2
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Electrical Engineering
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4 years
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        3
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Business Administration
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4 years
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Design & Arts
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4 years
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        5
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Korean Language
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        1 year
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Best Cities to Study Section (Right) */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Best Cities to Study in South Korea
              </h3>
              <div className="overflow-x-auto shadow-md sm:rounded-lg">
                <table className="min-w-full bg-white border border-gray-200 text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100 text-left">
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        Rank
                      </th>
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        City
                      </th>
                      <th className="px-3 md:px-4 py-2 border border-gray-200 font-semibold">
                        Features
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        1
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Seoul
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Cultural Hub, Technology, Education
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        2
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Busan
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Coastal city, Peaceful environment
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        3
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Daejeon
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Tech hub, Growing university network
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        4
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Incheon
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Proximity to Seoul, Modern infrastructure
                      </td>
                    </tr>
                    <tr>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        5
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Gwangju
                      </td>
                      <td className="px-3 md:px-4 py-2 border border-gray-200">
                        Cultural city, Affordable living
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Cost to Study and Live in South Korea */}
        <section className="mt-16">
          <div className="flex flex-col sm:flex-row justify-between gap-8">
            {/* Cost to Study in South Korea */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cost to Study in South Korea
              </h3>
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                      Estimated Cost (per year)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Tuition Fees (Undergraduate)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $4,000 - $10,000 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Tuition Fees (Postgraduate)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $6,000 - $15,000 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Accommodation (On-campus)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $1,000 - $3,000 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Food
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $1,500 - $2,000 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Health Insurance
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $200 - $300 USD
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Notes for Cost to Study */}
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Note:</strong> The estimated costs above may vary
                  based on the university, location, and personal lifestyle
                  choices. Scholarships and financial aid may also affect the
                  overall cost.
                </p>
              </div>
            </div>

            {/* Cost to Live in South Korea */}
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Cost to Live in South Korea
              </h3>
              <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                      Category
                    </th>
                    <th className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm font-semibold text-gray-700">
                      Estimated Monthly Cost
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Rent (1BHK Apartment)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $300 - $600 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Public Transportation
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $50 - $80 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Utilities (Electricity, Water, Internet)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $100 - $200 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Groceries
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $200 - $400 USD
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      Dining Out (Monthly)
                    </td>
                    <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                      $100 - $200 USD
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Notes for Cost to Live */}
              <div className="mt-4 text-sm text-gray-600">
                <p>
                  <strong>Note:</strong> The living costs mentioned here are
                  estimates and can vary based on lifestyle, location, and
                  personal choices. It's important to plan for unexpected
                  expenses as well.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Job Opportunities in South Korea
          </h2>

          <ul className="list-disc pl-5 space-y-4 text-sm md:text-base text-gray-700">
            <li>
              <strong>IT & Technology Jobs:</strong> South Korea is a global
              leader in tech, offering job opportunities in software
              development, cybersecurity, AI, and data analytics, especially in
              cities like Seoul and Busan.
            </li>
            <li>
              <strong>Teaching English:</strong> There is a high demand for
              English teachers in South Korea, especially in public schools,
              language institutes (hagwons), and universities.
            </li>
            <li>
              <strong>Healthcare & Medical Field:</strong> South Korea offers
              job opportunities for doctors, nurses, and medical professionals,
              especially in large cities with advanced healthcare systems.
            </li>
            <li>
              <strong>Engineering:</strong> The country has a thriving
              engineering sector, including civil, mechanical, and electrical
              engineering jobs, with major companies like Samsung and Hyundai
              actively hiring.
            </li>
            <li>
              <strong>Manufacturing & Industrial Jobs:</strong> South Korea is
              home to large manufacturing firms in electronics, automotive, and
              shipbuilding industries, providing numerous employment
              opportunities.
            </li>
            <li>
              <strong>Tourism & Hospitality:</strong> With the growth of
              tourism, there are opportunities in hotels, travel agencies, and
              tourism-related businesses, especially in popular cities like
              Seoul and Jeju Island.
            </li>
            <li>
              <strong>Finance & Banking:</strong> South Korea has a
              well-established financial sector, offering positions in banking,
              investment, insurance, and fintech companies.
            </li>
            <li>
              <strong>Marketing & Sales:</strong> Companies in South Korea are
              looking for professionals in digital marketing, product
              management, and international sales, especially for global
              markets.
            </li>
            <li>
              <strong>Research & Development:</strong> South Korea emphasizes
              innovation and is a hub for research in fields like biotechnology,
              nanotechnology, and renewable energy, offering jobs in R&D
              departments.
            </li>
            <li>
              <strong>Government & Public Sector Jobs:</strong> There are
              positions available in various government agencies, including
              roles for foreign nationals in diplomacy, international trade, and
              cultural exchange.
            </li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mt-16 mb-40">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            FAQs about Studying in South Korea
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-base font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </div>
              {activeIndex === index && (
                <div className="text-sm md:text-base text-gray-700 mt-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default StudySouthKorea;
