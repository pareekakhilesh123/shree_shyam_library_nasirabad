import React from "react";

function Seats() {

  // 👇 Seat data (dummy for now)
  const totalSeats = 30;
  const availableSeats = [2, 5, 8, 12, 15, 18, 22, 27]; // available seat numbers

  return (
    <section id="seats">
      <div className="seats-inner">

        {/* LEFT SIDE */}
        <div className="seats-info fade-up">
          <div className="section-label" style={{ color: "var(--gold)" }}>
            Seat Availability
          </div>

          <h2 className="section-title">
            Limited Seats Available — Reserve Yours Today
          </h2>

          <p className="section-desc">
            We maintain a small, distraction-free study environment.
          </p>

          <div className="availability-badge">
            <span className="availability-dot"></span>
            {availableSeats.length} seats currently available
          </div>

          <ul className="timings-list">
            <li><i className="fas fa-sun"></i> Morning: 6AM – 12PM</li>
            <li><i className="fas fa-cloud-sun"></i> Afternoon: 12PM – 6PM</li>
            <li><i className="fas fa-moon"></i> Evening: 6PM – 11PM</li>
            <li><i className="fas fa-clock"></i> Full Day: 6AM – 11PM</li>
          </ul>

          <a
            href="#booking"
            className="btn-primary"
            style={{ display: "inline-flex", marginTop: "0.5rem" }}
          >
            <i className="fas fa-calendar-check"></i> Book a Seat Now
          </a>
        </div>

        {/* RIGHT SIDE (SEAT GRID) */}
        <div
          className="seat-visual fade-up"
          style={{ transitionDelay: "0.15s" }}
        >
          <div className="seat-grid-title">Live Seat View — Today</div>

          <div className="seat-grid">
            {Array.from({ length: totalSeats }, (_, i) => {
              const seatNumber = i + 1;
              const isAvailable = availableSeats.includes(seatNumber);

              return (
                <div
                  key={seatNumber}
                  className={`seat ${
                    isAvailable ? "available" : "occupied"
                  }`}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>

          <div className="seat-legend">
            <span>
              <span className="legend-dot oc"></span>Occupied
            </span>
            <span>
              <span className="legend-dot av"></span>Available
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Seats;