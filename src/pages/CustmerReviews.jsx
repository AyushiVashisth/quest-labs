import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../components/SliderCard";
const CustomerReviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1400,
    slidesToShow: 1.9,
    slidesToScroll: 0.05,
    autoplay: true,
    autoplaySpeed: 1400,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2
        }
      }
    ]
  };
  const sliderData = [
    {
      profileImage: "https://www.questlabs.ai/assets/lee-3__Hgx2Q.png",
      name: "Lee Gray",
      text: `Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged, artists more connected, and our platform thrive like never before.`,
      role: "Founder"
    },
    {
      profileImage: " https://www.questlabs.ai/assets/sriya-W519CsRs.jpg",
      name: "Sariya Maram",
      text: `Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged, artists more connected, and our platform thrive like never before.`,
      role: "Founder"
    },
    {
      profileImage: " https://www.questlabs.ai/assets/kevin-2EGjEzBI.jpg",
      name: "Kevin",
      text: `Quest didn't just connect our data; it gave life to our otherwise static platform. Understanding their journey and preferences has changed how we approach every feature on Sonx. We've seen fans more engaged, artists more connected, and our platform thrive like never before.`,
      role: "Co-founder"
    }
  ];
  return (
    <div className="sliderCard my-8">
      <p className="linearText text-center text-[#F6F6F6] font-Figtree text-[14px] font-bold leading-5 tracking-[0.28px] mb-3">
        CUSTOMER REVIEWS
      </p>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight lg:w-[468px] w-[350px] m-auto mb-1">
        Don’t take our word for it.
      </div>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight lg:w-[468px] w-[350px] m-auto mb-14">
        Trust our customers
      </div>
      <div className="w-full pb-5">
        <Slider {...settings}>
          {sliderData.map((item) => (
            <SliderCard
              key={item?.role}
              profileImage={item?.profileImage}
              name={item?.name}
              role={item?.role}
              text={item?.text}
              icon=""
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
