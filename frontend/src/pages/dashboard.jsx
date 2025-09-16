import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
// import logo from "../assets/logo.jpeg"; // replace with your logo path

function Dashboard() {
  return (
    <div className="dashboard-container">
{/* 
      <header className="dashboard-header">
        <img src={logo} alt="Logo" className="dashboard-logo" />
      </header> */}

      <main className="dashboard-main">
        <h1 className="dashboard-title">Smart Teammate Finder</h1>
        <p className="dashboard-welcome">Find your perfect teammates for events and projects!</p>
      </main>

      <nav className="dashboard-nav">
        <Link className="dashboard-link" to="/register">Register</Link>
        <Link className="dashboard-link" to="/eventpage">Event Page</Link>
        <Link className="dashboard-link" to="/create-event">Create Event</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
