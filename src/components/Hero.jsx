// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Nishek</span></h1>
        <p className="subtitle">Full Stack Developer</p>
        <p className="tagline">
          "I develop seamless digital experiences by combining modern frontend design 
          with scalable backend systems in Java."
        </p>

        {/* Tech Stack Logos */}
        <div className="tech-stack">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
            alt="Java"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
            alt="Spring Boot"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
            className="tech-logo"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            alt="React"
            className="tech-logo"
          />
        </div>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;