import React from "react";
import img from "../public/distribution-header-footer.jpg";


const Hero = () => {

  return (
    <section id="hero-1" className=" h-[650px] relative">
      <img
      loading="lazy"
        src={img.src}
        className=" brightness-90 -z-10 h-[700px] w-screen top-0 absolute"
        alt="nth"
      />

      <h1 className="text-white   text-5xl font-bold text-center mt-20 capitalize ">
        <span>Organize all your events in 1 place</span>
      </h1>
    </section>
  );
};

export default Hero;
