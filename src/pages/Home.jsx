// src/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div className="portfolio">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Nishek</span></h1>
          <p>Full Stack Developer </p>
          <p>“I develop seamless digital experiences by combining modern frontend design with scalable backend systems in Java.”</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <p>
            I'm a <strong>Backend-focused developer</strong> specializing in Java and Spring Boot.
            I build scalable, secure REST APIs and data-driven systems — <br/>
            and I use React, HTML/CSS, and JavaScript for clean, lightweight frontends when needed.

          </p>
          <div className="skills">
  {/* Backend Core */}
  <span>Java</span>
  <span>Spring Boot</span>
  <span>Hibernate / JPA</span>
  <span>REST API Development</span>
  <span>Microservices</span>
  <span>SQL (MySQL / PostgreSQL)</span>
  <span>MongoDB</span>

  {/* Tools & Deployment */}
  <span>Git & GitHub</span>
  <span>Docker (Basics)</span>

  {/* Frontend Basics */}
  <span>React (Basics)</span>
  <span>HTML / CSS</span>
  <span>JavaScript (ES6)</span>
</div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section light-bg">
        <div className="container">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="E-Commerce Website" />
              <h3>Project Name</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolore.</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Task Manager App" />
              <h3>Project Name</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, odio.</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
            <div className="project-card">
              <img src="https://via.placeholder.com/300x200" alt="Portfolio Website" />
              <h3>Project Name</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, impedit?</p>
              <a href="#" className="project-link">View Project →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>
            Have a project in mind? Want to collaborate? Feel free to reach out!
          </p>
          <a href="mailto:hello@Nishek.dev" className="btn btn-primary">Email Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Nishek. Built with React.</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub">GitHub</a>
          <a href="#" aria-label="LinkedIn">LinkedIn</a>
          <a href="#" aria-label="Twitter">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;