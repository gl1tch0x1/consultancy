import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Australia from "../../assets/TopDestination/aus.webp";
import Footer from "../Footer/Footer";

const StudyAustralia = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaqs = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      question: "What is the process for applying to study in Australia?",
      answer:
        "The process generally involves selecting a course and institution, obtaining a Confirmation of Enrollment (CoE), proving financial capacity, and applying for a student visa.",
    },
    {
      question: "What is the cost of studying in Australia?",
      answer:
        "The cost of studying in Australia can range from AUD 20,000 to AUD 50,000 per year, depending on the level of study and course type.",
    },
    {
      question:
        "What is the process for applying to study at a university or college in Australia?",
      answer:
        "The process includes applying through the university's portal or through an education agent, submitting necessary documents like academic transcripts and English proficiency scores, and awaiting admission approval.",
    },
    {
      question:
        "Do I need to have health insurance while studying in Australia?",
      answer:
        "Yes, Overseas Student Health Cover (OSHC) is mandatory for international students in Australia and is required for obtaining a student visa.",
    },
    {
      question: "Can I work while studying in Australia?",
      answer:
        "Yes, international students can work up to 40 hours per fortnight during the academic term and unlimited hours during semester breaks.",
    },
    {
      question: "What are the academic requirements for studying in Australia?",
      answer:
        "The academic requirements vary by course and institution, but generally include meeting specific entry requirements related to previous education and English language proficiency.",
    },
    {
      question:
        "Are there scholarships available for international students in Australia?",
      answer:
        "Yes, Australia offers a variety of scholarships for international students, including government-sponsored scholarships, university-specific scholarships, and those from private organizations.",
    },
    {
      question: "What is the process for obtaining a student visa extension?",
      answer:
        "To extend your student visa, you need to provide evidence that you are continuing your studies and have the financial means to support yourself during the extension period.",
    },
    {
      question: "Why does a visa get rejected in Australia?",
      answer:
        "A student visa may be rejected due to issues like incomplete documentation, insufficient proof of financial capacity, failure to meet the Genuine Temporary Entrant (GTE) criteria, or previous visa violations.",
    },
    {
      question:
        "Can Nepali students apply for permanent residency in Australia after graduating?",
      answer:
        "Yes, Nepali students may be eligible for permanent residency in Australia through skilled migration pathways if they meet the requirements, such as having a relevant qualification and work experience.",
    },
  ];

  return (
    <div>
      <div className="px-6 py-10 lg:px-24 bg-white">
        {/* Title Section */}
        <div className="text-left mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Why Study in Australia from Nepal?
          </h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          {/* Text Section */}
          <div className="lg:w-2/3 text-gray-700">
            <p className="text-lg mb-6">
              Australia is not only a student destination but overall a dynamic
              and technologically vibrant country that offers a good educational
              and career life to students from all over the world.
            </p>
            <p className="text-lg mb-6">
              Australia is a highly sought{" "}
              <span className="font-bold text-red-500">study destination</span>{" "}
              for Nepalese students due to its excellent education, quality
              lifestyle, and welcoming atmosphere. It attracts students from
              around the world, including Nepal, who are looking for a top-notch
              education.
            </p>
            <p className="text-lg mb-6">
              With a wide range of courses and over{" "}
              <span className="font-bold text-black">1,100 institutions</span>,
              including prestigious universities, Australia offers an
              exceptional educational environment. It covers diverse study areas
              and provides abundant opportunities for international students to
              pursue their desired fields, such as language, nursing, and
              medicine.
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/3 mt-6 lg:mt-0 lg:ml-10">
            <img
              src={Australia}
              alt="Study in Australia"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Facts About Australia */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Facts About Australia
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>
              Australia is the third most popular destination for international
              students.
            </li>
            <li>It has a strong economy and high standards of living.</li>
            <li>Home to over 1,100 institutions, offering diverse courses.</li>
            <li>Australia is the world's 6th largest country by land area.</li>
            <li>
              Over 300,000 international students study in Australia each year.
            </li>
            <li>
              Australia is known for its high quality of life, diverse cities,
              and beautiful landscapes.
            </li>
            <li>
              It has an excellent healthcare system and vibrant cultural and
              sporting activities.
            </li>
          </ul>
        </section>

        {/* Reasons to Study in Australia */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Reasons to Study in Australia
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>
              Globally recognized qualifications and world-class education.
            </li>
            <li>Opportunities to work while studying.</li>
            <li>
              Rich cultural diversity and welcoming international community.
            </li>
            <li>Pathways to permanent residency upon meeting requirements.</li>
            <li>Excellent support systems for international students.</li>
            <li>Access to cutting-edge research and innovation.</li>
            <li>Great opportunities for practical learning and internships.</li>
          </ul>
        </section>

        {/* Student Visa Process for Australia */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Student Visa Process for Australia
          </h2>
          <p className="text-base md:text-lg text-gray-700">
            To study in Australia, apply for a Student Visa (Subclass 500). This
            process involves:
          </p>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 mt-4 space-y-2">
            <li>
              Confirmation of Enrollment (CoE) from an Australian institution
            </li>
            <li>
              Proof of financial capacity and Overseas Student Health Cover
              (OSHC)
            </li>
            <li>Meeting the Genuine Temporary Entrant (GTE) requirements</li>
            <li>
              Completing biometrics, medical examinations, and obtaining police
              certificates (if required)
            </li>
            <li>Proving sufficient English language proficiency</li>
          </ul>
        </section>

        {/* Cost to Study in Australia */}
        <section className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Cost to Study in Australia
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">
            Below is a table providing an approximate range of annual tuition
            fees for international students:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border text-base md:text-lg text-gray-700">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">Level of Study</th>
                  <th className="border px-4 py-2">
                    Average Annual Tuition Fees (AUD)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">Undergraduate</td>
                  <td className="border px-4 py-2">$20,000 – $45,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Postgraduate</td>
                  <td className="border px-4 py-2">$22,000 – $50,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Doctoral Degree</td>
                  <td className="border px-4 py-2">$18,000 – $42,000</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">PhD</td>
                  <td className="border px-4 py-2">$22,000 – $50,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-base md:text-lg text-gray-700 ">
            <span className="font-bold">Note: </span> The cost mentioned above is
            based on estimated figures from the college and university average
            and does not confirm the fees you may pay.
          </p>
        </section>

        {/* Top Universities in Australia */}
        <section className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Top Universities in Australia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border text-base md:text-lg text-gray-700">
              <thead>
              <tr className="bg-gray-100">
                  <th className="border px-4 py-2">University</th>
                  <th className="border px-4 py-2">Australia Rank</th>
                  <th className="border px-4 py-2">World Rank</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">University of Melbourne</td>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">35</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">University of Sydney</td>
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">42</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Australian National University
                  </td>
                  <td className="border px-4 py-2">3</td>
                  <td className="border px-4 py-2">50</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">University of Queensland</td>
                  <td className="border px-4 py-2">4</td>
                  <td className="border px-4 py-2">53</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    University of New South Wales
                  </td>
                  <td className="border px-4 py-2">5</td>
                  <td className="border px-4 py-2">67</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    University of Western Australia
                  </td>
                  <td className="border px-4 py-2">6</td>
                  <td className="border px-4 py-2">93</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Monash University</td>
                  <td className="border px-4 py-2">7</td>
                  <td className="border px-4 py-2">96</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">University of Adelaide</td>
                  <td className="border px-4 py-2">8</td>
                  <td className="border px-4 py-2">106</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    University of Technology Sydney
                  </td>
                  <td className="border px-4 py-2">9</td>
                  <td className="border px-4 py-2">133</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">
                    Queensland University of Technology
                  </td>
                  <td className="border px-4 py-2">10</td>
                  <td className="border px-4 py-2">150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Best Cities to Study in Australia */}
        <section className="mt-16 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Best Cities to Study in Australia
          </h2>
          <ul className="list-disc pl-6 text-base md:text-lg text-gray-700 space-y-4">
            <li>
              <strong>Sydney:</strong> Known for its iconic landmarks like the
              Sydney Opera House and Harbour Bridge, Sydney is a bustling
              metropolis with excellent universities, vibrant culture, and a
              wide range of career opportunities.
            </li>
            <li>
              <strong>Melbourne:</strong> A cultural hub with diverse
              entertainment, dining, and arts scenes, Melbourne is famous for
              its high-ranking universities, coffee culture, and a strong sense
              of community.
            </li>
            <li>
              <strong>Brisbane:</strong> A sunny city with a laid-back
              lifestyle, Brisbane is home to some top universities, a growing
              tech scene, and beautiful outdoor attractions such as the Gold
              Coast and Moreton Bay.
            </li>
            <li>
              <strong>Adelaide:</strong> Known for its affordability, safety,
              and relaxed atmosphere, Adelaide offers a high standard of
              education, great food and wine, and a lower cost of living
              compared to other major cities.
            </li>
            <li>
              <strong>Perth:</strong> Located on the west coast, Perth is known
              for its natural beauty, outdoor activities, and a relaxed
              lifestyle. The city boasts a strong economy and a vibrant student
              community.
            </li>
            <li>
              <strong>Canberra:</strong> As the capital of Australia, Canberra
              offers a peaceful environment with great educational institutions
              and a focus on research, government, and international relations.
            </li>
            <li>
              <strong>Hobart:</strong> A smaller city known for its historic
              charm, Hobart offers a close-knit community, a high quality of
              life, and easy access to Tasmania’s natural beauty.
            </li>
          </ul>
        </section>

        {/* Health Insurance */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Health Insurance in Australia
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>
              Overseas Student Health Cover (OSHC) is mandatory for student visa
              holders.
            </li>
            <li>
              OSHC covers basic medical services, including hospital care and
              some pharmaceuticals.
            </li>
            <li>
              Cost ranges from AUD 500–600 per year depending on provider and
              coverage.
            </li>
          </ul>
        </section>

        {/* Scholarships */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Scholarships in Australia
          </h2>
          <ul className="list-disc list-inside text-base md:text-lg text-gray-700 space-y-2">
            <li>
              Australia Awards Scholarships – Fully funded government
              scholarships.
            </li>
            <li>
              Destination Australia Scholarships – Scholarships for regional
              study areas.
            </li>
            <li>University-specific scholarships – Varies by institution.</li>
          </ul>
        </section>

        {/* Job Opportunities in Australia */}
        <section className="mt-16 py-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Job Opportunities in Australia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {/* Technology & IT */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Technology & IT
              </h3>
              <p className="text-gray-700 text-base">
                With a rapidly growing tech industry, Australia offers abundant
                job opportunities in software development, data science,
                cybersecurity, and IT consulting.
              </p>
            </div>

            {/* Healthcare */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Healthcare
              </h3>
              <p className="text-gray-700 text-base">
                Healthcare is one of Australia's largest sectors, providing
                roles for medical professionals, nurses, pharmacists, and health
                administrators due to the aging population and expanding health
                services.
              </p>
            </div>

            {/* Engineering */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Engineering
              </h3>
              <p className="text-gray-700 text-base">
                Skilled engineers in fields like civil, mechanical, electrical,
                and mining are in demand, especially for infrastructure projects
                and renewable energy initiatives.
              </p>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Education
              </h3>
              <p className="text-gray-700 text-base">
                Australia has a high demand for educators, especially in early
                childhood, primary, and secondary education, as well as for
                university lecturers and tutors.
              </p>
            </div>

            {/* Finance & Accounting */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Finance & Accounting
              </h3>
              <p className="text-gray-700 text-base">
                The finance sector offers career paths in accounting, banking,
                investment, and financial analysis, with opportunities for both
                local and international professionals.
              </p>
            </div>

            {/* Hospitality & Tourism */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hospitality & Tourism
              </h3>
              <p className="text-gray-700 text-base">
                As a popular tourist destination, Australia offers roles in
                hospitality and tourism, including management positions in
                hotels, restaurants, and travel agencies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-16 mb-40">
          {/* Header */}
          <div className="px-4 lg:px-20 w-full bg-gray-100">
            <div className="mt-20 px-4 lg:px-20 py-14">
              <h1 className="text-2xl lg:text-5xl tracking-wider font-serif">
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
          </div>
          {/* FAQ List */}
          <div className="px-4 lg:px-20 space-y-4 mt-10">
            {data.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 mb-4 cursor-pointer"
                onClick={() => toggleFaqs(index)}
              >
                {/* Question and Icon */}
                <div className="flex justify-between items-center py-4 bg-[#E8E8E8] px-5 rounded-md">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {faq.question}
                  </h2>
                  {openIndex === index ? (
                    <FaMinus className="text-xl lg:text-2xl text-gray-600 transition-all duration-500" />
                  ) : (
                    <FaPlus className="text-xl lg:text-2xl text-gray-600 transition-all duration-500" />
                  )}
                </div>
                {/* Answer */}
                {openIndex === index && (
                  <p className="mt-4 text-lg text-gray-700 transition-all duration-500">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default StudyAustralia;
