import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRigth";

const Hero = () => {
  return (
    <section id="home" data-aos="fade-left" className="flex flex-col lg:flex-row lg:h-[100vh] justify-around px-6 py-12 md:px-16 bg-white gap-12">
      <HeroLeft />
      <HeroRight />
    </section>
  
  );
};

export default Hero;
