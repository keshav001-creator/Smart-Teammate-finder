import React, { useEffect, useState } from "react"; 
import { API } from "../api";
import "./ParticipantsList.css";

function ParticipantsList({ eventId, skill }) {
  const [participants, setParticipants] = useState([]); 
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!eventId) return;

    const fetchParticipants = async () => {
      try {
        const res = await API.get(
          `/event/${eventId}/participants${skill ? `?skill=${skill}` : ""}`
        );
        setParticipants(res.data);
      } catch (err) {
        console.error(err.response?.data || err);
      }
    };
    fetchParticipants();
  }, [eventId, skill]);

  const handleView = async (userId) => {
    try {
      const res = await API.get(`/auth/${userId}`);
      setSelectedUser(res.data);
      setShowModal(true);
    } catch (err) {
      console.error(err.response?.data || err);
    }
  };

  return (
    <section className="participants-list">
      <h3>Participants List</h3>
      <ul>
        {participants.map((p) => (
          <li key={p._id}>
            <img
              src={"https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="}
              alt={`${p.firstName} ${p.lastName}`}
              className="participant-avatar"
            />

            <div className="participant-meta">
              <span className="participant-name">
                {p.firstName} {p.lastName}
              </span>
              <span className="participant-last">
                Skills: {p.skills?.length > 0 ? p.skills.join(", ") : "No skills listed"}
              </span>
            </div>

            <div className="participant-actions">
              <button className="btn" onClick={() => handleView(p._id)}>
                View
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {showModal && selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <h3>
              {selectedUser.fullName.firstName} {selectedUser.fullName.lastName}
            </h3>
            <p>Email: {selectedUser.email}</p>
            <p>Skills: {selectedUser.skills?.join(", ") || "No skills"}</p>
            <p>Interests: {selectedUser.interest?.join(", ") || "No interests"}</p>
            <button className="btn" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ParticipantsList;
