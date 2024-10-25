import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Ensure you have these icons imported

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "1/5th of the best universities in the world are in the UK.",
      answer: (
        <div>
          Some of the best universities in the world are in the UK. The University of Cambridge, The University of Oxford, and many other universities have been pioneering education for centuries. These universities often appear in the QS World University Rankings. One-fifth of the top 50 universities in the QS rankings are in the UK. Here are some of the best universities in the UK:
          <ul className="list-disc list-inside mt-2">
            <li>University of Oxford (Ranked 5th by QS)</li>
            <li>University of Cambridge (Ranked 6th by QS)</li>
            <li>Imperial College London (Ranked 8th by QS)</li>
            <li>UCL (Ranked 10th by QS)</li>
            <li>University of Edinburgh (Ranked 18th by QS)</li>
          </ul>
          Students can choose to study a wide range of courses in disciplines from fashion to physics. Professors teaching in UK universities are considered to be among the best globally, and the British education system is renowned for its quality.
        </div>
      ),
    },
    {
      question: "Half a million International Students.",
      answer: (
        <div>
          The UK has seen a huge surge in the international student population in recent years. There were around 485,645 international students in the UK in 2019. With half a million international students, you will not be alone in your journey. A vast number of international students from diverse cultures are studying in various parts of the country, allowing you to connect with like-minded individuals from different backgrounds.
        </div>
      ),
    },
    {
      question: "Diverse Culture and rich history.",
      answer: (
        <div>
          The United Kingdom is one of the oldest nations in the world. Students from all kinds of cultures contribute to a unique experience. The people are warm and welcoming, making you feel right at home. Many student communities provide a supportive environment for new students.
        </div>
      ),
    },
    {
      question: "Attractive employment opportunities.",
      answer: (
        <div>
          Career prospects are an important aspect of education. As an international student from Nepal, you may need to work to support your studies. The UK has a minimum wage policy, ensuring you earn at least £118.00 (excluding tax) per week to help fund your studies and living costs. The UK government allows international students to work for up to 20 hours a week.
        </div>
      ),
    },
    {
      question: "Graduate employability score of Universities in the UK:",
      answer: (
        <div>
          The employability scores for some top universities are as follows:
          <ul className="list-disc list-inside mt-2">
            <li>University of Cambridge: 67.7</li>
            <li>University of Oxford: 66.7</li>
            <li>Imperial College of London: 64.6</li>
            <li>University College of London: 65.6</li>
            <li>University of Manchester: 65.3</li>
            <li>University of Bristol: 64.8</li>
          </ul>
        </div>
      ),
    },
    {
      question: "The UK is the cheapest among the Top 3 big student destinations.",
      answer: (
        <div>
          Among Australia, the USA, and the UK, the UK is the most affordable in terms of tuition fees. The average tuition fee is £10,000, which is £2,000 less than that of the US and £3,000 less than Australia. Additionally, the financial documentation required for a UK student visa is less extensive.
        </div>
      ),
    },
    {
      question: "Free health care for international students.",
      answer: (
        <div>
          If you plan to study in the UK for more than 6 months, the National Health Service (NHS) provides healthcare for free. In case of health emergencies, you won't have to worry about finances. However, medicines are not free; NHS caps the maximum amount students pay for medicine at £8.60, regardless of the actual cost.
        </div>
      ),
    },
    {
      question: "Degrees are shorter in the UK.",
      answer: (
        <div>
          In Nepal, most undergraduate programs last 4 years or longer. In contrast, most undergraduate degrees in the UK are typically 3 years long, with master's degrees averaging 1 year. Two-year degrees are also popular. Shorter degrees can lead to savings on tuition and living expenses.
        </div>
      ),
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-20">
      <h1 className="text-2xl lg:text-4xl font-serif tracking-wide mb-6">
        Why should you study in the UK?
      </h1>
      <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
        Here are some reasons why you should study in the United Kingdom:
      </p>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded">
          <div
            className="w-full text-left px-4 py-4 flex justify-between items-center cursor-pointer   font-semibold bg-gray-200 rounded"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            {activeIndex === index ? (
              <FaMinus className="text-xl lg:text-2xl text-gray-600 inline ml-2" />
            ) : (
              <FaPlus className="text-xl lg:text-2xl text-gray-600 inline ml-2" />
            )}
          </div>
          {activeIndex === index && (
            <div className="p-4 bg-gray-100">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
