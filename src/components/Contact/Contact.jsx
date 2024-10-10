import React, { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., email, database)
    console.log("Form submitted:", formData);
  };

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <header className="bg-gray-900 text-white py-6 flex justify-between items-center px-4">
        <h1 className="text-4xl font-bold flex-grow text-center ml-32">
          Contact Us
        </h1>
        <Link
          to="/"
          className="bg-[#FFA500] text-white text-center px-4 py-3 rounded-md hover:bg-[#2E4C6D] transition-colors h-12"
        >
          Back to Home
        </Link>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          We are here to help you. Reach out to us via any of the following
          methods.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          <div className="p-4 shadow-lg rounded-lg bg-[#2E4C6D] hover:bg-[#FFA500] transition-colors">
            <h3 className="text-xl font-bold text-white">Call Us</h3>
            <p className="text-white mt-2">+977 1 4437975, 9843161346</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#2E4C6D] hover:bg-[#FFA500] transition-colors">
            <h3 className="text-xl font-bold text-white">Email Us</h3>
            <p className="text-white mt-2">kathmandu@felixeastern.info</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-[#2E4C6D] hover:bg-[#FFA500] transition-colors">
            <h3 className="text-xl font-bold text-white">Visit Us</h3>
            <p className="text-white mt-2">
              1st Floor HBL Building Madan Bhandari Path New Baneshwor,
              Kathmandu-31
            </p>
          </div>
        </div>
      </section>

      <div className="text-center">
        <Link to={"/"}>
        <p className="text-gray-700 font-semibold">Home</p>
        </Link>
      </div>

      <section className="bg-gray-100 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto mt-8 space-y-8"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          {/* Phone Number Input */}
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-bold">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-lg hover:bg-orange-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      <section id="faq" className="text-center pt-16 pb-4 px-4">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">
              What are your operating hours?
            </h3>
            <p className="mt-2 text-gray-700">
              We operate from 9 AM to 5 PM, Sunday to Friday.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              How can I book an appointment?
            </h3>
            <p className="mt-2 text-gray-700">
              You can book an appointment through our website or by calling our
              office.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              Do you offer visa counseling services?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes, we offer visa counseling services.
            </p>
          </div>
        </div>
      </section>

      <footer>
        <div className="bg-gray-800 text-center text-sm text-gray-400 font-poppins py-4 mt-10">
          <p>
            &copy; 2024{" "}
            <span
              className="text-orange-500 cursor-pointer hover:text-blue-500 transition duration-300"
              onClick={scrollToTop}
            >
              Felix Education
            </span>
            . Developed by Solarius Technologies Pvt.Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
