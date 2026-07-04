import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const onboardingData = [
  {
    id: 1,
    image: "/images/OnbAni-1.png",
    title: "Track Every Amount",
    description: "Easily record your income and expenses in one place.",
    subText: "Know where your money goes.",
  },
  {
    id: 2,
    image: "/images/OnbAni-2.png",
    title: "Understand Your Spending",
    description:
      "Visualize your spending habits with clear charts and insights.",
    subText: "Make smarter financial decisions.",
  },
  {
    id: 3,
    image: "/images/OnbAni-3.png",
    title: "Achieve Your Financial Goals",
    description:
      "Stay on track, save more and build a better financial future.",
    subText: "Your goals, our priority.",
  },
];

export default function Onboarding() {
  const [currentIndex, setCorrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      setCorrentIndex(currentIndex + 1);
    } else {
      navigate("/auth/login");
    }
  };

  const currentScreen = onboardingData[currentIndex];

  return (
    <section>
      <div className="text-center px-8 py-16  w-full flex flex-col h-screen bg-white lg:bg-green-50 justify-between mx-2 md:my-1 md:mx-2 md:flex-wrap md:border-2 md:border-green-200 md:rounded-4xl md:h-full md:flex lg:gap-10 md:shadow-sm md:hover:shadow-[0_4px_14px_0_rgba(22,163,74,0.39)] md:flex-row md:justify-center md:items-center md:w-70% md:px-8 md:py-10 md:relative lg:mx-40 lg:my-5 lg:h-[600px] lg:w-[1002px] ">
        {/* {steps[count - 1]} */}
        <button className="absolute text-green-600 font-semibold text-sm top-10 right-4 md:absolute md:top-20 md:right-27 md:font-semibold md:text-[18px] ">
          skip
        </button>

        <img
          src={currentScreen.image}
          alt=""
          className="w-[400px] h-[350px] mt-6 mb-4 flex flex-col mb-0 md:w-67.5 md:[300px] lg:w-112.5 lg:h-125 "
        />

        <div className="flex flex-col items-start mt-2 md:w-40% md:h-100%">
          <h1 className="text-[24px] font-semibold mt-0 text-start lg:text-[25px] md:mb-6  ">
            {currentScreen.title}
          </h1>
          <p className="text-[14px] w-55 text-start md:text-[18px] md:w-100% md:mb-6">
            {currentScreen.description}
          </p>
          <p className="text-[16px] font-semibold text-[#52c218] pt-1 md:text-[19px]">
            {currentScreen.subText}
          </p>
          <div className="flex flex-col mt-4 mx-auto">
            <span className="flex justify-center gap-1">
              {onboardingData.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === currentIndex ? "bg-green-600" : "bg-gray-300"
                  } `}
                />
              ))}
            </span>
          </div>
          <button
            onClick={handleNext}
            className="w-full bg-[#52c218] rounded text-white text-[13px] py-3 mt-4"
          >
            {currentIndex === onboardingData.length - 1
              ? "Get Started"
              : "Next"}
          </button>
        </div>
      </div>
    </section>
  );
}
