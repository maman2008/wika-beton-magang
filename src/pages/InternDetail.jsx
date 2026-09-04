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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to Home
      </button>

      {/* Main Content */}
      <div className={`detail-content ${isVisible ? 'visible' : ''}`}>
        {/* Hero Section */}
        <div className="detail-hero">
          <div className="photo-gallery">
            <div className="main-photo">
              <img src={intern.photos[currentPhotoIndex]} alt={intern.name} />
              <div className="photo-dots">
                {intern.photos.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentPhotoIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPhotoIndex(index)}
                    style={{ background: index === currentPhotoIndex ? intern.color : 'rgba(255,255,255,0.5)' }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hero-info">
            <div className="name-section">
              <h1 className="intern-name">{intern.name}</h1>
              <p className="intern-role">{intern.role}</p>
              <div className="division-tag" style={{ background: intern.gradient }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {intern.division}
              </div>
            </div>

            <blockquote className="intern-quote">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="quote-icon">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" opacity="0.2"/>
              </svg>
              "{intern.quote}"
            </blockquote>

            {/* Quick Stats */}
            <div className="quick-stats">
              <div className="quick-stat">
                <div className="quick-stat-num">{intern.skills.length}</div>
                <div className="quick-stat-label">Skills</div>
              </div>
              <div className="quick-stat">
                <div className="quick-stat-num">{intern.achievements.length}</div>
                <div className="quick-stat-label">Achievements</div>
              </div>
              <div className="quick-stat">
                <div className="quick-stat-num">2026</div>
                <div className="quick-stat-label">Batch</div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className="info-grid">
          {/* About */}
          <div className="info-card">
            <div className="card-icon" style={{ background: intern.gradient }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>About</h3>
            <p>{intern.bio}</p>
          </div>

          {/* Education */}
          <div className="info-card">
            <div className="card-icon" style={{ background: intern.gradient }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
            <div className="card-icon" style={{ background: intern.gradient }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="white" strokeWidth="2"/>
                <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Contact</h3>
            <div className="contact-info">
              <a href={`mailto:${intern.email}`} className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                  <path d="m22 6-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
                </svg>
                {intern.email}
              </a>
              <a href={`tel:${intern.phone}`} className="contact-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
              <span key={index} className="skill-tag" style={{ 
                borderColor: intern.color,
                color: intern.color
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="achievements-section">
          <h2>Achievements</h2>
          <div className="achievements-list">
            {intern.achievements.map((achievement, index) => (
              <div key={index} className="achievement-item">
                <div className="achievement-icon" style={{ background: intern.gradient }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6 9 17l-5-5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternDetail;
