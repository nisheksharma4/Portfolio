// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>
          Have a project in mind? Want to collaborate? Feel free to reach out!
        </p>

        <form className="contact-form" action="mailto:hello@nishek.dev" method="post" encType="text/plain">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Let's work together..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;