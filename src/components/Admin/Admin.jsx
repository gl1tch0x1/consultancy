import React, { useEffect, useState } from "react";

// Reusable Input Component
const Input = ({ label, type, name, value, onChange, placeholder, min }) => (
  <div>
    <label className="block mb-1 text-lg md:text-xl font-medium">{label}:</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      required
      className="p-3 md:p-4 border rounded w-full text-base md:text-lg transition-shadow focus:shadow-md focus:outline-none"
    />
  </div>
);

// Reusable Button Component
const Button = ({ onClick, label, className }) => (
  <button
    onClick={onClick}
    className={`${className} p-3 md:p-4 rounded text-base md:text-lg transition-colors duration-200 hover:opacity-90`}
  >
    {label}
  </button>
);

const Admin = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    toTime: "",
    location: "",
  });
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

  // Handle form changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get today's date in the format YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  // Add or edit event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (new Date(formData.date) < new Date(getTodayDate())) {
      alert("Please choose today’s date or a future date.");
      return;
    }

    const newEvent = { ...formData };

    if (editIndex !== null) {
      const updatedEvents = events.map((event, index) =>
        index === editIndex ? newEvent : event
      );
      saveEvents(updatedEvents);
    } else {
      saveEvents([...events, newEvent]);
    }

    // Reset form
    setFormData({ title: "", date: "", time: "", toTime: "", location: "" });
    setEditIndex(null);
  };

  // Edit event
  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditIndex(index);
  };

  // Delete event
  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    saveEvents(updatedEvents);
  };

  return (
    <div className="admin-section p-8 md:p-12 lg:p-16 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Admin Panel</h1>
      <form onSubmit={handleSubmit} className="mb-8 space-y-6 bg-white p-6 rounded-lg shadow-md">
        <Input
          label="Event Title"
          type="text"
          name="title"
          placeholder="Event Title"
          value={formData.title}
          onChange={handleInputChange}
        />
        <Input
          label="Date (YYYY-MM-DD)"
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          min={getTodayDate()} // Restrict to today or future dates
        />
        <div className="md:flex md:space-x-4">
          <Input
            label="Time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
          />
          <Input
            label="To Time"
            type="time"
            name="toTime"
            value={formData.toTime}
            onChange={handleInputChange}
          />
        </div>
        <Input
          label="Location"
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleInputChange}
        />
        <Button
          label={editIndex !== null ? "Update Event" : "Add Event"}
          className="bg-blue-600 text-white w-full md:w-auto"
          type="submit"
        />
      </form>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-gray-700">Event List</h2>
      {events.length ? (
        <ul className="space-y-6">
          {events.map((event, index) => (
            <li key={index} className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex-1 mb-2 md:mb-0 text-gray-700">
                <strong className="text-lg md:text-xl font-semibold">{event.title}</strong> | {formatDate(event.date)} | {event.time} - {event.toTime} | {event.location}
              </div>
              <div className="flex space-x-2">
                <Button
                  label="Edit"
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white"
                />
                <Button
                  label="Delete"
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white"
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-lg mt-6">No events available. Please add one!</p>
      )}
    </div>
  );
};

export default Admin;
