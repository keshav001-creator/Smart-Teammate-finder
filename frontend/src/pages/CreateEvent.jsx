import React, { useState } from "react";
import { API } from "../api";
import "./CreateEvent.css";

function CreateEvent() {
  const [form, setForm] = useState({
    name: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/event/create", form);
      alert("Event created successfully!");
      console.log(res.data);
      // Reset form after submission
      setForm({ name: "", description: "" });
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Error creating event");
    }
  };

  return (
    <div className="create-event">
      <h1 className="create-event-title">Create New Event</h1>

      <form className="create-event-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Event Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter event name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Event Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter event description"
          value={form.description}
          onChange={handleChange}
          rows="5"
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
