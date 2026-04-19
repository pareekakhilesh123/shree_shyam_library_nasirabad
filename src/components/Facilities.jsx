import React from "react";

const facilitiesData = [
  {
    icon: "fas fa-wifi",
    title: "Free High-Speed WiFi",
    desc: "Blazing-fast, stable internet connection..."
  },
  {
    icon: "fas fa-snowflake",
    title: "Air Conditioned Rooms",
    desc: "Perfectly temperature-controlled study halls..."
  },
  {
    icon: "fas fa-tint",
    title: "RO Purified Water",
    desc: "Stay hydrated with clean RO water..."
  },
  {
    icon: "fas fa-couch",
    title: "Comfortable Seating",
    desc: "Ergonomic chairs for long study sessions..."
  },
  {
    icon: "fas fa-volume-mute",
    title: "Silent Environment",
    desc: "No noise, just focus and productivity..."
  },
  {
    icon: "fas fa-plug",
    title: "Charging Points",
    desc: "Power sockets at every desk..."
  }
];

function Facilities() {
  return (
    <section id="facilities">
      <div className="section-header text-center fade-up">
        <div className="section-label">What We Offer</div>
        <h2 className="section-title">World-Class Study Facilities</h2>
        <p className="section-desc">
          Every amenity is thoughtfully provided so you can focus entirely on what matters — your studies.
        </p>
      </div>

      <div className="facilities-grid">
        {facilitiesData.map((item, index) => (
          <div
            key={index}
            className="facility-card fade-up"
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            <div className="facility-icon-wrap">
              <i className={item.icon}></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Facilities;