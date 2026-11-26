import React from 'react';

function Education() {
  // List of educational and professional qualifications
  const educationRecords = [
    {
      id: 1,
      degree: 'Diploma in Software Engineering / Web Development',
      institution: 'Suzhou Centennial College',
      period: 'September 2024 – June 2027 (Expected)',
      details: 'Focused on Web Application Development, Database Concepts, Object-Oriented Programming, and Software Systems Design.'
    },
    {
      id: 2,
      degree: 'High School Diploma',
      institution: '开大附中',
      period: 'September 2021 – June 2024',
      details: 'Graduated with strong foundations in mathematics, computer science fundamentals, and English communication.'
    }
  ];

  return (
    <div className="page-container">
      <h1>Education & Qualifications</h1>
      <p>Below is a summary of my academic background and qualifications:</p>

      {educationRecords.map((item) => (
        <div key={item.id} className="edu-item">
          <span className="edu-date">{item.period}</span>
          <h3 style={{ marginTop: '0.25rem' }}>{item.degree}</h3>
          <p style={{ fontWeight: '600', color: '#334155' }}>{item.institution}</p>
          <p style={{ marginTop: '0.5rem' }}>{item.details}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
