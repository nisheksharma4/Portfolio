// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section light-bg">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 1" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, dolore.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 2" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, odio.</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300x200" alt="Project 3" />
            <h3>Project Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, impedit?</p>
            <a href="#" className="project-link">View Project →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;