import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SliderCard from "../components/SliderCard";

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 0.5,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.9
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.7
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
    <div className="bg-black text-white py-8">
      <p className="text-center text-[#F6F6F6] text-sm lg:text-base font-bold mb-3">
        CUSTOMER REVIEWS
      </p>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight max-w-[468px] mx-auto mb-1">
        Don’t take our word for it.
      </div>
      <div className="text-center text-white font-figtree text-3xl lg:text-4xl font-medium leading-[46px] tracking-tight max-w-[468px] mx-auto mb-14">
        Trust our customers
      </div>
      <div className="w-full px-4">
        <Slider {...settings}>
          {sliderData.map((item, index) => (
            <div
              key={item.role}
              className="px-2"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <SliderCard
                profileImage={item.profileImage}
                name={item.name}
                role={item.role}
                text={item.text}
                icon=""
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
