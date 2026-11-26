import React from 'react';

function Projects() {
  // Structured array of 3 highlighted projects
  const projectList = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      image: 'https://placehold.co/600x400/1e293b/38bdf8?text=React+Portfolio',
      role: 'Front-End Developer',
      outcome: 'Built a responsive 6-page Single Page Application (SPA) using React and React Router, improving navigation speed and presenting professional work clearly.'
    },
    {
      id: 2,
      title: 'Inventory & Order Management System',
      image: 'https://placehold.co/600x400/0f766e/ffffff?text=Inventory+App',
      role: 'Full-Stack Developer',
      outcome: 'Designed a database-driven web dashboard to track daily stock levels and orders, reducing manual entry errors and streamlining workflow.'
    },
    {
      id: 3,
      title: 'Task & Study Planner App',
      image: 'https://placehold.co/600x400/4338ca/ffffff?text=Task+Planner',
      role: 'UI/UX Designer & Developer',
      outcome: 'Created an interactive JavaScript web tool allowing students to organize assignments by deadline, increasing on-time task completion.'
    }
  ];

  return (
    <div className="page-container">
      <h1>My Projects</h1>
      <p>Here are three key projects I have worked on recently:</p>

      <div className="card-grid">
        {projectList.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} />
            <div className="card-body">
              <h3>{project.title}</h3>
              <p><strong>Role:</strong> {project.role}</p>
              <p style={{ marginTop: '0.5rem' }}><strong>Outcome:</strong> {project.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;