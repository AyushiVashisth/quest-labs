import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BookCall = () => {
  const aosRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      if (aosRef.current) {
        const topPosition = aosRef.current.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (topPosition < screenHeight) {
          AOS.refresh();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={aosRef}
      className="w-full relative m-auto overflow-hidden header-background"
      style={{
        background: "linear-gradient(to bottom, #000000, #000000, #4d328b)"
      }}
    >
      <div className="flex flex-col gap-7 mt-[50px] lg:mt-[136px] mb-12">
        <div data-aos="fade-up">
          <div className="leading-[72px]">
            <p className="text-[26px] lg:text-[46px] text-[#FFF] text-center leading-[54px] lg:leading-[72px] font-semibold font-figtree w-[80%] md:w-[90%] lg:w-[60%] m-auto">
              Let's make sure your customers are getting the best experience
              possible
            </p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <p className="text-[16px] md:text-lg text-center text-white leading-[26px] md:leading-7 w-[350px] md:w-[618px] m-auto mt-3">
              Create your account for free or book a demo today!
            </p>
          </div>
          <div
            className="flex items-center justify-center mt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-2 px-6 rounded-full transition duration-300 text-sm">
              Book A Call Today!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;
