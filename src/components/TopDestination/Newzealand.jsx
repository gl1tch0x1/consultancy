import React, { useState } from "react";
import Admisson from "../../assets/TopDestination/admission.webp";
import VisaLodge from "../../assets/TopDestination/visalodgement.webp";
import EnglishTest from "../../assets/TopDestination/englishTest.webp";
import Departure from "../../assets/TopDestination/departure.webp";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const Newzealand = () => {
  const data = [
    {
      question:
        "  What are the requirements for a Nepalese student to study in New Zealand?",
      answer:
        "To study in New Zealand, a Nepalese student must meet the general requirements for international students. These include having a valid passport, obtaining a student visa, securing a letter of acceptance from a New Zealand educational institution, and ensuring they have sufficient funds to support both their studies and living costs.",
    },
    {
      question:
        " What is the cost of studying in New Zealand for a Nepalese student?",
      answer:
        "The cost of studying in New Zealand will vary depending on a number of factors, including the type of institution and the program of study. In general, however, international students in New Zealand can expect to pay between NZD 20,000 and NZD 30,000 per year for tuition, plus additional costs for living expenses, travel, and insurance.",
    },
    {
      question:
        "  Are there scholarships available for Nepalese students to study in New Zealand?",
      answer:
        "Yes, there are scholarships available for Nepalese students to study in New Zealand. Some scholarships are offered by the New Zealand government, while others are offered by educational institutions or private organizations.",
    },
    {
      question: " Does a New Zealand visa require an interview?",
      answer:
        "Once the visa fee has been paid, the applicant will be able to schedule a visa interview with the New Zealand Embassy or Consulate. The visa interview is the final stage of the application procedure, in which one of the consular officers will ask questions in order to assess the applications.",
    },
    {
      question: "  How long can I stay in New Zealand after studying?",
      answer:
        "If you study a postgraduate degree after completing your undergraduate degree, you may be eligible for a Post Study Work Visa that is valid for up to three years.",
    },
    {
      question: "How much bank balance is required in Australia?",
      answer:
        "You will need to provide proof that you have either NZ$1,250 per month or NZ$15,000 for a full academic year. Bank statements may be required.",
    },
    {
      question: " Can I get PR after studying in New Zealand?",
      answer:
        "If you have a degree that is acceptable, you can apply for a visa to work in New Zealand for up to three years after you complete your studies. Depending on the degree of your education and the location of your studies, a post-study work visa is valid for 1, 2, or 3 years.",
    },
    {
      question:
        " What is the minimum wage in New Zealand for international students?",
      answer:
        "The minimum wage in New Zealand is NZ$18.90 per hour for international students.",
    },
    {
      question: " Does New Zealand accept the gap?",
      answer:
        "Even after a ten-year gap, a student can apply for a New Zealand visa if he or she can provide credible information about work experience, studies, and skill set.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaqs = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      <div className="container px-4 my-44 lg:px-24">
        {/* Register button */}
        <Link to={"/contact"}>
          <div className="hidden lg:fixed bg-[#050E38] right-0 mt-44 rotate-90 rounded-md shadow-2xl">
            <p className="text-2xl px-6 py-3 text-white font-serif">
              Register Here
            </p>
          </div>
        </Link>
        {/* heading */}
        <div>
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
            World-Renowned Universities
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700 text-wrap   mt-10 font-poppins">
            There are lots of reasons that you should consider going New Zealand
            for you further abroad study. New Zealand has an international
            reputation as a provider of quality education. It offers a safe
            learning environment which provides excellent study opportunities &
            support system for international students.
          </p>
          <p className="text-lg lg:text-2xl text-gray-700 text-wrap mt-6 font-poppins">
            Many people will call natives of the country “Kiwis” after the bird
            that only resides there and nowhere else in the entire world. New
            Zealand’s people are some of the most amazing, loving, and welcoming
            people that you will ever meet. If you are a stranger, a native New
            Zealander is going to treat you like you are a friend. They are used
            to meeting new people, first because they travel a lot themselves
            and also because a lot of people come to visit New Zealand as a
            student or tourist. For being such a small country, the diversity is
            greater than you see in many European countries.
          </p>
          <p className="text-lg lg:text-2xl text-gray-700 text-wrap   mt-6 font-poppins">
            The economy of New Zealand is actually incredibly stable; the cost
            of living is low, and the government is more stable than the
            government that you see in other countries.Nothing can get better
            than the weather of New Zealand. Weather of New Zealand is almost
            same as weather of Nepal.
          </p>
        </div>

        <div className="mt-24">
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
            The Educational System
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            <p className="text-lg lg:text-2xl text-gray-700 text-wrap   mt-6 font-poppins ">
              This is the number one reason to go New Zealand to study. New
              Zealand is amazing for their education system. At first, tuition
              fee is some of the lowest in the world. The degrees are recognized
              around the world as being up-to-date and practical. You will get
              high quality hand on education that you deserve. The New Zealand
              even goes so far as to checking each and every course, program and
              certificate for quality so that they can be recognized around the
              world as high-quality education. The support services for
              international students are among the best in the world. They have
              a lot of expertise and experience in helping international
              students so that they can succeed in their programs.
            </p>

            <img
              src={Admisson}
              alt="Image"
              className="h-[300px] mt-10 lg:mt-0 lg:pl-14"
            />
          </div>

          <div>
            <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
              Academic Year
            </h1>

            <p className="text-lg lg:text-2xl text-gray-700 text-wrap mt-6 font-poppins ">
              The New Zealand academic year goes from February to November with
              a long summer break from late November to early February. Most
              universities operate on a two- semester system.
            </p>

            <div className="flex flex-col lg:flex-row justify-between items-start mt-10 gap-10">
              {/* University Programs */}
              <div>
                <h1 className="text-2xl lg:text-4xl tracking-wider font-serif">
                  University programs
                </h1>
                <ul className="list-disc ml-6 text-xl mt-5 space-y-4">
                  <li>Bachelor’s Degrees</li>
                  <li>Graduate and Post-Graduate Diplomas</li>
                  <li>Master’s Degrees</li>
                  <li>Foundation Studies</li>
                </ul>
              </div>

              {/* Polytechnic and Technical Institutes */}
              <div>
                <h1 className="text-2xl lg:text-4xl tracking-wider font-serif">
                  Polytechnic and Technical Institutes
                </h1>
                <ul className="list-disc ml-6 text-xl mt-5 space-y-4">
                  <li>
                    Certificate, diploma, degree and post-graduate courses
                  </li>
                  <li>Vocationally based programs</li>
                  <li>
                    Specific training – e.g. trades, nursing, and journalism
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-10 mt-10">
          {/* Vocational Education Institutes Section */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
              Vocational Education Institutes
            </h1>
            <p className="text-lg lg:text-2xl text-gray-700 mt-6 font-poppins">
              Specific training in areas like Aviation, Hospitality, Travel &
              Tourism, Graphic Design, Diving, Animation / Film, Sky Diving,
              Surfing.
            </p>
            <p className="text-lg lg:text-2xl text-wrap text-gray-700 mt-1 font-poppins">
              This is an amazing opportunity for anyone who looks for adventure.
              In New Zealand, there are literally thousands of things to do.
              There are plenty of mountains for you to explore. You can enjoy
              the beaches throughout the year, and there are always new things
              to do. The scenery is different depending on where you go; you
              could drive an hour and have completely different geography.
            </p>
          </div>

          {/* Work Opportunities Section */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
              Work Opportunities
            </h1>
            <p className="text-lg lg:text-2xl text-wrap text-gray-700 mt-6 font-poppins">
              There are plenty of work opportunities available for international
              students. On a student visa, you are allowed to work up to 20
              hours a week during the semester and up to 40 hours during
              vacations. The international studies office at your university can
              help you find a job to sustain you during your time in New
              Zealand. You can also get a work permit after your degree program
              and work for 12 months under a special "work permit" that is
              alongside your student visa.
            </p>
          </div>
        </div>

        <div className=" mt-14 lg:mt-44">
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
            Student Visa or Permit?
          </h1>
          <div className="flex flex-col lg:flex-row justify-center items-center ">
            <p className="text-lg lg:text-2xl text-gray-700 text-wrap  font-poppins ">
              Everyone who comes to study in NZ from overseas must meet certain
              rules and requirements. If the course you want to study is a
              single short course of less than three calendar months and is
              approved by NZQA, you do not need a student visa and can apply for
              a visitor visa. Whether you need a student visa or a permit is
              decided by the duration of course you choose to study.
            </p>

            <img
              src={VisaLodge}
              alt="Image"
              className="h-[300px] mt-10 lg:mt-0 lg:pl-14"
            />
          </div>
        </div>

        {/* Requirements */}

        <div className="mt-20 ">
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
            Requirements
          </h1>
          <h1 className="text-2xl lg:text-4xl tracking-wider mt-8 lg:mt-10 font-serif ">
            English Language Requirement
          </h1>
          <div className="flex flex-col lg:flex-row justify-center mt-6 items-center ">
            <p className="text-lg lg:text-2xl text-gray-700 text-wrap  font-poppins ">
              You will be required to take IELTS before you are admitted to a NZ
              university. The Next academics believe that students who have
              grown up in an English medium environment may not really need any
              training for the test. Hence, The Next has developed a system by
              which students can assess their ability and be familiar with the
              format of the test prior to taking it. If English is not your
              first language, you will need to provide evidence of your English
              language ability. IELTS 6.0 with no band less than 5.5 for
              undergraduate and 6.5 with no band less than 6.0 for postgraduate
              level of study. A TOEFL paper test score of 550, internet based 80
              for undergraduate and paper test score 575, internet based 90 for
              postgraduate level of study.
            </p>

            <img
              src={EnglishTest}
              alt="Image"
              className="h-[300px] mt-10 lg:mt-0 lg:pl-14"
            />
          </div>
        </div>
        {/* evidence funds and income */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mt-28">
          {/* Evidence of Funds and Income Section */}
          <div className="lg:w-1/2 ">
            <h1 className="text-2xl lg:text-4xl tracking-wider font-serif">
              Evidence of Funds and Income
            </h1>
            <ul className="list-disc ml-6 text-xl mt-5 space-y-4">
              <li>Loan sanction letter</li>
              <li>
                Bank statements/Bank passbooks for past six months, not more
                than one week old
              </li>
              <li>CA statement/summary statement</li>
              <li>Last three years income tax papers of all family members</li>
            </ul>
          </div>

          {/* Cost Requirement Section */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl lg:text-4xl tracking-wider font-serif">
              Cost Requirement
            </h1>
            <p className="text-lg lg:text-2xl text-gray-700 mt-5 font-poppins">
              It depends on the destination, course, and the institution. In
              general, studying in NZ costs around NRs. 13 – 15 lakhs per annum.
              There are few scholarships, so students typically have to be
              self-funded or obtain loans from banks. It is recommended that
              tertiary students budget up to NZ $20,000 per annum for living
              expenses.
            </p>
          </div>
        </div>

        <div className="pb-20 mt-24">
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-6 lg:mt-10 font-serif ">
            How To Apply For A Student Permit Visa To Study In New Zealand?
          </h1>

          <div className="flex flex-col lg:flex-row justify-center mt-6 items-center ">
            <p className="text-lg lg:text-2xl text-gray-700 text-wrap  font-poppins mt-7">
              If you are not already in NZ and are applying to study in New
              Zealand, you must complete the requirements for the issue of a
              student visa. New Zealand Immigration Services (NZIS) New Delhi is
              the agency that is responsible for giving visas to Nepalese
              students who wish to study in NZ. Students need to complete the
              form Student Visa/ Permit Application (INZ1012). The health
              requirements will depend on how long you will be studying in New
              Zealand. A police clearance certificate from your country of
              citizenship or from the country where you have lived for five
              years after you had reached the age of 17 is necessary. You will
              be required to take IELTS before you are admitted to a NZ
              university. (See English Language Requirement) Visa applications
              should be lodged at least two months prior to the course
              commencement date. Click here to contact us!
            </p>

            <img
              src={Departure}
              alt="Image"
              className="h-[300px] mt-10 lg:mt-0 lg:pl-20"
            />
          </div>
          <p className="text-lg font-bold font-poppins mt-5">Good Luck!!</p>
        </div>

        <div className="mb-10">
          {/* Header */}
          <div className="px-4 lg:px-20 w-full bg-gray-100">
            <div className="mt-20 px-4 lg:px-20 py-14">
              <h1 className="text-2xl lg:text-5xl tracking-wider font-serif">
                Frequently Asked Questions (FAQs)
              </h1>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="px-4 lg:px-20 space-y-4 mt-10">
            {data.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 mb-4 cursor-pointer"
                onClick={() => toggleFaqs(index)}
              >
                {/* Question and Icon */}
                <div className="flex justify-between items-center py-4 bg-[#E8E8E8] px-5 rounded-md ">
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
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Newzealand;
