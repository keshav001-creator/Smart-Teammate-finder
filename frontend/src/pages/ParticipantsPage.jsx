// frontend/src/pages/ParticipantsPage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Navbar from "../components/Navbar";
import ParticipantsList from "../components/ParticipantsList";
import FilterBar from "../components/FilterBar";

function ParticipantsPage() {
  const { eventId } = useParams(); 
  const [filterSkill, setFilterSkill] = useState("");

  return (
    <div className="participants-page">
      <h2>Event Participants</h2>
      <FilterBar onFilter={setFilterSkill} />
      <ParticipantsList eventId={eventId} skill={filterSkill} />
    </div>
  );
}

export default ParticipantsPage;
