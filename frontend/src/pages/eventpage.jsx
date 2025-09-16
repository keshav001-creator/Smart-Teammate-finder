import React, { useState } from "react";
import Navbar from "../components/Navbar";
import EventList from "../components/EventList";
import "./EventPage.css";


function EventPage() {
  return (
    <div className="eventpage-container">
      <Navbar />
      <div className="eventpage-content">
        <EventList />
      </div>
    </div>
  );
}


export default EventPage;
