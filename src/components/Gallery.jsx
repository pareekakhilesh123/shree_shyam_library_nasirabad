import React, { useState } from "react";

const galleryData = [
  {
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    title: "Study Hall",
    cat: "study",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Ambiance",
    cat: "ambiance",
  },
  {
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80",
    title: "WiFi Setup",
    cat: "facilities",
  },
];

function Gallery() {
  const [filter, setFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredData =
    filter === "all"
      ? galleryData
      : galleryData.filter((item) => item.cat === filter);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % filteredData.length);
  };

  const prev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? filteredData.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery">

      {/* FILTER */}
      <div className="gallery-filter-bar">
        {["all", "study", "facilities", "ambiance"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "filter-btn active" : "filter-btn"}
            onClick={() => {
              setFilter(cat);
              setActiveIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="gallery-masonry">
        {filteredData.map((item, index) => (
          <div
            key={index}
            className="gallery-item"
            onClick={() => setActiveIndex(index)}
          >
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <div
          className="lightbox active"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) {
              setActiveIndex(null);
            }
          }}
        >
          <div className="lightbox-inner">

            <button
              className="lightbox-close"
              onClick={() => setActiveIndex(null)}
            >
              ✕
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={prev}>
              ◀
            </button>

            <button className="lightbox-nav lightbox-next" onClick={next}>
              ▶
            </button>

            <img
              className="lightbox-img"
              src={filteredData[activeIndex].img}
              alt=""
            />

            <div className="lightbox-caption">
              {filteredData[activeIndex].title}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;