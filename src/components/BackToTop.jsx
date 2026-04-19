import React, { useEffect, useState } from "react";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="backToTop"
      onClick={scrollTop}
      className={visible ? "visible" : ""}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default BackToTop;