import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-b from-black via-black to-purple-900">
      <div className="flex flex-col gap-7 mt-[76px] lg:mt-[136px]">
        <div data-aos="fade-up" data-aos-delay="400">
          <h1 className="text-[32px] lg:text-[64px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold w-[90%] md:w-[75%] lg:w-[70%] m-auto">
            Transform Your Product with Intelligent In-App Experiences
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-[16px] md:text-lg text-center text-white leading-[26px] md:leading-7 w-[350px] md:w-[618px] m-auto mt-7">
            Empower growth & Marketing Teams to Boost Engagement and Conversion
            10x faster without data or engineering team
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row gap-3 items-center justify-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="book-demo flex lg:w-[405px] my-7 py-3 pr-3 pl-[16px] justify-between items-center rounded-xl border border-gray-600 backdrop-blur-sm">
            <input
              className="bg-transparent focus:outline-none text-white w-[200px]"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="py-[6px] px-3 text-white text-center font-semibold text-sm leading-[20px] rounded-[4px] bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-700 hover:to-indigo-700 transition duration-300">
              Book Demo
            </button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-[#EFEFEF] text-center font-normal text-sm leading-[20px]">
            No credit card required
          </p>
        </div>
        <div
          className="min-h-28 md:min-h-52 relative lg:mt-[40px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-full px-10 md:px-0 md:w-[80%] m-auto">
            <img
              src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg"
              alt="Evolution of customer engagement"
              className="mt-4 w-full rounded-t-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
