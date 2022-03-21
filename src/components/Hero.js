import React from "react";
import hero from "../photos/am-hero.png";
// import heroPhoto from "../photos/6.jpg";
import Navbar from "./Navbar";
const Hero = () => {
  return (
    <div className="h-full w-full" id="inicio">
      <Navbar />
      <div className="object-cover m-0 p-0 w-full relative z-0">
        <img src={hero} alt="wedding" />
      </div>
    </div>
  );
};

export default Hero;
