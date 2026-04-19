import React from "react";

const whyData = [
  {
    icon: "fas fa-brain",
    title: "Deep Focus Environment",
    desc: "Designed to eliminate distractions and improve concentration."
  },
  {
    icon: "fas fa-wallet",
    title: "Affordable Pricing",
    desc: "Premium facilities at student-friendly prices."
  },
  {
    icon: "fas fa-spray-can",
    title: "Clean & Hygienic Space",
    desc: "Regular sanitization and well-maintained environment."
  },
  {
    icon: "fas fa-headset",
    title: "Responsive Support",
    desc: "Friendly staff always ready to help you."
  },
  {
    icon: "fas fa-lock",
    title: "Safe & Secure",
    desc: "CCTV monitored with secure locker facility."
  },
  {
    icon: "fas fa-chart-line",
    title: "Proven Results",
    desc: "Hundreds of students achieved success here."
  }
];

function Why() {
  return (
    <section id="why">
      <div className="section-header text-center fade-up">
        <div className="section-label">Why StudyNest</div>
        <h2 className="section-title">Built for Serious Learners</h2>
        <p className="section-desc">
          Everything we do is designed to maximize your study productivity.
        </p>
      </div>

      <div className="why-grid">
        {whyData.map((item, index) => (
          <div
            key={index}
            className="why-card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="why-icon">
              <i className={item.icon}></i>
            </div>

            <div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Why;