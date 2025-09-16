import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Register from "./pages/Register.jsx";
import EventPage from "./pages/EventPage.jsx";
import CreateEvent from "./pages/CreateEvent.jsx"; 
import ParticipantsPage from "./pages/ParticipantsPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/eventpage" element={<EventPage />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/event/:eventId/participants" element={<ParticipantsPage />} />

      </Routes>
    </Router>
  );
}

export default App;
