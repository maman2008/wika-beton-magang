import { useNavigate } from 'react-router-dom';
import { internsData } from '../data/interns';
import { useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
        <div class="gradient-blob blob-1"></div>
        <div className="gradient-blob blob-2"></div>
        <div className="gradient-blob blob-3"></div>
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        
        {/* Animated Grid Lines */}
        <div className="grid-lines">
          <div className="grid-line horizontal line-1"></div>
          <div className="grid-line horizontal line-2"></div>
          <div className="grid-line horizontal line-3"></div>
          <div className="grid-line vertical line-4"></div>
          <div className="grid-line vertical line-5"></div>
          <div className="grid-line vertical line-6"></div>
        </div>
        
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

      {/* Hero Section */}
      <section className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="logo-badge">
            <img src="/images/logo-wika.png" alt="WIKA Beton Logo" className="company-logo" />
          </div>
          
          <h1 className="hero-title">
            <span className="title-welcome">Welcome to</span>
            <span className="title-main">
              <span className="title-word">WIKA</span>
              <span className="title-word">BETON</span>
            </span>
            <span className="title-intern">Intern Program</span>
            <span className="title-year">2026</span>
          </h1>
          
          <p className="hero-subtitle">
            Meet our talented interns building the future of infrastructure
          </p>

          <div className="scroll-hint">
            <span>Scroll to meet the team</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Interns Section */}
      <section className="interns-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Peserta Intern</h2>
            <p className="section-subtitle">
              Lima talenta muda yang bergabung bersama kami untuk belajar dan berkembang
            </p>
          </div>

          <div className="interns-grid">
            {internsData.map((intern, index) => (
              <div
                key={intern.id}
                className="intern-card"
                onClick={() => handleCardClick(intern.id)}
                style={{
                  '--card-gradient': intern.gradient,
                  '--card-color': intern.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="card-glow"></div>
                <div className="card-header">
                  <div className="card-avatar" style={{ background: intern.gradient }}>
                    <img src={intern.photos[0]} alt={intern.name} />
                  </div>
                  <div className="card-badge" style={{ background: intern.gradient }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <div className="card-body">
                  <h3 className="card-name">{intern.name}</h3>
                  <p className="card-role">{intern.role}</p>
                  <div className="card-division" style={{ color: intern.color }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {intern.division}
                  </div>
                  <p className="card-bio">{intern.bio}</p>
                </div>

                <div className="card-footer">
                  <span className="view-profile">
                    View Profile
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

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by WIKA Beton Intern 2026</p>
      </footer>
    </div>
  );
}

export default Home;
