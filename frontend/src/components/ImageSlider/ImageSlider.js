import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: "/Asset/slider1.jpeg",
    },
    {
      id: 2,
      image: "/Asset/slider2.jpeg",
    },
    {
      id: 3,
      image: "/Asset/slider3.jpeg",
    },
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <section className="image-slider-container">
      <div className="image-slider">
        {/* Slides */}
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === currentSlide ? "active" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="slider-arrow prev-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="slider-arrow next-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Dots Navigation */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
