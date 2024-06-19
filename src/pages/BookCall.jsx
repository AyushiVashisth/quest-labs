import React from "react";

const BookCall = () => {
  return (
    <div className="w-full relative m-auto overflow-hidden header-background" style={{
      background:
        "linear-gradient(to bottom, #000000,  #000000,  #4d328b)"
    }}>
      <div className="flex flex-col gap-7 mt-[136px] mb-12">
        <div style={{ opacity: 1, transform: "none" }}>
          <div
            className="leading-[72px]"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="text-[32px] lg:text-[46px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold font-figtree w-[358px] md:w-[650px] lg:w-[940px] m-auto">
              Let's make sure your customers are getting the best experience
              possible
            </p>
          </div>
          <div style={{ opacity: 1, transform: "none" }}>
            <p className="text-[16px] md:text-lg text-center text-white leading-[26px] mg:leading-7 w-[350px] md:w-[618px] m-auto mt-3">
              Create your account for free or book a demo today!
            </p>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-2 px-4 rounded transition duration-300 text-sm">
              Book A Call Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
