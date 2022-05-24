import React from "react";
import "./HeroSection.css";
import heroVideo from "../../../../Assets/hero-video.webm";

const HeroSection = () => {
  return (
    <div>
      <video src={heroVideo} autoPlay loop muted></video>
      <div className="hero-content md:w-1/2 ">
        <h1 className="md:text-3xl text-xl text-red-600 font-bold ">
          PRIDE BEGINS WITH THE QUALITY OF THE PRODUCT
        </h1>
        <p className="text-white text-lg">
          Western Tools Co.'s tools are tested in real-world situations to make
          sure they exceed your expectations. You can depend on us for products
          that work as hard as you do.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
