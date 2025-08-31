// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm a <strong>Backend-focused developer</strong> specializing in Java and Spring Boot.
          I build scalable, secure REST APIs and data-driven systems — <br/>
          and I use React, HTML/CSS, and JavaScript for clean, lightweight frontends when needed.
        </p>
        <div className="skills">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Hibernate / JPA</span>
          <span>REST API Development</span>
          <span>Microservices</span>
          <span>SQL (MySQL / PostgreSQL)</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>
          <span>Docker (Basics)</span>
          <span>React (Basics)</span>
          <span>HTML / CSS</span>
          <span>JavaScript (ES6)</span>
        </div>
      </div>
    </section>
  );
};

export default About;