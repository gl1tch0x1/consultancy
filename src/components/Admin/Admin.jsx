import React, { useEffect, useState } from "react";

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [toTime, setToTime] = useState(""); // New state for "To Time"
  const [location, setLocation] = useState("");
  const [editIndex, setEditIndex] = useState(null);

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

  // Format date for display
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Add or edit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple date validation
    if (!Date.parse(date)) {
      alert("Please enter a valid date (e.g., YYYY-MM-DD).");
      return;
    }

    const newEvent = { title, date, time, toTime, location }; // Include "toTime"

    if (editIndex !== null) {
      const updatedEvents = events.map((event, index) =>
        index === editIndex ? newEvent : event
      );
      saveEvents(updatedEvents);
    } else {
      saveEvents([...events, newEvent]);
    }

    // Clear input fields
    setTitle("");
    setDate("");
    setTime("");
    setToTime(""); // Clear "To Time"
    setLocation("");
    setEditIndex(null);
  };

  // Edit event
  const handleEdit = (index) => {
    const eventToEdit = events[index];
    setTitle(eventToEdit.title);
    setDate(eventToEdit.date);
    setTime(eventToEdit.time);
    setToTime(eventToEdit.toTime); // Set "To Time" for editing
    setLocation(eventToEdit.location);
    setEditIndex(index);
  };

  // Delete event
  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    saveEvents(updatedEvents);
  };

  return (
    <div className="admin-section p-6 md:p-10 lg:p-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block mb-1 text-xl md:text-2xl">Event Title:</label>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="p-3 md:p-4 border rounded w-full text-lg md:text-xl" // Increased padding and text size
          />
        </div>
        <div>
          <label className="block mb-1 text-xl md:text-2xl">Date (YYYY-MM-DD):</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="p-3 md:p-4 border rounded w-full text-lg md:text-xl" // Increased padding and text size
          />
        </div>
        <div>
          <label className="block mb-1 text-xl md:text-2xl">Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="p-3 md:p-4 border rounded w-full text-lg md:text-xl" // Increased padding and text size
          />
        </div>
        <div>
          <label className="block mb-1 text-xl md:text-2xl">To Time:</label>
          <input
            type="time"
            value={toTime}
            onChange={(e) => setToTime(e.target.value)}
            required
            className="p-3 md:p-4 border rounded w-full text-lg md:text-xl" // Increased padding and text size
          />
        </div>
        <div>
          <label className="block mb-1 text-xl md:text-2xl">Location:</label>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="p-3 md:p-4 border rounded w-full text-lg md:text-xl" // Increased padding and text size
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-3 md:p-4 rounded w-full md:w-auto text-lg md:text-xl">
          {editIndex !== null ? "Update Event" : "Add Event"}
        </button>
      </form>

      <h2 className="text-2xl md:text-3xl font-semibold">Event List</h2>
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex-1 mb-2 md:mb-0">
              <strong className="text-lg md:text-xl">{event.title}</strong> | {formatDate(event.date)} | {event.time} - {event.toTime} | {event.location}
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 text-white p-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-1 rounded"
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
