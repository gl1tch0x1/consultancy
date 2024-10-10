import React, { useEffect, useState } from "react";
import EventImage from "../../assets/event-img.jpg";
import { IoTriangle } from "react-icons/io5"; // Import the triangle icon
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Event.css";

const Event = () => {
  const [events, setEvents] = useState([]);

  // Load events from local storage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  const handleButtonClick = (e) => {
    const circle = document.createElement("span");
    const size = Math.max(e.target.clientWidth, e.target.clientHeight);
    const x = e.clientX - e.target.offsetLeft - size / 2;
    const y = e.clientY - e.target.offsetTop - size / 2;
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.classList.add("circle");
    e.target.appendChild(circle);
    setTimeout(() => {
      circle.remove();
    }, 600);
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div id="event" className="event-section bg-gray-300 px-4 py-10 sm:px-6 lg:px-14">
      <header className="flex items-center mt-6 lg:mt-10">
        <div className="w-24 h-1 bg-red-600 ml-6 mr-10"></div>
        <h1 className="uppercase text-gray-900 text-2xl lg:text-3xl font-bold tracking-wide ml-2 transform -translate-x-4">
          Our Event
        </h1>
      </header>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-6 gap-2 lg:gap-6">
          {/* Image Wrapper Container */}
          <div className="relative w-full lg:w-1/2">
            <img
              src={EventImage}
              alt="Event Image"
              className="rounded-lg w-full lg:h-[85%] h-auto object-cover pt-10"
            />

            {/* Shaking "Watch Us" Container */}
            <Link to={"https://vm.tiktok.com/ZSd2JTP2R/"} onClick={handleButtonClick}>
              <div className="absolute bottom-20 right-4 lg:bottom-52 lg:right-1 px-10 py-5 bg-red-700 rounded-lg shadow-lg animate-shake transition-all flex items-center space-x-4 cursor-pointer">
                <span className="flex justify-center items-center w-16 h-16 rounded-full bg-white animate-pulse">
                  <IoTriangle className="text-3xl text-red-800 rotate-90 ml-1" />
                </span>
                <p className="text-white text-xl lg:text-2xl font-poppins font-bold">
                  Watch Us!
                </p>
              </div>
            </Link>
          </div>

          {/* Event Details */}
          <div className="flex flex-col w-full lg:w-1/2 mb-6">
            <div className="flex flex-col leading-8 lg:leading-10 tracking-wider mb-9 lg:mt-5">  
              <h1 className="text-gray-900 text-center lg:text-left text-3xl lg:text-5xl font-poppins font-extrabold mt-5 lg:mt-7">
                Join Our Upcoming Events
              </h1>
            </div>

            {/* Event Boxes */}
            <div className="space-y-6 lg:space-y-7">
              {events.map((event) => (
                <div
                  key={event.id} // Ensure 'id' exists in your event objects
                  className="grid lg:grid-cols-[auto_1fr] grid-cols-1 shadow-xl bg-gray-200 p-5 lg:p-6 rounded-lg group hover:border-s-4 hover:border-e-4 border-transparent hover:border-red-600 transition-all"
                >
                  {/* Date Section */}
                  <div className="mr-8 ml-5 text-blue-700 flex justify-start items-center">
                    <div className="text-center">
                      <span className="block text-5xl lg:text-6xl font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                      <span className="block text-lg lg:text-xl">
                        {`${new Date(event.date).toLocaleString('default', { month: 'long' })} ${new Date(event.date).getFullYear()}`}
                      </span>
                    </div>
                  </div>

                  {/* Vertical Line Between Date and Right Section */}
                  <div className="relative">
                    <div className="absolute left-0 h-full border-l-2 border-gray-400"></div>

                    {/* Right Side: Time, Location, and Title */}
                    <div className="pl-4">
                      <div className="flex items-center gap-4">
                        <div className="text-lg font-poppins text-gray-700">
                          <span>{event.time} - {event.toTime}</span> {/* Display To Time */}
                        </div>

                        {/* Vertical Line Between Time and Location */}
                        <div className="h-5 border-l-2 border-gray-500"></div>

                        <div className="text-lg text-gray-700">
                          <span className="font-poppins">{event.location}</span>
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <p className="text-lg lg:text-2xl font-poppins font-semibold tracking-wide text-gray-900 group-hover:text-orange-700 transition-all">
                          {event.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
