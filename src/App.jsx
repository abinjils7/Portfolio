import LaserFlow from './components/LaserFlow';
import './App.css';
import './components/Sections.css';

import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    // Target elements to animate
    const revealElements = document.querySelectorAll('.section-statement, .about-col, .skill-group, .project-row, .exp-card, .contact-info-item');
    revealElements.forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="hero-section" id="home">
        <Navbar />
        <LaserFlow
          color="#411da5"
          wispDensity={1}
          flowSpeed={0.35}
          verticalSizing={2}
          horizontalSizing={0.5}
          fogIntensity={0.45}
          fogScale={0.3}
          wispSpeed={15}
          wispIntensity={5}
          flowStrength={0.25}
          decay={1.1}
          horizontalBeamOffset={0}
          verticalBeamOffset={-0.5}
        />

        <div className="hero-content">

          <h1 className="hero-name">Abin Jils</h1>
          <h2 className="hero-title">MERN Stack Developer</h2>
          <p className="hero-tagline" style={{ color: '#888888', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
            Building scalable SaaS platforms, ecommerce applications, and real-time web applications using the MERN stack.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="/FullstackDevAbinJils.pdf" className="btn-secondary" download>Download Resume</a>
            <a href="https://github.com/abinjils7" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            <a href="#contact" className="btn-secondary">Contact Me</a>
          </div>
        </div>
      </div>

      <div className="sections-wrapper">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
