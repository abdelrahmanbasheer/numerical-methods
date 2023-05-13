import React from "react";

const LowerHero = () => {

  return (
    <section id="hero-2" className="bg-gray-100  h-full">
      <h1 className="text-center text-5xl font-bold  p-12 mb-5">
        <span>Welcome To Nazamly</span>{" "}
      </h1>
      <div className="bg-lowerhero brightness-75 bg-no-repeat bg-fill h-[800px] relative">
        <p className="text-5xl p-7 left-[10%] top-[30%] text-white font-bold absolute">
          <span
            className={`
          text-[21px] mt-[1rem] leading-[36px] tracking-[3px]`}
          >
            Our Vision:{""}
            <br />
            Our event management website is designed to simplify the process of
            planning, organizing and managing events of all sizes. Our vision is
            to provide a comprehensive platform that brings together event
            planners, vendors, and attendees, allowing them to seamlessly
            collaborate and communicate with each other.
          </span>
        </p>
      </div>
    </section>
  );
};

export default LowerHero;
