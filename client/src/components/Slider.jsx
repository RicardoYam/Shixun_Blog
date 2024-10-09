import React, { useState, useEffect } from "react";
import "./Slider.css"; // You'll need to create this CSS file

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className="slider-buttons">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-button ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
