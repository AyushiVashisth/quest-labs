import React from "react";

const SliderCard = ({ profileImage, name, role, text, icon }) => {
  return (
    <div className="bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px] p-6 lg:p-8">
      <div className="pb-6 lg:pb-8">
        <p className="text-sm lg:text-base text-[#D5D4D6] leading-[24px] lg:leading-[28px]">
          {text}
        </p>
      </div>
      <div className="flex items-center">
        <img
          className="w-14 h-14 lg:w-16 lg:h-16 rounded-full mr-4"
          src={profileImage}
          alt="Profile"
        />
        <div>
          <p className="text-white text-lg lg:text-xl font-normal leading-[24px] lg:leading-[28px]">
            {name}
          </p>
          <p className="text-[#D5D4D6] text-sm lg:text-base font-normal leading-[18px] lg:leading-[20px]">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
