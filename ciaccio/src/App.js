import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-brand">Michael F. Ciaccio</div>
        <div className="nav-links">
          {['about', 'experience', 'education', 'skills', 'contact'].map((section) => (
            <button
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <a
            href="https://github.com/mfciaccio"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
          >
            <GitHubIcon /> GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="hero-avatar">MC</div>
          <h1>Michael F. Ciaccio</h1>
          <p className="hero-title">Senior Software Engineer</p>
          <p className="hero-location">San Francisco, CA</p>
          <div className="hero-links">
            <a
              href="https://github.com/mfciaccio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <GitHubIcon /> View GitHub
            </a>
            <a href="mailto:michael.ciaccio@email.com" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Professional Summary</h2>
          <div className="card summary-card">
            <p>
              Results-driven software engineer with 5+ years of experience building scalable
              web applications and cloud infrastructure. Passionate about clean code, user
              experience, and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="card">
                <div className="card-header">
                  <h3>Senior Software Engineer</h3>
                  <span className="badge">Current</span>
                </div>
                <p className="company">TechCorp Inc. | San Francisco, CA</p>
                <p className="date">2021 – Present</p>
                <ul className="achievements">
                  <li>Led development of microservices architecture serving 2M+ daily active users</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Reduced API response times by 40% through optimization</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="card">
                <div className="card-header">
                  <h3>Software Engineer</h3>
                </div>
                <p className="company">StartupXYZ | Oakland, CA</p>
                <p className="date">2019 – 2021</p>
                <ul className="achievements">
                  <li>Built full-stack features using React, Node.js, and PostgreSQL</li>
                  <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                  <li>Collaborated with product team to define technical requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="card education-card">
            <div className="education-icon">🎓</div>
            <div className="education-content">
              <h3>Bachelor of Science in Computer Science</h3>
              <p className="institution">University of California, Berkeley</p>
              <p className="date">Class of 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="card skill-card">
              <div className="skill-icon">💻</div>
              <h3>Languages</h3>
              <div className="skill-tags">
                {['Python', 'JavaScript', 'TypeScript', 'Go', 'SQL'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="card skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>Frameworks</h3>
              <div className="skill-tags">
                {['React', 'Node.js', 'Django', 'FastAPI'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="card skill-card">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {['AWS', 'Docker', 'Kubernetes', 'Git', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <a href="mailto:michael.ciaccio@email.com" className="card contact-card">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>michael.ciaccio@email.com</p>
            </a>

            <a href="tel:+15551234567" className="card contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </a>

            <a
              href="https://linkedin.com/in/mfciaccio"
              target="_blank"
              rel="noopener noreferrer"
              className="card contact-card"
            >
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/mfciaccio</p>
            </a>

            <a
              href="https://github.com/mfciaccio"
              target="_blank"
              rel="noopener noreferrer"
              className="card contact-card"
            >
              <div className="contact-icon">
                <GitHubIcon />
              </div>
              <h3>GitHub</h3>
              <p>github.com/mfciaccio</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Michael F. Ciaccio. All rights reserved.</p>
          <a
            href="https://github.com/mfciaccio"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-github"
          >
            <GitHubIcon /> mfciaccio
          </a>
        </div>
      </footer>
    </div>
  );
}

// GitHub Icon Component
const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="currentColor"
    className="github-icon"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default App;
