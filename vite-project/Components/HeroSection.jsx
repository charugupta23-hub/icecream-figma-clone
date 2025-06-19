import React from "react";
import "./HeroSection.css";
import Navbar from "./Navbar";

function HeroSection({ data, onNext, onPrev }) {
  return (<>
     
    <div
      className="hero"
      style={{ background: data.bgGradient }}
    >
       
      <div className="hero__container">
        
        <div className="hero__left">
          <h1 className="hero__title">icecream</h1>
          <h2 className="hero__subtitle">{data.flavor}</h2>
          <p className="hero__desc">{data.description}</p>
          <div className="hero__minis">
            {data.miniImages.map((src, index) => (
              <img src={src} alt={`mini-${index}`} key={index} />
            ))}
          </div>
        </div>
        <div className="hero__right">
          <img src={data.image} alt="main" className="hero__image" />
        </div>
      </div>

      {/* Navigation Buttons */}
      <button className="nav-button left" onClick={onPrev}>
        ⬅
      </button>
      <button className="nav-button right" onClick={onNext}>
        ➡
      </button>
    </div>
    </>
  );
}

export default HeroSection;
