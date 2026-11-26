import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  // State object to capture user input from the contact form
  const [contactFormData, setContactFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  });

  // Update form state whenever an input field changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission: capture data, notify user, and redirect back to Home Page
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Captured Contact Form Data:', contactFormData);
    alert(
      `Thank you, ${contactFormData.firstName} ${contactFormData.lastName}! Your message has been received. Redirecting to the Home page...`
    );
    navigate('/');
  };

  return (
    <div className="page-container">
      <h1>Contact Me</h1>
      <p>Feel free to reach out using my contact details or by sending a message below.</p>

      <div className="contact-layout">
        {/* Contact Information Panel */}
        <div className="contact-panel">
          <h3>Contact Information</h3>
          <p style={{ marginTop: '1rem' }}><strong>Email:</strong> 2489466694@qq.com</p>
          <p><strong>Phone:</strong> +86 18362719357</p>
          <p><strong>Location:</strong> Suzhou China</p>
          <p><strong>GitHub:</strong> github.com/Lu Youcheng</p>
        </div>

        {/* Interactive Contact Form */}
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={contactFormData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={contactFormData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={contactFormData.contactNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Adress</label>
              <input
                type="email"
                id="email"
                name="email"
                value={contactFormData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={contactFormData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;