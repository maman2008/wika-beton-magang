import { useParams, useNavigate } from 'react-router-dom';
import { internsData } from '../data/interns';
import { useState, useEffect } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import './InternDetail.css';

function InternDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const intern = internsData.find(i => i.id === id);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (intern && intern.photos.length > 1) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % intern.photos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [intern]);

  if (!intern) {
    return (
      <div className="not-found">
        <h1>Intern not found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    );
  }

  return (
    <div className="intern-detail" style={{ '--theme-color': intern.color, '--theme-gradient': intern.gradient }}>
      {/* Theme Toggle */}
      <ThemeToggle />
      
      {/* Background */}
      <div className="detail-bg">
        <div className="bg-gradient"></div>
        <div className="bg-overlay"></div>
      </div>

      {/* Back Button */}
      <button className="back-btn" onClick={() => navigate('/')}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      {/* Main Content */}
      <div className={`detail-content ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <div className="detail-hero">
          <div className="photo-gallery">
            <div className="main-photo">
              <img src={intern.photos[currentPhotoIndex]} alt={intern.name} />
              {intern.photos.length > 1 && (
                <div className="photo-dots">
                  {intern.photos.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentPhotoIndex ? 'active' : ''}`}
                      onClick={() => setCurrentPhotoIndex(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="hero-info">
            <div className="name-section">
              <h1 className="intern-name">{intern.name}</h1>
              <p className="intern-role">{intern.role}</p>
              <div className="division-tag">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {intern.division}
              </div>
            </div>

            <blockquote className="intern-quote">
              "{intern.quote}"
            </blockquote>

            {/* Social Media */}
            {intern.social && (
              <div className="social-media">
                <h3>Connect with me</h3>
                <div className="social-links">
                  {intern.social.instagram && (
                    <a href={intern.social.instagram} target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span>Instagram</span>
                    </a>
                  )}
                  {intern.social.linkedin && (
                    <a href={intern.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {intern.social.telegram && (
                    <a href={intern.social.telegram} target="_blank" rel="noopener noreferrer" className="social-link" title="Telegram">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>Telegram</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          {/* About */}
          <div className="info-card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>About</h3>
            <p>{intern.bio}</p>
          </div>

          {/* Education */}
          <div className="info-card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Education</h3>
            <p className="university">{intern.university}</p>
            <p className="major">{intern.major}</p>
          </div>

          {/* Contact */}
          <div className="info-card">
            <div className="card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2"/>
                <path d="m22 6-10 7L2 6" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Contact</h3>
            <div className="contact-info">
              <a href={`mailto:${intern.email}`} className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {intern.email}
              </a>
              <a href={`tel:${intern.phone}`} className="contact-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {intern.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-list">
            {intern.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* CV & Portfolio Links */}
        <div className="cv-portfolio-section">
          <h2>CV & Portfolio</h2>
          <div className="cv-portfolio-links">
            <a href={intern.cvLink} target="_blank" rel="noopener noreferrer" className="cv-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="white" strokeWidth="2"/>
                <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Lihat CV
            </a>
            <a href={intern.portfolioLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 22V12M3.3 7l8.7 5 8.7-5" stroke="currentColor" strokeWidth="2"/>
              </svg>
              Lihat Portfolio
            </a>
          </div>
        </div>

       
      </div>
    </div>
  );
}

export default InternDetail;
