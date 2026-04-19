import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import Seats from "./components/Seats";
import Pricing from "./components/Pricing";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Herostats from './components/Herostats';
import Why from './components/Why';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import FloatingButtons from './components/FloatingButtons';

function App() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Herostats/>
      
      <Facilities />
      <Seats />
      <Why />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Booking />
      <Contact />
      <Footer />
      <BackToTop />
      <FloatingButtons />
    </>
  );
}

export default App;