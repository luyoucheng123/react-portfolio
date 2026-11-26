import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page-container hero-section">
      <h1>Welcome to My Personal Portfolio</h1>
      <p style={{ fontSize: '1.15rem', marginTop: '1rem', color: '#475569' }}>
        Hello! I am a passionate developer dedicated to building clean, efficient, and user-friendly web applications.
      </p>

      {/* Mission Statement */}
      <div className="mission-box">
        <h3>Mission Statement</h3>
        <p style={{ marginTop: '0.5rem' }}>
          My mission is to combine technical excellence with thoughtful design to create reliable digital solutions that solve real-world problems and deliver meaningful value to users.
        </p>
      </div>

      {/* Redirect buttons to About Me and Projects */}
      <div>
        <Link to="/about" className="btn">Learn More About Me</Link>
        <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
      </div>
    </div>
  );
}

export default Home;