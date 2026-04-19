import React from "react";

const testimonialsData = [
  {
    stars: "★★★★★",
    text:
      "StudyNest completely transformed my preparation routine. The silent environment and comfortable seats made it easy to study for 8+ hours without feeling tired.",
    name: "Aman Kumar",
    role: "UPSC Aspirant",
    avatar: "AK"
  },
  {
    stars: "★★★★★",
    text:
      "The AC, fast WiFi and clean space is everything a student needs. I cleared my CA Foundation after 3 months of studying here. Highly recommend!",
    name: "Priya Sharma",
    role: "CA Student",
    avatar: "PS"
  },
  {
    stars: "★★★★★",
    text:
      "Best study space in Jaipur hands down. Staff is friendly, prices are very reasonable and the environment is genuinely peaceful. Zero distractions.",
    name: "Rahul Verma",
    role: "Engineering Student",
    avatar: "RV"
  }
];

function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: "var(--cream-dark)" }}
    >
      <div className="section-header text-center fade-up">
        <div className="section-label">Student Reviews</div>
        <h2 className="section-title">What Our Students Say</h2>
      </div>

      <div className="testimonials-grid">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="testimonial-card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="stars">{item.stars}</div>

            <p>"{item.text}"</p>

            <div className="testimonial-author">
              <div className="author-avatar">{item.avatar}</div>

              <div>
                <div className="author-name">{item.name}</div>
                <div className="author-role">{item.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;