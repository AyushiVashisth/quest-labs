import React from "react";
import HeroSection from "./HeroSection";
import Identify from "./Identify";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full relative m-auto overflow-hidden">
      <HeroSection />
      <Identify />
    </div>
  );
};

export default LandingPage;
