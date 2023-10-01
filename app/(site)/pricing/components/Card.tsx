"use client"

import React from "react";

interface CardProps {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, price, features, buttonText, onClick }) => {
  return (
    <div className="p-[3px] bg-gradient-to-b from-[#4B4B4B] to-[black] rounded-xl max-w-[500px] min-h-[560px] sm:min-h-max">
      <div className="bg-gradient-to-b from-[#242424] to-black h-full p-7 rounded-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-6 border-b border-[#454545] pb-6">
            {/* Add the icon/image here */}
            <div className="border border-[#F6844B] p-3 rounded-lg">
              {/* Add your icon/image component */}
            </div>
            <div className="">
              <h1 className="text-[#FFFFFFCC] font-semibold">{title}</h1>
              <p className="flex text-[32px] h-10 gap-1 font-extrabold text-primary-red">
                <span className="self-start text-[12px] mt-2 font-semibold">$</span>
                {price}
                <span className="self-end text-[12px] font-medium text-[#FFFFFFCC]">
                  /month
                </span>
              </p>
            </div>
          </div>
          <div className="p-6">
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="list-disc text-[#FFFFFFCC]">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          onClick={onClick}
          className="capitalize mt-6 text-white font-semibold w-full py-3 bg-gradient-to-r from-primary-red to-primary-yellow rounded-lg hover:bg-primary-red/[0.05] transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
