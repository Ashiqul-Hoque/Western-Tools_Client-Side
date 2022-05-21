import React from "react";
import "./HeroSection.css";
import heroVideo from "../../../../Assets/hero-video.webm";

const HeroSection = () => {
  return (
    <div>
      <video src={heroVideo} autoPlay loop muted></video>
      <div className="hero-content">
        <h1 className="text-3xl">hello</h1>
      </div>
    </div>
  );
};

export default HeroSection;
