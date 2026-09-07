import { useNavigate } from 'react-router-dom';
import { internsData } from '../data/interns';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import TypingAnimation from '../components/TypingAnimation';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/intern/${id}`);
  };

  return (
    <div className="home">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Animated Background */}
      <div className="bg-animation">
        <div className="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>

        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>

        {/* Grid Lines */}
        <div className="grid-lines"></div>

        {/* Floating Dots */}
        <div className="floating-dots">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
          <span className="dot dot-5"></span>
          <span className="dot dot-6"></span>
        </div>
      </div>

      {/* ── HERO SECTION ─────────────────────────── */}
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>

          {/* Logo */}
          <div className="logo-badge">
            <img src="/images/logo-wika.png" alt="WIKA Beton Logo" className="company-logo" />
          </div>

          {/* Title */}
          <h1 className="hero-title">
            <span className="title-main" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)' }}>
              <TypingAnimation 
                text={["Welcome WIKA BETON"]}
                speed={80}
                delay={2500}
              />
            </span>
            <span className="title-intern">Intern Program</span>
            <span className="title-year">2026</span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            Meet our talented interns building the future of infrastructure at Indonesia's leading concrete company.
          </p>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">6</span>
              <span className="stat-label">Interns</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3</span>
              <span className="stat-label">Divisions</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2026</span>
              <span className="stat-label">Batch</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">3mo</span>
              <span className="stat-label">Program</span>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="scroll-hint">
            <span>Scroll to meet the team</span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ── INTERNS SECTION ──────────────────────── */}
      <section className="interns-section">
        <div className="container">

          {/* Section Header */}
          <div className="section-header">
            <div className="section-eyebrow">
              <span className="section-eyebrow-dot"></span>
              Tim Magang
            </div>
            <h2 className="section-title">Peserta Intern 2026</h2>
            <p className="section-subtitle">
              Enam talenta muda yang bergabung bersama kami untuk belajar, berkembang, dan berkontribusi.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="interns-grid">
            {internsData.map((intern, index) => (
              <div
                key={intern.id}
                className="intern-card"
                onClick={() => handleCardClick(intern.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow */}
                <div className="card-glow"></div>

                {/* Photo Header */}
                <div className="card-header">
                  <div className="card-avatar">
                    <img src={intern.photos[0]} alt={intern.name} />
                  </div>

                  {/* Overlay name on photo */}
                  <div className="card-photo-info">
                    <p className="card-name-overlay">{intern.name}</p>
                    <p className="card-role-overlay">{intern.role}</p>
                  </div>

                  {/* Badge */}
                  <div className="card-badge">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <div className="card-division">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {intern.division}
                  </div>
                  <p className="card-bio">{intern.bio}</p>
                </div>

                {/* CV & Portfolio Indicators */}
                <div className="card-cv-portfolio">
                  <div className="cv-indicator" title="CV tersedia">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    CV
                  </div>
                  <div className="portfolio-indicator" title="Portfolio tersedia">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="m3.3 7 8.7 5 8.7-5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    Portfolio
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer">
                  <span className="view-profile">
                    Lihat Profil
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────── */}
      <footer className="footer">
        <p>Made with ❤️ by WIKA Beton Intern Team &nbsp;·&nbsp; 2026</p>
      </footer>
    </div>
  );
}

export default Home;


