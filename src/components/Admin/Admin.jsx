import React, { useEffect, useState } from "react";

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [location, setLocation] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [notification, setNotification] = useState(null); // Notification state
  const [notificationType, setNotificationType] = useState(""); // Success, Edit, Warning

  // Load events from local storage
  useEffect(() => {
    const savedEvents = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(savedEvents);
  }, []);

  // Save events to local storage
  const saveEvents = (newEvents) => {
    localStorage.setItem("events", JSON.stringify(newEvents));
    setEvents(newEvents);
  };

  // Notification handler
  const notifyAdmin = (message, type) => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => {
      setNotification(null);
      setNotificationType(""); // Reset notification type after timeout
    }, 3000); // Notification disappears after 3 seconds
  };

  // Date and Time validation
  const isValidDateTime = () => {
    const now = new Date();
    const selectedDateTime = new Date(`${date}T${time}`);
    return selectedDateTime >= now;
  };

  // Add or edit event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Date.parse(date)) {
      alert("Please enter a valid date.");
      return;
    }

    if (!isValidDateTime()) {
      alert("Event date and time cannot be in the past.");
      return;
    }

    // Check if more than 3 events
    if (events.length >= 3 && editIndex === null) {
      notifyAdmin("Sorry, Couldn't create the event. Try deleting one event.", "warning");
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
      saveEvents([...events, newEvent]);
      notifyAdmin("Event created successfully!", "success");
    }

    // Clear input fields
    setTitle("");
    setDate("");
    setTime("");
    setToTime("");
    setLocation("");
    setEditIndex(null);
  };

  // Edit event
  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setTitle(eventToEdit.title);
    setDate(eventToEdit.date);
    setTime(eventToEdit.time);
    setToTime(eventToEdit.toTime);
    setLocation(eventToEdit.location);
    setEditIndex(index);
  };

  // Delete event
  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    saveEvents(updatedEvents);
    notifyAdmin("Event deleted successfully!", "warning");
  };

  // Notification colors
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

  return (
    <div className="admin-section p-6 md:p-10 lg:p-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-700">Admin Panel</h1>

      {/* Notification */}
      {notification && (
        <div className={`mb-6 p-4 border rounded-lg text-center ${getNotificationColor()}`}>
          {notification}
        </div>
      )}

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
              min={new Date().toISOString().split("T")[0]} // Prevent past dates
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

      <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Event List</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li
            key={index}
            className="p-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center"
          >
            <div className="mb-2 md:mb-0">
              <strong className="text-lg font-semibold">{event.title}</strong> | {event.date} | {event.time} - {event.toTime} | {event.location}
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
  );
};

export default Admin;
