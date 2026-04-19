import React from 'react'

function Hero() {
  return (
      <section id="hero">
    <div className="hero-bg"></div>
    <div className="hero-grid-overlay"></div>
    <div className="hero-content">
      <div className="hero-badge"><i className="fas fa-star"></i> Nasirabad's Premier Study Space</div>
      <h1 className="hero-title">Peaceful Study Library for <span className="accent">Focused Learning</span></h1>
      <p className="hero-sub">
        Step into a calm, distraction-free environment designed for serious learners. Everything you need to study at your best — all in one place.
      </p>
      <div className="hero-pills">
        <span className="hero-pill"><i className="fas fa-wifi"></i> Free High-Speed WiFi</span>
        <span className="hero-pill"><i className="fas fa-snowflake"></i> Air Conditioned</span>
        <span className="hero-pill"><i className="fas fa-tint"></i> RO Water</span>
        <span className="hero-pill"><i className="fas fa-couch"></i> Comfortable Seating</span>
      </div>
      <div className="hero-cta-group">
        <a href="#booking" className="btn-primary"><i className="fas fa-calendar-check"></i> Book Your Seat</a>
        <a href="#facilities" className="btn-secondary"><i className="fas fa-arrow-right"></i> Explore Facilities</a>
      </div>
    </div>
  </section>
  )
}

export default Hero