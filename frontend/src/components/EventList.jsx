// frontend/src/components/EventList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // 👈 added
import { API } from "../api";
import "./EventList.css";

function EventList() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // 👈 added

  const fetchEvents = async () => {
    try {
      const res = await API.get("/event");
      setEvents(res.data);
    } catch (err) {
      console.error(err.response?.data || err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleJoin = async (eventId) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Please login/register first");
        return;
      }

      await API.post(`/event/${eventId}/join`, { userId });
      alert("Joined event successfully");

      navigate(`/event/${eventId}/participants`);
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.error || "Error joining event");
    }
  };

  return (

    <section className="event-list">
  <h2 className="event-list-title">Upcoming Events</h2>
  <ul className="event-list-ul">
    {events.map((event) => (
      <li key={event._id} className="event-row">
        <div className="event-row-content">
          <h3 className="event-title">{event.name}</h3>
          <p className="event-desc">{event.description}</p>
        </div>
        <div className="event-actions">
          <button className="event-cta" onClick={() => handleJoin(event._id)}>
            Join
          </button>
        </div>
      </li>
    ))}
  </ul>
</section>



  );
}

export default EventList;
