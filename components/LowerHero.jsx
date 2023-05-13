import React from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

import img1 from "../public/icon-1.png";
import img2 from "../public/icon-2.png";
import img3 from "../public/icon-3.png";
import img4 from "../public/icon-4.png";
import img5 from "../public/icon-5.png";
import img6 from "../public/icon-6.png";
import img7 from "../public/icon-7.png";
import img8 from "../public/icon-8.png";
import img9 from "../public/icon-9.png";
import img10 from "../public/icon-10.png";
import img11 from "../public/icon-11.png";
import img12 from "../public/icon-12.png";

const LowerHero = () => {
  // const { ref: firstRef, inView: first } = useInView();
  // const { ref: secondRef, inView: second } = useInView();
  // const { ref: thirdRef, inView: Third } = useInView();
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
      <div className="bg-gray-950 p-5">
        <h1
          className={`text-center text-white font-bold text-4xl
             
           `}
        >
          Meet Our Favourite Customers
        </h1>
        {/* <ul className={`flex gap-20 justify-between p-10 flex-wrap`}>
          <li className={`p-5 `}>
            <Image loading="lazy" src={img1} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img2} width={100} height={50} alt={""} />
          </li>

          <li className="p-5">
            <Image loading="lazy" src={img3} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img4} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img5} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img6} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img7} width={100} height={50} alt={""} />
          </li>
          <li className="p-5">
            <Image loading="lazy" src={img8} width={100} height={50} alt={""} />
          </li>
          <li className="p-2">
            <Image loading="lazy" src={img9} width={100} height={50} alt={""} />
          </li>
          <li className="p-2">
            <Image loading="lazy" src={img10} width={100} height={50} alt={""} />
          </li>
          <li className="p-2">
            <Image loading="lazy" src={img11} width={100} height={50} alt={""} />
          </li>
          <li className="p-2">
            <Image loading="lazy" src={img12} width={100} height={50} alt={""} />
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default LowerHero;
