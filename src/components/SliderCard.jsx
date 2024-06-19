import React from 'react';

const SliderCard = ({ profileImage, name, role, text, icon }) => {
  return (
    <div className="w-[726px] bg-[#18171e] border-[#ffffff12] border-[1px] rounded-[16px]">
      <div className="py-[40px] px-[32px] flex flex-col justify-between h-full">
        <div>
          <p className="pb-[32px] font-normal text-[18px] text-[#D5D4D6]">
            {text}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-[16px]">
            <div>
              <img
                className="w-[56px] h-[56px] rounded-full"
                src={profileImage}
                alt="Profile"
              />
            </div>
            <div>
              <p className="text-[white] text-[20px] font-normal">{name}</p>
              <p className="text-[#D5D4D6] text-[16px] font-normal">{role}</p>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
