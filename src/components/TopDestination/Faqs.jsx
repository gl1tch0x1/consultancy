import React, { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa'; // Ensure you have these icons imported

const StudyAustralia = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the process for applying to study in Australia?",
      answer: (
        <div>
          The application process typically involves:
          <ul className="list-disc list-inside mt-2">
            <li>Choosing the right course and university.</li>
            <li>Completing the application form.</li>
            <li>Providing academic transcripts and documents.</li>
            <li>Receiving an offer letter.</li>
            <li>Obtaining a Confirmation of Enrollment (CoE).</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is the cost of studying in Australia?",
      answer: (
        <div>
          The average cost of studying in Australia can range from:
          <ul className="list-disc list-inside mt-2">
            <li>AUD $20,000 to AUD $45,000 per year for undergraduate programs.</li>
            <li>AUD $22,000 to AUD $50,000 per year for postgraduate programs.</li>
            <li>AUD $18,000 to AUD $42,000 per year for doctoral degrees.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is the process for applying to study at a university or college in Australia?",
      answer: (
        <div>
          The application process involves:
          <ul className="list-disc list-inside mt-2">
            <li>Submitting an online application to the university.</li>
            <li>Providing academic transcripts, IELTS scores, and references.</li>
            <li>Receiving an offer letter, and then accepting the offer.</li>
            <li>Applying for a student visa once your enrollment is confirmed.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Do I need to have health insurance while studying in Australia?",
      answer: (
        <div>
          Yes, international students are required to have Overseas Student Health Cover (OSHC), which provides basic health insurance during your stay in Australia.
        </div>
      ),
    },
    {
      question: "Can I work while studying in Australia?",
      answer: (
        <div>
          Yes, international students can work up to 40 hours per fortnight during the semester and unlimited hours during vacation periods.
        </div>
      ),
    },
    {
      question: "What are the academic requirements for studying in Australia?",
      answer: (
        <div>
          Requirements vary by program, but generally include:
          <ul className="list-disc list-inside mt-2">
            <li>Completed secondary education for undergraduate programs.</li>
            <li>A relevant undergraduate degree for postgraduate programs.</li>
            <li>English language proficiency, typically an IELTS score of 6.0 or higher.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Are there scholarships available for international students in Australia?",
      answer: (
        <div>
          Yes, there are numerous scholarships available, including:
          <ul className="list-disc list-inside mt-2">
            <li>Australia Awards Scholarships (Fully funded government scholarships).</li>
            <li>Destination Australia Scholarships (For regional areas).</li>
            <li>University-specific scholarships that vary by institution.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "What is the process for obtaining a student visa extension?",
      answer: (
        <div>
          To extend your student visa, you must:
          <ul className="list-disc list-inside mt-2">
            <li>Apply for the visa extension before your current visa expires.</li>
            <li>Provide proof of ongoing enrollment and financial support.</li>
            <li>Submit the visa extension application through the Department of Home Affairs website.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Why does a visa get rejected in Australia?",
      answer: (
        <div>
          Visa rejections can occur due to:
          <ul className="list-disc list-inside mt-2">
            <li>Insufficient proof of funds.</li>
            <li>Failure to meet English language requirements.</li>
            <li>Incomplete or inaccurate documentation.</li>
            <li>Failure to meet the Genuine Temporary Entrant (GTE) requirement.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Can Nepali students apply for permanent residency in Australia after graduating?",
      answer: (
        <div>
          Yes, Nepali students can apply for permanent residency under the skilled migration program, provided they meet the necessary work experience and qualification criteria.
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-4 py-8 md:px-8 lg:px-24 bg-white">
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          Why Study in Australia from Nepal?
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-10 items-start lg:items-center mb-10">
        {/* Text Section */}
        <div className="lg:w-2/3 text-gray-700">
          <p className="text-base md:text-lg mb-6 lg:mb-0">
            Australia offers a dynamic, vibrant education environment with advanced facilities, high-quality programs, and abundant career opportunities for international students.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3">
          <img 
            src="your-image-path.png" 
            alt="Study in Australia" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Facts About Australia */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Facts About Australia</h2>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
          <li>Australia is the third most popular destination for international students.</li>
          <li>It has a strong economy and high standards of living.</li>
          <li>Home to over 1,100 institutions, offering diverse courses.</li>
        </ul>
      </section>

      {/* Reasons to Study in Australia */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Reasons to Study in Australia</h2>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
          <li>Globally recognized qualifications and world-class education.</li>
          <li>Opportunities to work while studying.</li>
          <li>Rich cultural diversity and welcoming international community.</li>
          <li>Pathways to permanent residency upon meeting requirements.</li>
        </ul>
      </section>

      {/* Student Visa Process for Australia */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Student Visa Process for Australia</h2>
        <p className="text-base md:text-lg text-gray-700">
          To study in Australia, apply for a Student Visa (Subclass 500). This process involves:
        </p>
        <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mt-4 space-y-2">
          <li>Confirmation of Enrollment (CoE) from an Australian institution</li>
          <li>Proof of financial capacity and Overseas Student Health Cover (OSHC)</li>
          <li>Meeting the Genuine Temporary Entrant (GTE) requirements</li>
        </ul>
      </section>

      {/* Cost to Study in Australia */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Cost to Study in Australia</h2>
        <p className="text-base md:text-lg text-gray-700 mb-4">
          Below is a table providing an approximate range of annual tuition fees for international students:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border text-base md:text-lg text-gray-700">
            <thead>
              <tr>
                <th className="border px-4 py-2">Level of Study</th>
                <th className="border px-4 py-2">Average Annual Tuition Fees (AUD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Undergraduate Programs</td>
                <td className="border px-4 py-2">AUD $20,000 - $45,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Postgraduate Programs</td>
                <td className="border px-4 py-2">AUD $22,000 - $50,000</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Doctoral Programs</td>
                <td className="border px-4 py-2">AUD $18,000 - $42,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b py-4">
              <button
                className="flex items-center justify-between w-full text-left text-base md:text-lg font-semibold text-gray-900"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span>{activeIndex === index ? <FaMinus /> : <FaPlus />}</span>
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-base md:text-lg text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default StudyAustralia;
