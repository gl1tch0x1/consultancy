import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [location, setLocation] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [notification, setNotification] = useState(null);
  const [notificationType, setNotificationType] = useState("");
  const [adImage, setAdImage] = useState(localStorage.getItem("adImage") || "");
  const [showAdModal, setShowAdModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  const saveEvents = (newEvents) => {
    localStorage.setItem("events", JSON.stringify(newEvents));
    setEvents(newEvents);
  };

  const notifyAdmin = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null);
      setNotificationType("");
    }, 3000);
  };

  const isValidDateTime = () => {
    const now = new Date();
    const selectedDateTime = new Date(`${date}T${time}`);
    return selectedDateTime >= now;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Date.parse(date) || !isValidDateTime()) {
      alert("Please enter a valid future date and time.");
      return;
    }

    const newEvent = { title, date, time, toTime, location };

    if (editIndex !== null) {
      const updatedEvents = events.map((event, index) =>
        index === editIndex ? newEvent : event
      );
      saveEvents(updatedEvents);
      notifyAdmin("Event updated successfully!", "edit");
    } else {
      if (events.length >= 3) {
        notifyAdmin(
          "Sorry, couldn't create the event. Try deleting one event.",
          "warning"
        );
        return;
      }
      saveEvents([...events, newEvent]);
      notifyAdmin("Event created successfully!", "success");
    }

    setTitle("");
    setDate("");
    setTime("");
    setToTime("");
    setLocation("");
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setTitle(eventToEdit.title);
    setDate(eventToEdit.date);
    setTime(eventToEdit.time);
    setToTime(eventToEdit.toTime);
    setLocation(eventToEdit.location);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    saveEvents(updatedEvents);
    notifyAdmin("Event deleted successfully!", "warning");
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    navigate("/adminLogin");
  };

  const getNotificationColor = () => {
    switch (notificationType) {
      case "success":
        return "bg-green-100 border-green-500 text-green-700";
      case "edit":
        return "bg-yellow-100 border-yellow-500 text-yellow-700";
      case "warning":
        return "bg-red-100 border-red-500 text-red-700";
      default:
        return "";
    }
  };

  const handleAdImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdImage(reader.result);
        localStorage.setItem("adImage", reader.result);
        notifyAdmin("Advertisement image uploaded successfully!", "success");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteAdImage = () => {
    setAdImage("");
    localStorage.removeItem("adImage");
    notifyAdmin("Advertisement image deleted successfully!", "warning");
  };

  return (
    <div className="admin-section p-6 md:p-10 lg:p-12 bg-gradient-to-r from-teal-100 via-blue-100 to-purple-100 min-h-screen relative">
      {adImage && (
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <img
            src={adImage}
            alt="Advertisement"
            className="max-w-full max-h-full object-contain opacity-40"
          />
        </div>
      )}

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">
          Hello, Admin!
        </h1>

        <button
          onClick={handleLogout}
          className="mb-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>

        {notification && (
          <div
            className={`mb-6 p-4 border rounded-lg text-center ${getNotificationColor()}`}
          >
            {notification}
          </div>
        )}

        <button
          onClick={() => setShowAdModal(true)}
          className="mb-6 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Upload Advertisement Image
        </button>

        <Popup
          open={showAdModal}
          onClose={() => setShowAdModal(false)}
          closeOnDocumentClick
        >
          <div className="modal bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md mx-auto">
            <button
              onClick={() => setShowAdModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
            >
              ✖
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Upload Advertisement Image
            </h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleAdImageChange}
              className="w-full"
            />
            {adImage && (
              <div className="mt-4 flex flex-col items-center">
                <img
                  src={adImage}
                  alt="Advertisement"
                  className="w-full max-h-64 object-contain mb-4"
                />
                <button
                  onClick={handleDeleteAdImage}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                >
                  Delete Image
                </button>
              </div>
            )}
          </div>
        </Popup>

        <form
          onSubmit={handleSubmit}
          className="mb-8 bg-white shadow-lg p-6 rounded-lg space-y-6"
        >
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700">
              Event Title:
            </label>
            <input
              type="text"
              placeholder="Enter event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 text-lg"
            />
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-700">
                Date:
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 text-lg"
                min={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-700">
                Start Time:
              </label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 text-lg"
              />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-700">
                End Time:
              </label>
              <input
                type="time"
                value={toTime}
                onChange={(e) => setToTime(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 text-lg"
              />
            </div>

            <div>
              <label className="block mb-2 text-lg font-semibold text-gray-700">
                Location:
              </label>
              <input
                type="text"
                placeholder="Event location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-indigo-500 text-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 w-full text-lg"
          >
            {editIndex !== null ? "Update Event" : "Create Event"}
          </button>
        </form>

        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          Event List
        </h2>
        <ul className="space-y-4">
          {events.map((event, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
            >
              <div className="mb-2 md:mb-0">
                <strong className="text-lg font-semibold">{event.title}</strong>{" "}
                | {event.date} | {event.time} - {event.toTime} | {event.location}
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
