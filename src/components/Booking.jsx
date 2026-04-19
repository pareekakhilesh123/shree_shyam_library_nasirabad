import React, { useState } from "react";

function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    slot: "",
    plan: "daily"
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitBooking = () => {
    if (!form.name || !form.phone || !form.date || !form.slot) {
      alert("Please fill all fields");
      return;
    }

    // 👉 WhatsApp message
    const msg = `Booking Details:
Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Slot: ${form.slot}
Plan: ${form.plan}`;

    const whatsappURL = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`;

    window.open(whatsappURL, "_blank");

    setSuccess(true);
  };

  return (
    <section id="booking">
      <div className="booking-wrap">

        {/* LEFT */}
        <div className="booking-info fade-up">
          <div className="section-label" style={{ color: "var(--gold)" }}>
            Reserve Your Spot
          </div>

          <h2 className="section-title">Book Your Study Seat Today</h2>

          <p className="section-desc">
            Fill form & get confirmation on WhatsApp.
          </p>

          <ul className="booking-perks">
            <li><div className="perk-icon">⚡</div> Instant confirmation</li>
            <li><div className="perk-icon">🔄</div> Easy reschedule</li>
            <li><div className="perk-icon">🔒</div> Secure payment</li>
            <li><div className="perk-icon">🎁</div> First session discount</li>
          </ul>
        </div>

        {/* RIGHT FORM */}
        <div
          className="booking-form-card fade-up"
          style={{ transitionDelay: "0.15s" }}
        >
          {!success ? (
            <>
              <h3>📅 Reserve Your Seat</h3>

              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Mobile</label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+91 98765 43210"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Date</label>
                  <input
                    type="date"
                    name="date"
                    className="form-input"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Time Slot</label>
                <select
                  name="slot"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="morning">Morning</option>
                  <option value="afternoon">Afternoon</option>
                  <option value="evening">Evening</option>
                  <option value="fullday">Full Day</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Plan</label>
                <select
                  name="plan"
                  className="form-select"
                  onChange={handleChange}
                >
                  <option value="daily">Daily</option>
                  <option value="fullday">Full Day</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>

              <button className="btn-submit" onClick={submitBooking}>
                Confirm Booking
              </button>
            </>
          ) : (
            <div className="success-msg show">
              <div className="success-icon">✔</div>
              <h4>Booking Confirmed 🎉</h4>
              <p>We will contact you soon on WhatsApp.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Booking;