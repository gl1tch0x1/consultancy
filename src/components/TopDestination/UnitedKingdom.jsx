import React, { useState } from "react";
import CollegeHmt from "../../assets/TopDestination/hammerton-college.jpg";
import Degree from "../../assets/TopDestination/degree-2.webp";
import VisaApp from "../../assets/TopDestination/visa-application.webp";
import FAQAccordion from "./Faqs";
import { FaPlus, FaMinus } from "react-icons/fa";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const UnitedKingdom = () => {
  const data = [
    {
      question: " How much does it cost to study in UK?",
      answer:
        "The cost of studying in the UK can vary depending on a number of factors, including the type of institution you attend and the program you choose to study. In general, however, you can expect to pay between £10,000 and £30,000 per year for tuition, and you will also need to budget for living expenses, such as accommodation and food.",
    },
    {
      question: " Is the study gap acceptable in UK?",
      answer:
        "If you are an undergraduate and want to pursue your graduation in the UK, you can take a gap of up to 2 years, and postgraduate students can take a gap of up to 5 years. Some universities in the United Kingdom, however, provide courses or programs to students with an eight-year gap. As a result, you will have no trouble obtaining a student visa after an 8-year gap.",
    },
    {
      question: " Are scholarships available for international students in UK?",
      answer:
        "Yes, there are scholarships available for international students studying in the UK. Many UK institutions offer scholarships specifically for international students, and there are also several organizations that provide funding for international students. Some scholarships are merit-based, while others are need-based or offer funding for students in specific fields of study. It's a good idea to research the specific program you are interested in and contact the institution directly to inquire about scholarship opportunities. Keep in mind that competition for scholarships can be fierce, so it's important to start your search early and carefully review the eligibility criteria and application requirements.",
    },
    {
      question:
        " What are the English language requirements to study in the UK?",
      answer:
        "To study in the UK, you must have the required English language proficiency score. Different courses require various test scores. Suppose you want to pursue a bachelor's degree. A minimum IELTS score of 6.0 is required, with no band lower than 5.5. If a student takes the PTE exam, he or she must obtain 54 points, with a minimum of 51 in each component.",
    },
    {
      question: " How much can I earn in the UK as an international student?",
      answer:
        "As an international student in the UK, you are allowed to work part-time during your studies. The amount you can earn will depend on a number of factors, including the type of work you do and the number of hours you work. In general, however, you can expect to earn between £8 and £10 per hour.",
    },
    {
      question: " Is student life easy in UK?",
      answer:
        "Student life in the United Kingdom may be both rewarding and challenging. The UK, like any other country, has its own culture and way of life, so adjusting to living and studying there may take some time. However, the UK has a strong foreign student community, and many colleges provide assistance to students as they adjust to the country's lifestyle.",
    },
    {
      question: " Which part-time job is best for students in UK?",
      answer:
        "There are many different part-time jobs that are well suited for students in the UK. Some popular options include working in retail or hospitality, tutoring,hotel receptionist, barista, prep cook and many more.",
    },
    {
      question: " Can I live in UK after study?",
      answer:
        "Yes, you may be able to remain in the UK after your studies if you meet certain requirements. If you are an international student who has completed a degree at a UK university, you may be eligible to apply for a visa that will allow you to work in the UK for a certain period of time. This visa is known as the Tier 2 (General) visa. To be eligible, you will need to have a job offer from a UK employer and meet certain other requirements.",
    },
    {
      question: " How much bank balance is required for a UK Student visa?",
      answer:
        "You’ll need either £1,334 per month (for up to 9 months) for courses in London and £1,023 per month (for up to 9 months) for courses outside London.",
    },
  ];

  const [faqToggle, setFaqToggle] = useState(null);

  const toggleFaqs = (index) => {
    setFaqToggle(faqToggle === index ? null : index);
  };

  return (
    <div>
      {/* banner Image Section */}
      <div></div>
 {/* Register button */}
 <Link to={"/contact"}>
          <div className="fixed sm:hidden bg-[#050E38] right-0 rotate-90 rounded-md shadow-2xl">
            <p className="text-2xl px-6 py-3 text-white font-serif">
              Register Here
            </p>
          </div>
        </Link>
      <div className="container px-4 my-44 lg:px-24">
        <div className="mt-10 lg:mt-20">
          <h1 className="text-2xl lg:text-5xl tracking-wider font-serif mb-8 lg:mb-14">
            Why Study in the UK from Nepal?
          </h1>

          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
            {/* Text Section */}
            <div className="flex-1">
              <p className="text-lg lg:text-2xl text-gray-700 font-poppins leading-relaxed">
                The United Kingdom is renowned for its quality of education.
                Many universities, established as early as the 12th century,
                have become leaders in the global education world, offering a
                rich legacy of learning. If you intend to study in the UK,
                you're in for a unique experience. Whether it's the hustle and
                bustle of London or the charming countryside of West England,
                you will fall in love with the UK and its people. <br />
                <br />
                With a long history of academic excellence, it’s no wonder that
                the UK hosts one of the largest international student
                populations in the world. Whatever your interests, there’s a
                huge range of clubs, societies, and a vibrant social life to
                enjoy while studying.
              </p>
            </div>

            {/* Image Section */}
            <div className="flex-1">
              <img
                src={CollegeHmt}
                alt="UK College"
                className="w-full h-auto object-cover shadow-lg rounded-lg"
              />
            </div>
          </div>
          <ul className="mt-24 lg:text-xl text-gray-800 list-disc ml-6 space-y-3">
            <li>
              Plenty of course choices: Choose from over 50,000 courses in more
              than 25 subject areas.
            </li>
            <li>
              UK courses are generally shorter than other countries, helping
              reduce overall tuition and accommodation costs.
            </li>
            <li>It may be possible to work while you study too.</li>
          </ul>

          <h2 className="mt-8 text-xl lg:text-2xl font-semibold text-gray-900">
            Stick around till the end to find out everything you need to know as
            a Nepali student planning for higher education in the UK.
          </h2>
        </div>

        {/* types of student visas */}

        <div className="mt-20">
          <h1 className="text-2xl lg:text-5xl tracking-wider font-serif mb-8">
            Different types of Student Visas to study in the UK
          </h1>
          <div className="mt-4">
            <span className="text-lg lg:text-2xl text-gray-700 text-wrap mt-44 font-poppins">
              <span className="font-bold mr-2">A Standard Visitor visa</span>
              lets you do a short course of study that lasts no longer than 6
              months.
            </span>
          </div>
          <div className="mt-4">
            <span className="text-lg lg:text-2xl text-gray-700 text-wrap mt-44 font-poppins">
              <span className="font-bold mr-2">A Short-term study visa</span>
              lets you come to the UK to study an English language course that
              is over 6 months and up to 11 months.
            </span>
          </div>

          <div className="mt-4">
            <span className="text-lg lg:text-2xl text-gray-700 text-wrap mt-44 font-poppins">
              <span className="font-bold mr-2">A Student visa</span>
              is usually for a longer course. You must be sponsored by a
              licensed college or university and have a confirmed place. You may
              be able to do some work on this visa.
            </span>
          </div>

          <div className="mt-4">
            <span className="text-lg lg:text-2xl text-gray-700 text-wrap mt-44 font-poppins">
              <span className="font-bold mr-2">A Child Student visa</span>
              is for 4 to 17-year-olds who want to study at an independent
              school. If you’re 16 or over, you can do
            </span>
          </div>
        </div>

        {/* quality of education */}

        <div>
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-16 font-serif mb-8">
            Quality of Education in the United Kingdom
          </h1>
          <p className="text-lg lg:text-2xl text-gray-700 text-wrap font-poppins italic mt-10">
            The UK is one of the world’s most popular destinations to study
            higher education, with more than 500,000 international students
            enrolling each year.
          </p>
          <div className="flex flex-col lg:flex-row justify-center mt-6 items-center ">
            <ul className="list-disc text-2xl text-gray-700 ml-6 space-y-4 mt-4">
              <li>
                One of the world’s leading destinations for international
                students, second only to the USA. UK universities are among the
                best in the world and consistently perform well in world
                rankings. They also have a reputation for world-class research.
              </li>
              <li>
                UK higher education degrees and qualifications are recognized by
                employers and academics worldwide.
              </li>
              <li>
                Students get the opportunity to develop the skills, knowledge,
                critical thinking, and connections to drive forward their
                careers.
              </li>
              <li>
                High-quality postgraduate study opportunities are also available
                at the majority of UK universities, with some universities
                offering sponsorship to extend Tier 4 visas.
              </li>
            </ul>

            <img
              src={Degree}
              alt="Image"
              className="h-[300px] mt-10 lg:mt-0 lg:pl-20"
            />
          </div>
        </div>

        {/* steps to follow for visa */}

        <div>
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-16 font-serif mb-8">
            Steps to follow before applying for a visa.
          </h1>

          <ul className="list-disc text-2xl text-gray-700 ml-6 space-y-4 mt-4">
            <li>
              Take a standardized English Proficiency Test like IELTS or TOEFL.
            </li>
            <li>
              Do your research and apply for admission to the university you
              wish to study in.
            </li>
            <li>
              After receiving the admission letter, you have to pay a year’s
              tuition (in most cases).{" "}
            </li>
            <li>
              Prepare financial documents that show you have enough financial
              support to pay for your tuition and cover living expenses.
            </li>
            <li>
              Take medical tests as you have to show the results while applying
              for a visa.
            </li>
            <li>
              After you have all these documents in place including your
              academic certificates, you can apply for a Student Visa.
            </li>
            <li>Prepare for your stay</li>
            <li>Study in the UK</li>
          </ul>
        </div>

        <div className="mt-20">
          <h1 className="text-2xl lg:text-5xl tracking-wider mt-16 font-serif mb-8">
            Academic and English Language Proficiency Requirement
          </h1>

          {/* Undergraduate & Financial Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start mt-14">
            {/* Undergraduate */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                Undergraduate: 3-4 years
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 font-poppins leading-relaxed">
                IELTS: 6 / 5.5 | Percentage: 55-60 % above | Gap: 1-2 years{" "}
                <br />
                <span className="text-gray-500">(Evidence is required.)</span>
              </p>
            </div>

            {/* Financial (average) */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                Financial (average)
              </h2>
              <ul className="text-lg lg:text-xl text-gray-700 leading-relaxed space-y-4">
                <li>Tuition fee: £12,000 - £18,000 per year</li>
                <li>
                  Living cost: Inner London – £11,385 | Outer London – £9,135
                </li>
                <li>
                  Dependent: Inner London – £7,605 | Outer London – £6,120
                </li>
                <li>Immigration Health Surcharge (IHS): £300 per year</li>
              </ul>
            </div>
          </div>

          {/* Graduate & Cost Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start mt-12">
            {/* Graduate */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                Graduate: 1-2 years
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                IELTS: 6.5 / 6 | Percentage: 60% above | Gap: 4-5 years <br />
                <span className="text-gray-500">(Evidence is required.)</span>
              </p>
            </div>

            {/* Average Total Cost */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                Average Total Cost
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                Single: £25,000 - £30,000
              </p>
              <p className="text-lg lg:text-xl mt-4  text-gray-700 leading-relaxed font-poppins">
                With Dependent: £30,000 - £35,000
              </p>
            </div>
          </div>

          {/* English Language & Intake Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 items-start mt-12">
            {/* English Language */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                English Language
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                IELTS & PTE
              </p>
            </div>

            {/* Intake in the UK */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-6">
                Intake in the UK
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-poppins">
                September | January | May | June
              </p>
            </div>
          </div>
        </div>

        {/* Method of financials presentation. */}

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between gap-20 items-start mt-10">
            {/* Bank Details */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl tracking-wider font-serif mb-8">
                Method of Financials Presentation
              </h1>
              <div className="space-y-8">
                {/* Bank Balance */}
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
                    Bank Balance
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Bank loan (should be in student's name). Bank balance + Bank
                    loan.
                    <br />
                    (Tuition fees should be paid by bank loan.)
                  </p>
                </div>

                {/* Bank Info */}
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
                    Banks
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    8 multinational banks. 28 A levels of banks.
                  </p>
                </div>

                {/* 28 Days Bank Statement */}
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
                    28 Days Bank Statement
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    Funds must be held for at least 28 consecutive days in a
                    bank account older than 31 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Financial Planning */}
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl tracking-wider font-serif mb-8">
                Next Year’s Financial Planning
              </h2>

              <div className="space-y-8">
                {/* Single Applicant */}
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
                    Annual Income / Single Applicant
                  </h3>
                  <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                    NRS 25–30 lakhs and above
                  </p>
                </div>

                {/* With Dependent */}
                <div>
                  <h3 className="text-xl lg:text-2xl text-gray-800 font-semibold mb-2">
                    With Dependent
                  </h3>
                  <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 leading-relaxed space-y-2">
                    <li>NRS 35–40 lakhs and above</li>
                    <li>Required evidence of financial support</li>
                    <li>First blood relative (1-4) can sponsor</li>
                    <li>
                      Income sources: Business, Salary, Foreign income, Land
                      lease, House rent
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* apply for uk visa */}

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                Apply for a UK Student Visa
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Planning to study in the UK? You’ll need a student visa. There
                are several types of student visas, depending on your course and
                how long you plan to stay. Most students enrolling in an
                undergraduate program will need a General Student Visa.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-4">
                If you’re taking a short-term course or a language program, a
                different visa type may apply. Key factors that determine which
                visa you’ll need:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>Your country of residence</li>
                <li>The purpose of your visit to the UK</li>
                <li>How long you plan to stay</li>
                <li>Your qualifications and personal circumstances</li>
              </ul>
            </div>

            {/* Circular Image */}
            <div className="flex-shrink-0 mt-10 lg:mt-0 lg:ml-8">
              <img
                src={VisaApp} // Make sure VisaApp is properly imported or defined
                alt="UK Visa"
                className="hidden lg:flex"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                Working While Studying
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Most Tier 4 Nepali students are permitted to work up to 20 hours
                per week during term time and full-time during vacations if they
                are enrolled in a course at Level 6 or higher. If you are
                studying a course below degree level at a Higher Education
                Institution (HEI), you can work up to 10 hours per week.
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mt-4">
                However, students studying at a Further Education College below
                Level 6 are not allowed to work in the UK.
              </p>

              <h2 className="text-2xl lg:text-3xl font-serif tracking-wide mt-8 mb-4">
                Specific Guidance for Tier 4 Students
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                To meet the UK government’s immigration rules, Tier 4 students
                must achieve a total of 40 points:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>
                  30 points from the Confirmation of Acceptance for Studies
                  (CAS) letter
                </li>
                <li>10 points from providing acceptable financial documents</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                Applying for an Offer Letter
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                To apply for an offer letter, students need to submit the
                following documents:
              </p>

              {/* Requirements List */}
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>
                  Completed Application Form with two references (Academic and
                  Professional)
                </li>
                <li>
                  Academic Transcript: Current transcript of subjects and
                  grades. If still studying, provide a current transcript.
                </li>
                <li>
                  Certificates: Degree or highest qualification certificate
                  (minimum 60% marks required). Undergraduate: maximum 2-year
                  gap; PG/Master: 4-5 years gap.
                </li>
                <li>Proof of English proficiency (IELTS or PTE only)</li>
                <li>Copy of Passport</li>
                <li>
                  CV or Statement of Purpose (SOP) - for university applications
                  only
                </li>
                <li>Personal Statement</li>
              </ul>

              {/* Personal Statement Guidelines */}
              <h2 className="text-2xl lg:text-3xl font-serif tracking-wide mt-10 mb-4">
                Personal Statement Guidelines
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                When preparing your personal statement, consider including:
              </p>
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>Your reasons for applying for the course</li>
                <li>Your motivation for choosing the University of (Name)</li>
                <li>Why you want to study at a UK university</li>
                <li>Your career goals and how the course aligns with them</li>
                <li>Work experience (if you have any gap years)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                CAS Letter Requirements
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                To obtain a CAS (Confirmation of Acceptance for Studies) letter,
                students need to submit the following documents:
              </p>

              {/* Requirements List */}
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>
                  Financial Statement (28-day bank statement) - Loan and cash
                  deposit allowed
                </li>
                <li>NOC letter from the Ministry of Education (MOE)</li>
                <li>Payment for the CAS letter</li>
                <li>
                  Immigration history evidence (including any visa refusals or
                  previous Tier 4 visa held)
                </li>
                <li>ATAS Certificate (for certain courses only)</li>
                <li>
                  Disclosure and Barring Service (DBS) check (for certain
                  courses only)
                </li>
                <li>Research proposal (for research programs)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                List of Necessary Documents for UK Visa
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Below is the list of necessary documents you’ll need for your UK
                visa application:
              </p>

              {/* Requirements List */}
              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <li>
                  IHS Surcharge (Pay before visa application and get reference
                  number)
                </li>
                <li>Visa Application Form (Online)</li>
                <li>Passport</li>
                <li>Academic Certificates</li>
                <li>English Language Proficiency Certificate</li>
                <li>CAS Letter (Valid for 6 months, can be used only once)</li>
                <li>Sponsorship Letter</li>
                <li>Consent Letter (For ages 16-17)</li>
                <li>
                  Birth Certificate (Compulsory if using Father’s/Mother’s bank
                  statement)
                </li>
                <li>Relationship Certificate (Optional)</li>
                <li>Income Statement (Optional)</li>
                <li>Property Valuation (Optional)</li>
                <li>Police Report (Optional)</li>
                <li>CA Report (Optional)</li>
                <li>
                  Other Certificates (Example: Work Experience, Other
                  Achievements)
                </li>
                <li>
                  Bank Balance Certificate (If using overseas currency, must
                  show in writing on application form and closing balance in
                  pound sterling)
                </li>
                <li>
                  Bank Statement (28 days, in the name of the applicant or ONLY
                  father/mother - saving or current account)
                </li>
                <li>Bank Loan (Education loan only in the student’s name)</li>
                <li>
                  TB Screening (IOM Migration Health Assessment Centre, Thirbam
                  Sadak Baluwatar)
                </li>
                <li>
                  Visa Fees (Approx. £348 per person, including dependents –
                  subject to change)
                </li>
                <li>Accommodation Letter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Text Section */}
            <div className="flex-1">
              <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
                Additional Information
              </h1>

              {/* Additional Information List */}
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-2">
                Skype interview (Compulsory from the high commission)
              </p>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Phone interview (Conducted by institutions)
              </p>

              <ul className="list-disc list-inside text-lg lg:text-xl text-gray-700 mt-4 space-y-2">
                <strong>Dependent:</strong>
                <ul className="list-disc list-inside ml-5 space-y-2">
                  <li>
                    If you are studying a postgraduate course of 12 months or
                    longer at a higher education institution
                  </li>
                  <li>
                    If you are a government-sponsored student on a course of six
                    months or longer
                  </li>
                  <li>Married cases are accepted (Should be genuine)</li>
                  <li>No qualification is required for dependents</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <FAQAccordion />
        </div>

        <div className=" mt-24 rounded-lg mb-10">
          <h1 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Scholarships in the UK
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            The United Kingdom has one of the best higher education systems in
            the world. There are financial aids available to ease the financial
            burden of international students. So, if you have good grades and
            think you deserve to study in the UK with a scholarship, take a look
            at these scholarships provided by the UK government.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Chevening Scholarship
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This scholarship is provided to students with extraordinary academic
            achievements and also leadership skills. The recipients of the
            scholarships are selected by British Embassies all around the world.
            The recipients will receive financial aid to study for a one-year
            Master’s degree at any leading UK university of their choice. More
            than 1500 students receive this scholarship around the world each
            year.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Erasmus Mundus Scholarship
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This is a highly reputed scholarship. The acceptance rate is less
            than 5% which makes it highly competitive. The recipient gets
            €31,000 per year for two years.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Commonwealth Split-site PhD. Scholarships
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This is a full funding scholarship given to international students
            by the government of the United Kingdom. The tuition fee of the
            recipient is covered and they are given allowances + air travel
            expenses.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Ministry of Defense Competition for High-Resolution Imaging
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This is a partial funding scholarship for international students.
            The award is £500,000. It can be taken at various institutions
            across the globe.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            IPBA Scholarship
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            It is a partial funding international scholarship. It is offered by
            the Inter-Pacific Bar Association. Citizens of Laos, Cambodia,
            Myanmar, Mongolia, Bangladesh, and the Pacific Islands are eligible
            to apply for this scholarship.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            Rhodes Trust Scholarships
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This is a prestigious scholarship provided by the University of
            Oxford. The value of this award is the full tuition fee and
            allowance of £15,900. 95 of these awards are offered to students
            from over 64 countries.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            University of Bradford Global Development Scholarships
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            The recipients of this scholarship will get their full tuition fees
            paid and receive an allowance for accommodation. Students with
            financial hardships from the developing country are offered this
            financial aid. This is available for students intending to enrol in
            a Master’s degree expect MBA at the University of Bradford.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            University of London Varadi Distance Learning Scholarship
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This scholarship is offered to applicants with outstanding academic
            results and leadership abilities. The full tuition fee of studying
            at the University of London is covered. Students from anywhere in
            the world can apply for this scholarship.
          </p>

          <h2 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
            International Excellence Scholarship in the UK
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 text-wrap  font-poppins mt-3">
            This scholarship is offered by the University of Roehampton to
            international students. This award is worth up to £4,000 per year.
            Students with great results in postgraduate and Bachelors can get
            this scholarship.
          </p>
        </div>

        {/* student stay in uk */}

        <div className="flex flex-col lg:flex-row justify-between items-start gap-14 px-4 lg:px-10">
          {/* How long can a student study in the UK? */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
              How long can a student study in the UK?
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 mt-3 font-poppins leading-relaxed">
              There is a maximum time limit (‘cap’) on studying with a Tier 4
              visa. Before they can issue you a Confirmation of Acceptance for
              Studies, a Tier 4 sponsor will need to check that your application
              will not take you over the maximum time allowed. The Home Office
              will not grant further leave to someone whose current Tier 4
              application means they will exceed these time limits unless there
              are “compelling and compassionate circumstances,” such as injury
              or disability.
            </p>
            <ul className="list-disc text-lg lg:text-xl font-poppins mt-4 ml-6 space-y-2">
              <li>
                Students below Degree level can study for a maximum of 2 years
              </li>
              <li>
                Students at a degree level and above can study for a maximum of
                5 years (excluding some engineering and medical courses)
              </li>
            </ul>
            <h2 className="text-2xl font-semibold tracking-wider mt-6 lg:mt-10 font-serif">
              You can arrive in the UK before your course starts:
            </h2>
            <ul className="list-disc text-lg lg:text-xl font-poppins mt-4 ml-6 space-y-2">
              <li>Up to 1 week before if your course lasts 6 months or less</li>
              <li>
                Up to 1 month before if your course lasts more than 6 months;
                all documents should be in English and original
              </li>
            </ul>
          </div>

          {/* After study in the UK */}
          <div className="flex-1">
            <h1 className="text-2xl lg:text-4xl tracking-wider mt-6 lg:mt-10 font-serif">
              After study in the UK
            </h1>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold tracking-wider font-serif">
                Graduate Route
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mt-3 font-poppins leading-relaxed">
                After completing study at undergraduate level 6 or above, you
                can apply.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold tracking-wider font-serif">
                Tier 2 Work Visa
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mt-4 font-poppins leading-relaxed">
                Secure a graduate-level job within four months of completing
                your course, which pays £20,000 or more, to stay for a further 3
                years with the option to extend.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold tracking-wider font-serif">
                Doctorate Extension Scheme
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mt-4 font-poppins leading-relaxed">
                Allows completing students to stay for 12 months to gain work
                experience or set up as an entrepreneur.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold tracking-wider font-serif">
                Start-up/Innovator
              </h2>
              <p className="text-lg lg:text-xl text-gray-700 mt-4 font-poppins italic leading-relaxed">
                If you have a business idea and endorsement, you could switch to
                the start-up route.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}

        <div>
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
            {data.map((items, index) => (
              <div
                key={index}
                className="border-b border-gray-300 pb-4 mb-4 cursor-pointer"
                onClick={() => toggleFaqs(index)}
              >
                {/* Question and Icon */}
                <div className="flex justify-between items-center py-4 bg-[#E8E8E8] px-5 rounded-md ">
                  <h2 className="text-xl lg:text-2xl font-semibold">
                    {items.question}
                  </h2>
                  {faqToggle === index ? (
                    <FaMinus className="text-xl lg:text-2xl text-gray-600 transition-all duration-500" />
                  ) : (
                    <FaPlus className="text-xl lg:text-2xl text-gray-600 transition-all duration-500" />
                  )}
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    faqToggle === index
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="mt-4 text-lg text-gray-700 px-5">
                    {items.answer}
                  </p>
                </div>
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

export default UnitedKingdom;
