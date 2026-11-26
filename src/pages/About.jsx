import React from 'react';

function About() {
  return (
    <div className="page-container">
      <h1>About Me</h1>
      <div className="about-grid">
        {/* Head and shoulder shot placed in public/profile.jpg */}
        <img
          src="/profile.jpg"
          alt="Portrait of Your Legal Name"
          className="profile-img"
          onError={(e) => {
            // Fallback placeholder if user hasn't added profile.jpg yet
            e.target.src = 'https://placehold.co/220x220/0284c7/ffffff?text=Your+Photo';
          }}
        />

        <div className="about-text">
          <h2>陆游程</h2>
          <p style={{ marginTop: '0.75rem' }}>
            I am a dedicated technology student and aspiring software developer with a strong interest in web application development, problem-solving, and modern user interface design. I enjoy turning complex ideas into clean, maintainable code and continuously learning new technologies.
          </p>
          <p style={{ marginTop: '0.75rem' }}>
            Outside of coding, I value teamwork, clear communication, and delivering high-quality work on schedule.
          </p>

          {/* Link to PDF version of Resume placed in public/resume.pdf */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View / Download My Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;