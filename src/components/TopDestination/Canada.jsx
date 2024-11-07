import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Canada from "../../assets/TopDestination/canada.jpeg";
import Footer from "../Footer/Footer";

const StudyCanada = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the process for applying to study in Canada?",
      answer: (
        <div>
          The application process generally involves:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Choosing a program and college/university.</li>
            <li>
              Filling out the application and submitting required documents.
            </li>
            <li>Receiving an offer letter and confirming enrollment.</li>
            <li>
              Applying for a study permit with a Confirmation of Enrollment
              (COE).
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "What are the costs associated with studying in Canada?",
      answer: (
        <div>
          Tuition fees vary by program:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>CAD $13,000 to $20,000 per year for undergraduate programs.</li>
            <li>CAD $17,000 to $25,000 per year for postgraduate programs.</li>
            <li>
              CAD $7,000 to $15,000 per year for vocational training programs.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can international students work while studying in Canada?",
      answer: (
        <div className="text-sm md:text-base">
          Yes, students with a valid study permit can work up to 20 hours per
          week during semesters and full-time during scheduled breaks.
        </div>
      ),
    },
    {
      question: "What is the process for obtaining a study permit for Canada?",
      answer: (
        <div>
          To obtain a study permit, students must:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>
              Provide an acceptance letter from a Designated Learning
              Institution (DLI).
            </li>
            <li>
              Show proof of sufficient funds for tuition and living expenses.
            </li>
            <li>
              Submit the permit application through the Government of Canada
              website.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Are there scholarships for international students in Canada?",
      answer: (
        <div>
          Yes, some scholarships include:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Canadian Commonwealth Scholarship Program.</li>
            <li>Ontario Graduate Scholarship Program.</li>
            <li>University-specific scholarships based on merit.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "How do I extend my study permit in Canada?",
      answer: (
        <div>
          To extend your study permit:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Apply for the extension at least 30 days before it expires.</li>
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
          Graduates can apply for PR through:
          <ul className="list-disc list-inside mt-2 text-sm md:text-base">
            <li>Post-Graduation Work Permit (PGWP) program.</li>
            <li>Provincial Nominee Program (PNP).</li>
            <li>Canadian Experience Class (CEC) under Express Entry.</li>
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
            Why Study in Canada from Nepal?
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row lg:space-x-10 items-start lg:items-center mb-10">
          {/* Text Section */}
          <div className="lg:w-2/3 text-gray-700 text-sm md:text-base">
            <p className="mb-6 lg:mb-0">
              When anybody mentions Canada, what comes to mind? Is it the
              merciless winters, the hockey-loving Canadians, or the maple syrup
              it is renowned for? Well, you might have heard that Canadians ride
              polar bears to work and apologize all the time, but Canada is also
              one of the best countries in the world when it comes to education.
              It is one of the top choices for Nepalese students looking to
              study abroad. Canada offers reputed and affordable education,
              immigration options, and employment opportunities.
            </p>
            <p className="mb-6 mt-5 lg:mb-0">
              Known for its natural beauty, diverse culture, welcoming people,
              and high standard of living, Canada is a popular destination for
              international students. If you’re a student from Nepal considering
              studying in Canada, keep reading to learn everything you need to
              know.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3">
            <img
              src={Canada}
              alt="Study in Canada"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Facts About Canada */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Facts About Canada
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
            <li>
              Canada is the second-largest country in the world by land area.
            </li>
            <li>Canada has two official languages: English and French.</li>
            <li>
              Canada is home to some of the best universities, like the
              University of Toronto, McGill University, and University of
              British Columbia.
            </li>
            <li>
              Canada consistently ranks high in global quality of life and
              happiness indexes.
            </li>
            <li>
              Over 20% of Canada’s population is foreign-born, making it a
              multicultural hub.
            </li>
            <li>
              Canada is known for its progressive social policies and ranks high
              in global peace and stability indexes.
            </li>
            <li>
              It’s home to more than 30 UNESCO World Heritage Sites, including
              the Canadian Rocky Mountain Parks.
            </li>
            <li>
              Canada has one of the most generous healthcare systems globally,
              offering universal healthcare to all residents.
            </li>
            <li>
              Canada is a leader in AI research and innovation, especially in
              cities like Toronto and Montreal.
            </li>
            <li>
              The country is the largest producer of maple syrup, accounting for
              over 70% of global supply.
            </li>
          </ul>
        </section>

        {/* Reasons to Study in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Reasons to Study in Canada
          </h2>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
            <li>
              Top-quality education with globally recognized degrees, and Canada
              spends more on education per capita than most countries.
            </li>
            <li>
              High safety standards and a welcoming, multicultural society make
              it a top choice for international students.
            </li>
            <li>
              Numerous work opportunities, including work permits that allow
              students to work up to 20 hours per week during semesters.
            </li>
            <li>
              A pathway to permanent residency is available after graduation,
              through the Post-Graduation Work Permit Program (PGWPP) and
              Express Entry.
            </li>
            <li>
              Affordable tuition fees compared to other popular study
              destinations like the US and UK.
            </li>
            <li>
              English and French language immersion programs help students
              improve language skills in both languages.
            </li>
            <li>
              Proximity to the US allows for cross-border networking and travel
              opportunities.
            </li>
            <li>
              Canada has a supportive and active community of international
              students and a wide range of student associations.
            </li>
            <li>
              Scholarships and financial aid are available for international
              students at both the federal and provincial levels.
            </li>
            <li>
              Canada’s natural beauty and outdoor recreation options make it an
              ideal destination for students who enjoy nature and adventure.
            </li>
          </ul>
        </section>

        {/* Student Visa Process for Canada */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Student Visa Process for Canada
          </h2>
          <p className="text-sm md:text-base text-gray-700">
            To study in Canada, students need to apply for a study permit. Here
            are the steps:
          </p>
          <ul className="list-disc list-inside text-sm md:text-base text-gray-700 mt-4 space-y-2">
            <li>
              Receive an acceptance letter from a Designated Learning
              Institution (DLI) in Canada.
            </li>
            <li>
              Prepare proof of financial support for tuition, living expenses,
              and return transportation.
            </li>
            <li>
              Gather required documents like a valid passport, proof of funds,
              and recent photos.
            </li>
            <li>
              Submit a study permit application online via the Government of
              Canada website or through a Visa Application Center (VAC).
            </li>
            <li>
              Provide proof of language proficiency (usually IELTS or TOEFL) and
              undergo a medical exam if required.
            </li>
            <li>
              Check the estimated processing time for your visa, which can vary
              by country.
            </li>
            <li>
              Biometrics may be required as part of your application; check the
              requirements and visit a designated location if necessary.
            </li>
            <li>
              Once approved, receive a Port of Entry (POE) Letter of
              Introduction and, if applicable, a temporary resident visa to
              enter Canada.
            </li>
            <li>
              Upon arrival, present your POE letter to Canadian border
              officials, who will issue your study permit.
            </li>
            <li>
              Understand post-arrival steps, including applying for a Social
              Insurance Number (SIN) if you plan to work while studying.
            </li>
            <li>
              Make sure to check your study permit's expiry date and apply for
              an extension if you need to stay longer in Canada for studies.
            </li>
          </ul>
        </section>

        {/* Cost to Study in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Cost to Study in Canada
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-5">
            Here's an approximate range of annual tuition fees for international
            students in Canada:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm md:text-base text-gray-700">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="border px-4 py-2">Level of Study</th>
                  <th className="border px-4 py-2">
                    Average Annual Tuition Fees (CAD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Undergraduate Programs</td>
                  <td className="border px-4 py-2">$13,000 - $20,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Postgraduate Programs</td>
                  <td className="border px-4 py-2">$17,000 - $25,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Vocational Training Programs
                  </td>
                  <td className="border px-4 py-2">$7,000 - $15,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-base md:text-lg text-gray-700 ">
            <span className="font-bold">Note: </span> These figures are average
            estimates and can vary significantly depending on the university,
            program, and specific circumstances. It’s always advisable to
            consult the official websites of the institutions you are interested
            in to get the most up-to-date information about tuition fees for
            your chosen field of study.
          </p>
        </section>

        {/* Popular Courses and Best Cities to Study in Canada */}
        <section className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Popular Courses in Canada */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Popular Courses in Canada
              </h3>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
                <li>Business and Management</li>
                <li>Engineering and Technology</li>
                <li>Health Sciences (Nursing, Pharmacy)</li>
                <li>Computer Science and Information Technology</li>
                <li>Environmental Science</li>
                <li>Hospitality and Tourism Management</li>
                <li>Media Studies and Communications</li>
                <li>Data Science and Analytics</li>
                <li>Finance and Accounting</li>
                <li>Psychology and Social Sciences</li>
              </ul>
            </div>

            {/* Best Cities to Study in Canada */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Best Cities to Study in Canada
              </h3>
              <ul className="list-disc list-inside text-sm md:text-base text-gray-700 space-y-2">
                <li>Toronto.</li>
                <li>Vancouver.</li>
                <li>Montreal.</li>
                <li>Ottawa.</li>
                <li>Calgary.</li>
                <li>Edmonton.</li>
                <li>Quebec City.</li>
                <li>Waterloo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Top Universities and Colleges in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Top Universities and Colleges in Canada
          </h2>
          <div className="overflow-x-auto">
            <p className="text-sm md:text-base text-gray-700 mb-5">
              This table lists the top universities and colleges in Canada.
            </p>
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
                <thead>
                  <tr className="bg-gray-100 text-center border-b border-gray-300">
                    <th className="px-6 py-3 border-r border-gray-300 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                      University/College
                    </th>
                    <th className="px-6 py-3 border-r border-gray-300 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                      World Rank
                    </th>
                    <th className="px-6 py-3 text-xs md:text-sm lg:text-base font-semibold text-gray-700">
                      Canada Rank
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "University of Toronto",
                      worldRank: 34,
                      canadaRank: 1,
                    },
                    { name: "McGill University", worldRank: 51, canadaRank: 2 },
                    {
                      name: "University of British Columbia (UBC)",
                      worldRank: 47,
                      canadaRank: 3,
                    },
                    {
                      name: "McMaster University",
                      worldRank: 144,
                      canadaRank: 4,
                    },
                    {
                      name: "University of Alberta",
                      worldRank: 119,
                      canadaRank: 5,
                    },
                    {
                      name: "Université de Montréal",
                      worldRank: 137,
                      canadaRank: 6,
                    },
                    {
                      name: "Queen’s University",
                      worldRank: 246,
                      canadaRank: 7,
                    },
                    {
                      name: "University of Ottawa",
                      worldRank: 281,
                      canadaRank: 8,
                    },
                    {
                      name: "Western University",
                      worldRank: 211,
                      canadaRank: 9,
                    },
                    { name: "York University", worldRank: 401, canadaRank: 10 },
                  ].map((university, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 border-b border-gray-300"
                    >
                      <td className="px-6 py-3 border-r border-gray-300 text-xs md:text-sm lg:text-base text-gray-800 text-left">
                        {university.name}
                      </td>
                      <td className="px-6 py-3 border-r border-gray-300 text-xs md:text-sm lg:text-base text-gray-800 text-left">
                        {university.worldRank}
                      </td>
                      <td className="px-6 py-3 text-xs md:text-sm lg:text-base text-gray-800 text-left">
                        {university.canadaRank}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cost of Living in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Cost of Living in Canada
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-6 py-3 border-b border-r text-sm sm:text-base font-semibold text-gray-700">
                    Expense Category
                  </th>
                  <th className="px-6 py-3 border-b text-sm sm:text-base font-semibold text-gray-700">
                    Average Monthly Cost (CAD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Rent (1 Bedroom Apartment)
                  </td>
                  <td className="px-6 py-3 border-b text-sm sm:text-base text-gray-800">
                    $1,200 - $2,500
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Utilities (Electricity, Heating, Water)
                  </td>
                  <td className="px-6 py-3 border-b text-sm sm:text-base text-gray-800">
                    $100 - $200
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Food (Groceries)
                  </td>
                  <td className="px-6 py-3 border-b text-sm sm:text-base text-gray-800">
                    $300 - $500
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Transportation (Public Transport)
                  </td>
                  <td className="px-6 py-3 border-b text-sm sm:text-base text-gray-800">
                    $100 - $150
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b border-r text-sm sm:text-base text-gray-800">
                    Internet
                  </td>
                  <td className="px-6 py-3 border-b text-sm sm:text-base text-gray-800">
                    $50 - $100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Health Insurance in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Health Insurance in Canada
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            In Canada, healthcare is publicly funded through provincial health
            insurance plans, known as Medicare. International students are
            required to either apply for provincial health insurance or purchase
            private health insurance during their stay.
          </p>
          <p className="text-sm sm:text-base text-gray-700 mt-4">
            - In provinces like British Columbia, Ontario, and Quebec,
            international students may be eligible for provincial healthcare
            coverage (after a waiting period).
            <br />
            - In other provinces, students are typically required to purchase
            private health insurance from the university or an independent
            insurer.
            <br />- Health insurance usually covers doctor visits, hospital
            stays, and emergency medical care.
          </p>
        </section>

        {/* Scholarships in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Scholarships in Canada
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="px-4 py-3 border-b border-r text-xs sm:text-sm font-semibold text-gray-700">
                    Scholarship Name
                  </th>
                  <th className="px-4 py-3 border-b border-r text-xs sm:text-sm font-semibold text-gray-700">
                    Eligibility
                  </th>
                  <th className="px-4 py-3 border-b text-xs sm:text-sm font-semibold text-gray-700">
                    Award Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Vanier Canada Graduate Scholarships
                  </td>
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    International PhD students
                  </td>
                  <td className="px-4 py-3 border-b text-xs sm:text-sm text-gray-800">
                    $50,000 per year
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Canada Graduate Scholarships – Master’s Program
                  </td>
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Master’s degree students
                  </td>
                  <td className="px-4 py-3 border-b text-xs sm:text-sm text-gray-800">
                    $17,500 per year
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Ontario Graduate Scholarship
                  </td>
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Graduate students in Ontario
                  </td>
                  <td className="px-4 py-3 border-b text-xs sm:text-sm text-gray-800">
                    $15,000 per year
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Lester B. Pearson International Scholarship
                  </td>
                  <td className="px-4 py-3 border-b border-r text-xs sm:text-sm text-gray-800">
                    Undergraduate international students
                  </td>
                  <td className="px-4 py-3 border-b text-xs sm:text-sm text-gray-800">
                    Tuition, books, and incidental fees
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Job Opportunities in Canada */}
        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Job Opportunities in Canada
          </h2>
          <p className="text-sm sm:text-base text-gray-700">
            Canada is known for its strong economy and ample job opportunities,
            especially for international students. After completing their
            studies, international students can benefit from various work
            permits that allow them to gain work experience in Canada.
          </p>
          <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 mt-4 space-y-2">
            <li>
              <span className="font-semibold">
                Post-Graduation Work Permit (PGWP):
              </span>{" "}
              Allows international graduates to work in Canada for up to three
              years, depending on the program length.
            </li>
            <li>
              <span className="font-semibold">On-Campus Employment:</span>{" "}
              International students can work up to 20 hours per week during
              semesters and full-time during breaks.
            </li>
            <li>
              <span className="font-semibold">
                Internships and Co-op Programs:
              </span>{" "}
              Many Canadian universities offer co-op programs, which help
              students gain practical work experience while studying.
            </li>
            <li>
              <span className="font-semibold">Career Opportunities:</span>{" "}
              Canada’s economy is diverse, with top industries in technology,
              healthcare, education, engineering, and finance, offering numerous
              career opportunities.
            </li>
          </ul>
        </section>

        {/* FAQs Section */}
        <section className="mt-16 mb-40">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            FAQs about Studying in Canada
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

export default StudyCanada;
