import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-inner">

        {/* LOGO */}
        <div className="footer-logo">
        श्री   Shyam <span>Library</span>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <a href="#facilities">Facilities</a>
          <a href="#gallery">Gallery</a>
          <a href="#pricing">Pricing</a>
          <a href="#booking">Book Seat</a>
          <a href="#contact">Contact</a>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-copy">
          © {year}  श्री  Shyam Library. All rights reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;