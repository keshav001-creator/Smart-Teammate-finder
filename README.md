<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  
</head>
<body>

  <h1>Smart Teammate Finder</h1>

  <h2>Overview</h2>
  <p>
    Smart Teammate Finder is a full-stack web application developed as part of a hackathon problem statement.
    The platform enables users to discover and connect with potential teammates for events based on profiles,
    skills, and participation data.
  </p>
  <p>
    The system provides an end-to-end workflow including user authentication, event creation, participant management,
    and communication via email.
  </p>

  <h2>Features</h2>
  <ul>
    <li>User authentication (registration and login)</li>
    <li>User profile creation with skills and personal details</li>
    <li>Create and manage events</li>
    <li>View list of all available events</li>
    <li>View participants registered for each event</li>
    <li>Access participant details including email and skills</li>
    <li>Filter participants based on skills</li>
    <li>Send emails to participants outside the platform</li>
  </ul>

  <h2>Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li>React.js</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
  </ul>

  <h3>Database</h3>
  <ul>
    <li>MongoDB</li>
  </ul>

  <h3>Authentication</h3>
  <ul>
    <li>JWT (JSON Web Tokens)</li>
  </ul>

  <h2>System Workflow</h2>
  <ol>
    <li>User registers and logs into the platform</li>
    <li>User creates a profile with relevant skills</li>
    <li>User browses available events</li>
    <li>User selects an event to view participants</li>
    <li>Participants are filtered based on skills</li>
    <li>User can contact participants via email</li>
  </ol>

  <h2>Project Structure</h2>
  <pre>
backend/
  models/
  routes/
  controllers/
  server.js

frontend/
  src/
  components/
  pages/
  App.js
  </pre>

  <h2>Project Context</h2>
  <p>
    This project was built as a solution to the hackathon problem statement
    "Smart Teammate Finder". It demonstrates full-stack development skills,
    including authentication, CRUD operations, data relationships, and user workflows.
  </p>

  <h2>Future Improvements</h2>
  <ul>
    <li>Advanced matchmaking based on skill similarity</li>
    <li>Real-time chat between users</li>
    <li>Improved recommendation system</li>
    <li>Cloud deployment</li>
    <li>UI/UX enhancements</li>
  </ul>

  <h2>Note</h2>
  <p>
    This project represents an MVP (Minimum Viable Product) built under hackathon constraints
    and serves as a foundation for a scalable teammate discovery system.
  </p>

</body>
</html>
