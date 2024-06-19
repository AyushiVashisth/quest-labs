import React from "react";

const Layout = () => {
  return (
    <div
      div
      className="lg:px-0 px-10 py-16"
      style={{
        background:
          "linear-gradient(to right, #4d328b, #000000,#000000,#000000,  #000000,  #000000, #4d328b)"
      }}
    >
      <div className="m-auto flex flex-col gap-4 mb-[40px] lg:mb-[80px] py-5">
        <p className="linearText text-center text-[#F6F6F6] text-[14px] font-bold leading-5 tracking-[0.28px]">
          FEATURES
        </p>
        <p className="text-white text-center font-medium text-[30px] lg:text-5xl leading-[40px] lg:leading-[56px] -tracking-[0.96px] font-figtree m-auto">
          Robust & Scalable Platform & SDKs
        </p>
        <p className="text-center text-[14px] lg:text-[18px] font-normal leading-[28px] text-[#B9B9B9] m-auto">
          Low-Code Dashboard, SDKs & APIs to drive product growth
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full m-auto max-w-[1200px] overflow-hidden">
        <div className="w-full md:w-[42%] relative rounded-[24px] border border-[rgba(201,201,201,0.12)] bg-[#202020] flex flex-col justify-between mb-6 md:mb-0">
          <img
            src="https://www.questlabs.ai/assets/image1-y7VvY8jh.svg"
            alt=""
            className="w-full"
          />
          <div className="px-8 py-6">
            <p className="text-[#E0E0E0] text-center font-figtree leading-[30px] tracking-tight sm:text-xl sm:leading-[30px] sm:tracking-[-0.4px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.48px] lg:font-semibold">
              Enterprise-Grade SDKs
            </p>
            <p className="text-[#939393] text-center font-figtree text-[12px] md:text-[14px] font-normal leading-[20px] mt-2">
              Build on a solid foundation with our robust SDKs, designed for
              scalability and performance.
            </p>
          </div>
        </div>

        <div className="rounded-[24px] border border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-[58%] flex flex-col justify-between ">
          <img
            src="https://www.questlabs.ai/assets/image2-0qa_GPAl.svg"
            alt=""
            className="w-full"
          />
          <div className="px-8 py-6">
            <p className="text-[#E0E0E0] text-center font-figtree leading-[30px] tracking-tight sm:text-xl sm:leading-[30px] sm:tracking-[-0.4px] lg:text-2xl lg:leading-[32px] lg:tracking-[-0.48px] lg:font-semibold">
              Fully Customizable to your Brand
            </p>
            <p className="text-[#939393] text-center font-figtree text-[12px] md:text-[14px] max-w-[350px] m-auto font-normal leading-[20px] mt-2">
              Your brand, your way—personalize every aspect of your platform to
              stand out.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] m-auto flex flex-col md:flex-row gap-6 mt-6 overflow-hidden">
        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <img
            src="https://www.questlabs.ai/assets/image3-m-7EaNFv.svg"
            alt=""
            className="rounded-3xl w-full"
          />
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Plug & Play with Pre-Built Templates
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Jumpstart your project using 100s of customizable templates for a
              seamless user experience.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <img
            src="https://www.questlabs.ai/assets/image4-HZbCJwM5.svg"
            alt=""
            className="rounded-3xl w-full"
          />
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Unlock AI-Powered Insights
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Leverage advanced analytics to drive data-driven decisions and
              foster growth.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border-[rgba(201,201,201,0.12)] bg-[#202020] w-full md:w-1/3">
          <img
            src="https://www.questlabs.ai/assets/image5-67XH74ID.svg"
            alt=""
            className="rounded-3xl w-full"
          />
          <div className="px-8 py-6">
            <p className="text-center font-figtree text-[#FFF] text-xl font-semibold">
              Stay Updated in Slack
            </p>
            <p className="text-center font-figtree text-[#939393] text-sm mt-2">
              Trigger Slack alerts to your team and automatically detect key
              intent signals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
