import React from "react";
import arcadeIcon from "../images/icon-arcade.svg";
import advancedIcon from "../images/icon-advanced.svg";
import ProIcon from "../images/icon-pro.svg";
import ToggleSwitch from "./ToggleSwitch";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const Plan = ({ icon, title, price, isMonthly }) => (
  <div
    tabIndex="0"
    role="button"
    className=" mb:min-w-[10vw] mb:flex-col flex flex-row items-start border rounded-lg py-4 px-4 my-2 focus:bg-gray-50 focus:ring-1 focus:ring-cyan-600 "
  >
    <div className=" ">
      <img src={icon} alt={title} className=" mb:pb-16" />
    </div>
    <div className="flex  flex-col justify-center pl-6  items-start ">
      <span className="font-bold text-lg">{title}</span>
      {isMonthly ? (
        <div className="text-sm text-gray-400">${price}/mo</div>
      ) : (
        <>
          <div className="text-sm text-gray-400">${price * 10}/yr</div>
          <div className="text-sm text-black font-bold ">2 months free</div>
        </>
      )}
    </div>
  </div>
);

const Step2 = ({
  isMonthly,
  setIsMonthly,
  currentStep,
  setCurrentStep,
  setSelectedplan,
}) => {
  const plans = [
    { icon: arcadeIcon, title: "Arcade", price: 9 },
    { icon: advancedIcon, title: "Advanced", price: 12 },
    { icon: ProIcon, title: "Pro", price: 15 },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center  bg-gray-100  mb:hidden ">
        {" "}
        {/**Mobile design */}
        <div className="w-[90%] max-w-md bg-white shadow-lg p-6 max-h-[80vh]  rounded-lg flex flex-col space-y-4 absolute top-[15%] left-1/2 transform -translate-x-1/2">
          <h1 className="text-2xl font-semibold mb-2">Select your plan </h1>
          <p className="text-gray-600 mb-4">
            You have the option of monthly or yearly billing
          </p>
          <div className="flex-col flex">
            {plans.map((plan) => (
              <button
                key={plan.title}
                onClick={() => {
                  setSelectedplan([{ title: plan.title, price: plan.price }]);
                }}
              >
                <Plan
                  icon={plan.icon}
                  title={plan.title}
                  price={plan.price}
                  isMonthly={isMonthly}
                />
              </button>
            ))}
          </div>
          <ToggleSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
        </div>
        <div className="w-screen flex absolute bottom-0 bg-white  py-4 ">
          <PreviousButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <div className=" pl-56 ">
            <NextButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="hidden mb:flex   ">
        {" "}
        {/**Desktop design */}
        <div className="bg-white space-y-8 inline  rounded-lg ">
          <h1 className="text-2xl font-semibold mb-2">Select your plan </h1>
          <p className="text-gray-600 mb-4">
            You have the option of monthly or yearly billing
          </p>
          <div className="flex-row flex space-x-4">
            {plans.map((plan) => (
              <button
                key={plan.title}
                onClick={() => {
                  setSelectedplan([{ title: plan.title, price: plan.price }]);
                }}
              >
                <Plan
                  icon={plan.icon}
                  title={plan.title}
                  price={plan.price}
                  isMonthly={isMonthly}
                />
              </button>
            ))}
          </div>
          <ToggleSwitch isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          <div className="w-full flex   bg-white  py-4  ">
          <PreviousButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          <div className=" pl-56 ">
            <NextButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              className=""
            />
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};
export default Step2;
