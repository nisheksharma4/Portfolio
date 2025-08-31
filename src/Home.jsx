// src/Home.jsx
import React from 'react';

// Import Components
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="portfolio">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;