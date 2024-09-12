import React from "react";
import Button from "./Button";
import shoes from "../images/my-shoes.png";

const Home = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center p-6 mx-auto md:flex-row md:justify-between md:p-0">
      <div className="flex flex-col justify-center mx-3 text-center text-white md:w-1/2 md:text-left lg:pt-0 lg:pb-0 lg:pl-12">
        <h1 className="text-4xl italic font-bold text-center md:text-6xl lg:text-8xl">
          YOUR FEET
          <br />
          DESERVE
          <br />
          THE BEST
        </h1>
        <p className="mt-3 text-sm italic md:text-base lg:text-lg text-wrap">
          "To wear dreams on one's feet is to begin to give a reality to one's
          dreams."
        </p>
        <div className="flex items-center justify-center mt-6 space-x-10 hero-buttons">
          <Button>SHOP NOW</Button>
          <Button>CATEGORY</Button>
        </div>
      </div>
      <div className="relative flex items-center justify-center w-full md:w-1/2">
        <div className="absolute bubbles">
          <span></span>
        </div>
        <div className="absolute bubbles2">
          <span></span>
        </div>
        <div className="absolute bubbles3">
          <span></span>
        </div>
        <img
          className="object-contain md:w-full sm:w-40 sm:h-40 md:h-auto lg:h-[545px]"
          src={shoes}
          alt="shoes"
        />
      </div>
    </div>
  );
};

export default Home;
