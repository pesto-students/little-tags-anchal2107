import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./Carousel.scss";

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="product images" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;

Carousel.propTypes = {
  slides: PropTypes.array,
};

Carousel.defaultProps = {
  slides: [],
};
