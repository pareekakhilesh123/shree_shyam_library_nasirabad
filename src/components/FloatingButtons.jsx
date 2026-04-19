import React, { useEffect, useState } from "react";

function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phone = "919876543210"; // 👉 apna number daal
    const message = "Hello, I want to book a study seat 📚";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* WhatsApp Button */}
      <button className="whatsapp-btn" onClick={openWhatsApp}>
        <i className="fab fa-whatsapp"></i>
      </button>

      {/* Back to Top */}
      <button
        id="backToTop"
        onClick={scrollTop}
        className={visible ? "visible" : ""}
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default FloatingButtons;