import React from "react";

const Identify = () => {
  return (
    <div className="lg:py-10 py-8">
      <div className="m-auto flex flex-col gap-4 lg:pt-10 lg:p-16  p-5 mt-2 lg:mt-30">
        <p className="text-white text-center font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] m-auto  w-[80%] lg:w-[50%]">
          Let our AI find the best ways to engage & convert your users
        </p>
        <p className="text-center text-[14px] lg:text-[18px] font-normal leading-[28px] text-[#B9B9B9] m-auto w-[70%]">
          Generate Personalized In-App Text, Image, UI at Scale for Millions of
          Users without engineering team
        </p>
      </div>
      <div className="lg:pt-10 pt-1 flex flex-col lg:flex-row justify-center items-center">
        <div className="hidden lg:flex justify-center items-center flex-row">
          <div className="w-[575px] relative">
            <img
              src="https://www.questlabs.ai/assets/mini-segment-RCDnplfN.svg"
              alt="AI generated mini-segments"
              className="w-full"
            />
          </div>
          <div className="w-[580px] lg:ml-10 flex flex-col gap-4">
            <p className="text-white text-xl lg:text-3xl font-medium leading-10 lg:leading-12 tracking-tight">
              AI generated mini-segments to target inactive users
            </p>
            <p className="text-[#939393] text-sm lg:text-base leading-6 lg:leading-7">
              Our analytical models find common traits for users that are not
              active and create segments to activate them.
            </p>
          </div>
        </div>

        <div className="flborder-2 px-10 lg:hidden justify-center flex-col items-center ">
          <div className="w-full p-5  lg:p-12 relative overflow-hidden">
            <img
              src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg"
              alt="AI generated mini-segments"
              className="w-full"
            />
          </div>
          <div className="w-full mt-6 lg:w-[286px] flex flex-col gap-6 items-center">
            <p className="text-white text-2xl lg:text-3xl font-medium leading-8 text-center">
              AI generated mini-segments to target inactive users
            </p>
            <p className="text-[#939393] text-sm lg:text-base leading-6 text-center">
              Our analytical models find common traits for users that are not
              active and create segments to activate them.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse">
        <div className="hidden lg:flex justify-center items-center flex-row-reverse mt-16">
          <div className="w-[575px] relative">
            <img
              src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg"
              alt="AI variants for optimizing"
              className="w-full"
            />
          </div>
          <div className="w-[580px] lg:mr-10 flex flex-col gap-4">
            <p className="text-white text-xl lg:text-3xl font-medium leading-10 lg:leading-12 tracking-tight">
              Our models generate AI variants to optimize text, images, and UI
              layouts for each segment.
            </p>
            <p className="text-[#939393] text-sm lg:text-base leading-6 lg:leading-7">
              Easily find winning variants among millions of variants to power
              users across the customer journey.
            </p>
          </div>
        </div>

        <div className="flex px-10 lg:px-0 lg:hidden justify-center flex-col items-center mt-8">
          <div className="w-full  md:p-12 relative overflow-hidden">
            <img
              src="https://www.questlabs.ai/assets/AiGenerate-JqljUpyB.svg"
              alt="AI variants for optimizing"
              className="w-full"
            />
          </div>
          <div className="w-full mt-6 lg:w-[286px] flex flex-col gap-6 items-center">
            <p className="text-white text-2xl lg:text-3xl font-medium leading-8 text-center">
              Our models generate AI variants to optimize text, images, and UI
              layouts for each segment.
            </p>
            <p className="text-[#939393] text-sm lg:text-base leading-6 text-center">
              Easily find winning variants among millions of variants to power
              users across the customer journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Identify;
