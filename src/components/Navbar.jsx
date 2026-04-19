import { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // 👇 Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <i className="fas fa-book-open"></i>
          </div>
          श्री Shyam<span>Library</span>
        </div>

        <ul className="nav-links">
          <li><a href="#facilities">Facilities</a></li>
          <li><a href="#seats">Seats</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#testimonials">Reviews</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#booking" className="nav-cta">Book Now</a></li>
        </ul>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#facilities" onClick={toggleMenu}>Facilities</a>
        <a href="#seats" onClick={toggleMenu}>Seats</a>
        <a href="#pricing" onClick={toggleMenu}>Pricing</a>
        <a href="#why" onClick={toggleMenu}>Why Us</a>
        <a href="#gallery" onClick={toggleMenu}>Gallery</a>
        <a href="#testimonials" onClick={toggleMenu}>Reviews</a>
        <a href="#contact" onClick={toggleMenu}>Contact</a>
        <a href="#booking" onClick={toggleMenu}>📅 Book Your Seat</a>
      </div>
    </>
  );
};

export default Navbar;