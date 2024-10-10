import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");
  const navigate = useNavigate();

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      handleActiveItem(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-transparent absolute w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div>
            <img src={Logo} alt="Logo" className="w-53 h-74" style={{ marginLeft: '-2cm' }} />
          </div>


          {/* Hamburger Menu */}
          <div className="block lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* NavLinks for larger screens */}
          <div className="hidden lg:flex font-poppins space-x-9">
            {["home", "about", "courses", "team"].map((item) => (
              <Link
                key={item}
                to={`/${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item);
                }}
                className={`relative text-gray-600 hover:text-orange-500 ${activeItem === item ? "text-orange-500" : ""
                  }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transition-all duration-300 ${activeItem === item ? "scale-x-100" : "scale-x-0"
                    }`}
                />
              </Link>
            ))}
            {/* Direct link to contact page */}
            <Link
              to="/contact"
              onClick={() => handleActiveItem("contact")}
              className={`relative text-gray-600 hover:text-orange-500 ${activeItem === "contact" ? "text-orange-500" : ""
                }`}
            >
              Contact
              <span
                className={`absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 transition-all duration-300 ${activeItem === "contact" ? "scale-x-100" : "scale-x-0"
                  }`}
              />
            </Link>
          </div>

          {/* Join Us Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="w-28 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-black font-semibold text-lg uppercase hover:bg-orange-700 transition duration-300"
            >
              Join Us
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="w-full lg:hidden mt-4">
            <div className="flex flex-col items-center space-y-3">
              {["home", "about", "courses", "team"].map((item) => (
                <Link
                  key={item}
                  to={`#${item}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                  className="text-gray-200 text-xl hover:text-orange-500 cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
              {/* Direct link to contact page in mobile menu */}
              <Link
                to="/contact"
                onClick={() => {
                  setIsOpen(false); // Close the mobile menu
                  handleActiveItem("contact");
                }}
                className="text-gray-200 text-xl hover:text-orange-500 cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
