import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { onboardingData } from "../constants";
import StepIndicators from "../components/StepIndicators";

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const isLastScreen = currentIndex === onboardingData.length - 1;
  const currentScreen = onboardingData[currentIndex];

  const handleNext = () => {
    if (!isLastScreen) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="min-h-screen p-4 flex flex-col justify-between max-w-md mx-auto md:max-w-2xl md:justify-center">
      <div className="w-full text-right">
        {!isLastScreen && (
          <Link
            to="/auth/login"
            className="text-xs font-medium text-brand hover:underline transition-all"
          >
            Skip
          </Link>
        )}
      </div>

      <main className="flex-1 flex flex-col justify-center items-center my-auto md:flex-row md:gap-8 md:w-full">
        <div className="max-w-64 h-64 flex items-center justify-center overflow-hidden mb-6 md:mb-0 md:w-1/2">
          <img
            src={currentScreen.image}
            alt={currentScreen.title}
            className="w-full h-full object-contain transition-all duration-300 transform object-top scale-80"
          />
        </div>

        <div className="flex flex-col md:items-start md:text-left md:w-1/2">
          <h1 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
            {currentScreen.title}
          </h1>
          <p className="text-[12px] text-gray-500 mb-2 max-w-xs md:max-w-none">
            {currentScreen.description}
          </p>
          {currentScreen.subText && (
            <p className="text-[12px] font-normal text-brand mb-6">
              {currentScreen.subText}
            </p>
          )}

          <StepIndicators
            total={onboardingData.length}
            current={currentIndex}
          />
        </div>
      </main>

      <footer className="w-full mt-6">
        <button
          type="button"
          onClick={handleNext}
          className="w-full bg-brand hover:bg-brand-dark text-white font-medium text-sm py-3 px-4 rounded-lg shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        >
          {isLastScreen ? "Get Started" : "Next"}
        </button>
      </footer>
    </div>
  );
}
