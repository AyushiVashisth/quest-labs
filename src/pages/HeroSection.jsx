import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full relative m-auto overflow-hidden header-background"
      style={{
        background:
          "linear-gradient(to bottom, #000000,  #000000, #4d328b, #4d328b)"
      }}
    >
      <div className="flex flex-col gap-7 mt-[76px] lg:mt-[136px] ">
        <div style={{ opacity: 1, transform: "none" }}>
          <div
            className="leading-[72px]"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="text-[32px] lg:text-[64px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold font-figtree w-[358px] md:w-[650px] lg:w-[940px] m-auto">
              Transform Your Product with Intelligent In-App Experiences
            </p>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="text-[16px] md:text-lg text-center text-white leading-[26px] mg:leading-7 w-[350px] md:w-[618px] m-auto mt-7">
              Empower growth & Marketing Teams to Boost Engagement and
              Conversion 10x faster without data or engineering team
            </p>
          </div>
          <div
            className="flex flex-col md:flex-row gap-3 items-center justify-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="book-demo flex lg:w-[405px] my-7 py-3 pr-3 pl-[16px] justify-between items-center rounded-xl border border-gray-600 backdrop-blur-sm">
              <input
                className="bg-transparent focus:outline-none text-white w-[200px]"
                type="email"
                name=""
                placeholder="Enter your mail address"
                id=""
              />
              <button className="py-[6px] px-3 text-white text-center font-semibold text-sm leading-[20px] font-figtree rounded-[4px] border border-[#8C43EC] cursor-pointer">
                Book Demo
              </button>
            </div>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="w-[290px] m-auto">
              <p className="text-[#EFEFEF] text-center font-normal text-sm leading-[20px] font-figtree m-auto">
                No credit card required
              </p>
            </div>
          </div>
        </div>
        <div className="min-h-28 md:min-h-52 relative lg:mt-[40px]">
          <div className="w-full px-10 md:px-0 md:w-[80%]  m-auto">
            <img
              src="https://www.questlabs.ai/assets/heroImage-IehvbV8o.svg"
              alt="Evolution of customer engagement"
              className="mt-4 w-full rounded-t-2xl"
              style={{ opacity: 1, transform: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
