import React from "react";
import HeroSection from "./HeroSection";
import Identify from "./Identify";
import Layout from "./Layout";
import CustomerReviews from "./CustmerReviews";
import CardComponent from "./CardComponent";
import { cards } from "../assets/data";
import BookCall from "./BookCall";

const LandingPage = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full relative m-auto overflow-hidden">
      <HeroSection />
      <Identify />
      <Layout />
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6">
          {cards.map((card, index) => (
            <CardComponent
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <CustomerReviews />
      <BookCall />
    </div>
  );
};

export default LandingPage;
