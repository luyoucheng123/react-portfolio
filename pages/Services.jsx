import React from 'react';

function Services() {
  // List of technical services offered
  const serviceList = [
    {
      id: 1,
      title: 'Web Development',
      image: 'https://placehold.co/600x400/0284c7/ffffff?text=Web+Development',
      description: 'Building modern, responsive websites and single-page applications using React, HTML5, CSS3, and JavaScript.'
    },
    {
      id: 2,
      title: 'General Programming',
      image: 'https://placehold.co/600x400/0f172a/38bdf8?text=Programming',
      description: 'Writing clean, efficient, and well-documented code for desktop utilities, automation scripts, and backend logic.'
    },
    {
      id: 3,
      title: 'Database Design & Management',
      image: 'https://placehold.co/600x400/0d9488/ffffff?text=Database+Design',
      description: 'Structuring relational databases, writing optimized SQL queries, and connecting data layers to web apps.'
    }
  ];

  return (
    <div className="page-container">
      <h1>Services I Offer</h1>
      <p>Here are the core technical services I can provide for your projects:</p>

      <div className="card-grid">
        {serviceList.map((service) => (
          <div key={service.id} className="card">
            <img src={service.image} alt={service.title} />
            <div className="card-body">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;