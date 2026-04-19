import React from 'react';

function Herostats() {
  return (
    <div
      style={{
        background: "var(--navy)",
        padding: "2.2rem 5vw",
        display: "flex",
        gap: "2.5rem",
        flexWrap: "wrap",
        justifyContent: "space-around"
      }}
    >
      <div className="hero-stat fade-up">
        <div className="hero-stat-num">500+</div>
        <div className="hero-stat-label">Happy Students</div>
      </div>

      <div className="hero-stat fade-up" style={{ transitionDelay: "0.1s" }}>
        <div className="hero-stat-num">30</div>
        <div className="hero-stat-label">Comfortable Seats</div>
      </div>

      <div className="hero-stat fade-up" style={{ transitionDelay: "0.2s" }}>
        <div className="hero-stat-num">3</div>
        <div className="hero-stat-label">Time Slots Daily</div>
      </div>

      <div className="hero-stat fade-up" style={{ transitionDelay: "0.3s" }}>
        <div className="hero-stat-num">100%</div>
        <div className="hero-stat-label">Silent Environment</div>
      </div>
    </div>
  );
}

export default Herostats; 
