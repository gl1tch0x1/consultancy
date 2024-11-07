import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import USA from "../../assets/TopDestination/usa.jpeg";
import Footer from "../Footer/Footer";

const StudyUSA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the process for applying to study in the USA?",
      answer: (
        <div>
          The application process generally involves:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Researching programs and universities.</li>
            <li>
              Filling out the application and submitting required documents,
              such as transcripts and test scores.
            </li>
            <li>Receiving an acceptance letter and confirming enrollment.</li>
            <li>
              Applying for a student visa with the necessary documentation.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the costs associated with studying in the USA?",
      answer: (
        <div>
          Tuition fees vary by program and university:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>USD $20,000 to $50,000 per year for undergraduate programs.</li>
            <li>USD $25,000 to $70,000 per year for postgraduate programs.</li>
            <li>
              Living expenses vary, generally between USD $10,000 to $20,000 per
              year.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can international students work while studying in the USA?",
      answer: (
        <div className="text-sm md:text-base">
          Yes, students with an F-1 visa can work up to 20 hours per week
          on-campus during semesters and full-time during breaks. Off-campus
          work opportunities, such as OPT (Optional Practical Training) and CPT
          (Curricular Practical Training), are also available.
        </div>
      ),
    },
    {
      question: "What is the process for obtaining a student visa for the USA?",
      answer: (
        <div>
          To obtain a student visa, students must:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Receive an acceptance letter from a SEVP-certified school.</li>
            <li>Pay the SEVIS fee and schedule a visa interview.</li>
            <li>
              Provide documents proving financial capability and intent to
              return home after studies.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Are there scholarships for international students in the USA?",
      answer: (
        <div>
          Yes, some scholarships include:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Fulbright Foreign Student Program.</li>
            <li>Hubert H. Humphrey Fellowship Program.</li>
            <li>University-specific merit-based scholarships.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How do I extend my student visa in the USA?",
      answer: (
        <div>
          To extend your student visa:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>
              Apply for an extension through your school's Designated School
              Official (DSO) before the visa expires.
            </li>
            <li>
              Provide proof of continued enrollment and financial capability.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the permanent residency options after graduation?",
      answer: (
        <div>
          Graduates can apply for permanent residency through:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Employment-based immigrant visas (such as H-1B).</li>
            <li>Green Card options via sponsorship by an employer.</li>
            <li>Family-based Green Card options if applicable.</li>
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
            Why Study in the USA from Nepal?
          </h1>
        </div>
        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 items-start lg:items-center mb-10">
          {/* Text Section */}
          <div className="lg:w-2/3 text-gray-700 text-sm md:text-base">
            <p className="mb-6 lg:mb-0">
              The United States is known for its prestigious educational
              institutions and diverse cultural landscape. For Nepalese
              students, studying in the USA provides opportunities to learn in
              top-notch facilities, experience global diversity, and build a
              career in one of the most advanced economies in the world.
            </p>
            <p className="mb-6 mt-5 lg:mb-0">
              With a strong focus on research, innovation, and hands-on
              learning, the USA remains a top choice for international students.
              If you're considering studying in the USA, this guide will provide
              insights on costs, visa requirements, scholarships, and more.
            </p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-10">
            <img
              src={USA}
              alt="Study in USA"
              className="w-full max-w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Facts about USA Section */}
        <section className="mt-16 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Facts about USA
          </h2>
          <ul className="list-disc pl-5 sm:pl-8 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed sm:leading-relaxed">
            <li>
              The USA is home to over 4,500 universities and colleges, including
              some of the world's most prestigious institutions like Harvard,
              MIT, and Stanford.
            </li>
            <li>
              American universities offer a wide range of programs and courses,
              allowing students to tailor their education to fit their career
              goals.
            </li>
            <li>
              The USA has a diverse and multicultural environment, with
              international students making up about 5% of the total student
              population.
            </li>
            <li>
              International students in the USA can work on-campus up to 20
              hours per week during semesters and full-time during breaks.
            </li>
            <li>
              The USA offers optional practical training (OPT) and curricular
              practical training (CPT) for students seeking work experience in
              their field of study.
            </li>
            <li>
              Many scholarships and financial aid options are available for
              international students in the USA, both from universities and
              external organizations.
            </li>
            <li>
              Students graduating from American universities are highly valued
              in the global job market due to the strong reputation of U.S.
              higher education.
            </li>
            <li>
              The USA has a rich culture of innovation, with significant
              contributions to technology, science, and the arts.
            </li>
          </ul>
        </section>

        {/* Popular Courses and Best Cities to Study */}
        <div className="mt-16 flex flex-col lg:flex-row gap-8">
          {/* Popular Courses in USA */}
          <section className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Popular Courses in the USA
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Computer Science and Information Technology</li>
              <li>Engineering</li>
              <li>Business Administration and Management</li>
              <li>Medicine and Healthcare</li>
              <li>Law and International Relations</li>
              <li>Environmental Science</li>
              <li>Arts and Humanities</li>
            </ul>
          </section>

          {/* Best Cities to Study in the USA */}
          <section className="lg:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Best Cities to Study in the USA
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base space-y-2">
              <li>Boston, Massachusetts</li>
              <li>San Francisco, California</li>
              <li>New York City, New York</li>
              <li>Chicago, Illinois</li>
              <li>Los Angeles, California</li>
              <li>Austin, Texas</li>
              <li>Washington, D.C.</li>
            </ul>
          </section>
        </div>

        {/* Top Universities and Colleges in the USA */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Top Universities and Colleges in the USA
          </h2>
          <div className="overflow-x-auto">
            <p className="text-gray-700 my-5">
              The table below shows the top universities and colleges in the USA
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
                    USA Rank
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Harvard University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    1
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    1
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Stanford University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    3
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    2
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Massachusetts Institute of Technology (MIT)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    4
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    3
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    California Institute of Technology (Caltech)
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    5
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    4
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    University of Chicago
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    10
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    5
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Princeton University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    12
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    6
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Columbia University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    16
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    7
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    University of Pennsylvania
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    17
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    8
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Yale University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    18
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    9
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-r border-gray-300 text-xs sm:text-sm text-gray-800">
                    Johns Hopkins University
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    21
                  </td>
                  <td className="px-4 sm:px-6 py-2 sm:py-3 border-b border-gray-300 text-xs sm:text-sm text-gray-800">
                    10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Cost of Living in the USA */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Cost of Living in the USA
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-sm sm:text-base font-semibold text-gray-700 border-b border-r">
                    Expense Category
                  </th>
                  <th className="px-6 py-3 text-sm sm:text-base font-semibold text-gray-700 border-b border-r">
                    Average Monthly Cost (USD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Rent (1 Bedroom Apartment)
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $1,500 - $3,000
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Utilities
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $150 - $200
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Food
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $300 - $600
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Transportation (Public)
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $70 - $150
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Internet
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $50 - $80
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Health Insurance
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $150 - $400
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    Entertainment
                  </td>
                  <td className="px-6 py-3 text-sm sm:text-base text-gray-800 border-b border-r">
                    $100 - $300
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm sm:text-base text-gray-600">
            <strong>Note:</strong> The cost of living can vary greatly depending
            on the city and lifestyle. The values provided above are averages
            for larger cities, and smaller cities or rural areas may have lower
            costs.
          </p>
        </section>

        {/* Health Insurance in the USA */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Health Insurance in the USA
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Health insurance is mandatory for international students in the USA.
            Most universities offer student health plans, but private insurance
            options are also available. Costs vary widely based on coverage and
            provider, with average plans costing between $500 - $1,500 per year.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Typically, student health insurance plans provide coverage for
            medical expenses, such as doctor's visits, hospital stays, emergency
            services, and prescription medications. It's important to carefully
            review the coverage details to ensure that the plan includes
            services like mental health support, vaccinations, and preventive
            care, which may not always be covered by basic plans.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            If the university's health plan doesn't meet a student's needs,
            private insurance can be a good alternative. Some students opt for
            insurance providers that offer comprehensive coverage, including
            dental, vision, and health emergencies while traveling outside the
            USA. However, private plans tend to be more expensive, so it's
            crucial to compare prices and benefits.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Many universities also allow students to waive the mandatory
            university health plan if they can show proof of equivalent or
            better coverage through private insurance. Students should consult
            their university’s international student office to understand the
            requirements for health insurance, the process of enrolling, and any
            deadlines for submitting proof of coverage.
          </p>
        </section>

        {/* Scholarships in the USA */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Scholarships in the USA
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg table-auto">
              <thead className="bg-gray-100">
                <tr className="text-left">
                  <th className="px-4 py-3 border-b border-r text-sm sm:text-base font-semibold text-gray-700">
                    Scholarship Name
                  </th>
                  <th className="px-4 py-3 border-b border-r text-sm sm:text-base font-semibold text-gray-700">
                    Eligibility
                  </th>
                  <th className="px-4 py-3 border-b text-sm sm:text-base font-semibold text-gray-700">
                    Award Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Fulbright Scholarships
                  </td>
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    International graduate students
                  </td>
                  <td className="px-4 py-3 border-b text-sm sm:text-base text-gray-800">
                    Varies
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    The Gates Scholarship
                  </td>
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    U.S. students with high academic achievement
                  </td>
                  <td className="px-4 py-3 border-b text-sm sm:text-base text-gray-800">
                    Full tuition, fees, and living expenses
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    AAUW International Fellowship
                  </td>
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Women pursuing graduate study in the U.S.
                  </td>
                  <td className="px-4 py-3 border-b text-sm sm:text-base text-gray-800">
                    Up to $30,000
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    National Merit Scholarship Program
                  </td>
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    U.S. high school students with high PSAT scores
                  </td>
                  <td className="px-4 py-3 border-b text-sm sm:text-base text-gray-800">
                    $2,500 per year
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Rhodes Scholarships
                  </td>
                  <td className="px-4 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    International students for graduate study at Oxford
                    University
                  </td>
                  <td className="px-4 py-3 border-b text-sm sm:text-base text-gray-800">
                    Full tuition, living stipend
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Job Opportunities in the USA */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Job Opportunities in the USA
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            The USA offers excellent work opportunities, both on-campus and
            off-campus. International students can work up to 20 hours per week
            during semesters and full-time during breaks. Optional Practical
            Training (OPT) allows up to three years of work experience in the
            USA after graduation for STEM students.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            On-campus jobs are a great way to gain work experience while
            studying. These jobs may include positions in libraries, student
            centers, cafeterias, or administrative offices. On-campus work is
            often more flexible and can help students balance their academic and
            financial needs. Some universities also offer research or teaching
            assistantships, which provide financial support while enhancing
            academic experience.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Off-campus jobs are available for international students under
            specific circumstances. The most common way to work off-campus is
            through Curricular Practical Training (CPT), which is an internship
            or cooperative education program that directly relates to a
            student’s major. Students must be enrolled full-time for at least
            one academic year to qualify for CPT.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            After graduation, students can apply for Optional Practical Training
            (OPT), which allows them to work in the USA in their field of study
            for up to 12 months (or up to 36 months for STEM graduates). OPT
            offers an excellent opportunity for international students to gain
            valuable experience, improve their skills, and build professional
            networks in the U.S. job market.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            International students can also explore the H-1B visa route, which
            allows highly skilled workers in specialty occupations to work in
            the USA for a specified period. However, securing an H-1B visa is
            highly competitive, and students often need to secure job offers
            from employers who are willing to sponsor their visa.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            Networking is an essential part of finding job opportunities in the
            USA. Many universities organize career fairs, networking events, and
            workshops that connect students with potential employers. Students
            are also encouraged to create profiles on professional networking
            platforms like LinkedIn, where they can connect with alumni,
            recruiters, and hiring managers from various industries.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mb-4">
            It is important to be aware of the work restrictions and visa
            regulations as an international student. Violating the conditions of
            your student visa can have serious consequences, including
            deportation or being barred from re-entering the USA. Always consult
            with your university’s international student office and U.S.
            immigration services to ensure you are in compliance with
            work-related rules and requirements.
          </p>
        </section>

        {/* FAQs Section */}
        <section className="mt-16 mb-40">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            FAQs about Studying in the USA
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

export default StudyUSA;
