import React from "react";

const CardComponent = ({ title, description, icon }) => {
  return (
    <div className="p-6 border border-[transparent] rounded-3xl relative overflow-hidden text-center bg-[#151515]">
      <div className="flex items-center justify-center mb-4">
        <div className="text-[white]  p-3 rounded-full border-2">{icon}</div>
      </div>
      <h2 className="text-white text-2xl mt-6 relative z-10">{title}</h2>
      <p className=" text-[#939393] text-sm lg:text-[16px] mt-3 relative z-10">
        {description}
      </p>
      <div className="w-[200%] h-80 bg-[#a1aee505] -rotate-[60deg] rounded-lg absolute top-1/2 -right-2/3 z-0"></div>
    </div>
  );
};

export default CardComponent;
