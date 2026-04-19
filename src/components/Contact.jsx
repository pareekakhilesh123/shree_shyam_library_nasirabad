import React from "react";

function Contact() {
  return (
    <section id="contact">
      <div className="section-header fade-up">
        <div className="section-label">Find Us</div>
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-desc">
          Visit us or contact via phone / WhatsApp.
        </p>
      </div>

      <div className="contact-grid">

        {/* LEFT SIDE */}
        <div className="contact-details fade-up">

          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h4>Address</h4>
              <p>
                123, Vaishali Nagar,<br />
                Nasirabad, Rajasthan – 302021
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <div>
              <h4>Phone / WhatsApp</h4>
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:hello@studynest.in">
                hello@studynest.in
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-icon">
              <i className="fas fa-clock"></i>
            </div>
            <div>
              <h4>Opening Hours</h4>
              <p>Mon – Sun: 6:00 AM – 11:00 PM</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE MAP */}
        <div
          className="map-wrap fade-up"
          style={{ transitionDelay: "0.15s" }}
        >
          <iframe
            src="https://www.google.com/maps?q=Vaishali+Nagar+Jaipur&output=embed"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;