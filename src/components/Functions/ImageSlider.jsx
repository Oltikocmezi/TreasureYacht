import React, { useState } from 'react';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurretnIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
         setCurretnIndex(newIndex)
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1 
        setCurretnIndex(newIndex)
    };

    const goToSlide = slideIndex => {
        setCurretnIndex(slideIndex);
    };

    
    
    
    
    const sliderStyles = {
            height: "800px",
            width: "160vh",
            position: "relative",
    };

    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "30px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "30px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "30px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,

    };

    const dotsContainerStyles = {
        position: "absolute",
        bottom: "-30px",
        left: "48%",
        display: "flex",
        jutifyContent: "center",
        alignItems: "center",
    };

    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
        color: "#fff",
    };

    
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>🡰</div>
        <div style={rightArrowStyles} onClick={goToNext}>🡲</div>
        <div style={slideStyles}>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div 
                        key={slideIndex} 
                        style={dotStyles} 
                        onClick={() => goToSlide(slideIndex)}
                    >●</div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ImageSlider;