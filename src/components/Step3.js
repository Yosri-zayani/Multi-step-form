import React from "react";
import { useState } from "react";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

const AddOn = ({
  isMonthly,
  title,
  description,
  price,
  setSelectedAddons,
  SelectedAddons,
}) => {
  const [active, setActive] = useState(false);

  const handleChange = (event) => {
    if (event.target.checked) {
      setSelectedAddons([...SelectedAddons, { title, price }]);
      setActive(true);
    } else {
      setSelectedAddons(SelectedAddons.filter((item) => item.title !== title));
      setActive(false);
    }
  };

  return (
    <div
      className={`relative w-full h-auto flex items-center p-4 rounded-lg ring-1 ring-gray-400 ${
        active ? " ring-1 ring-purple-500 bg-gray-100" : ""
      } `}
    >
      <input
        className="w-6 h-8 rounded-lg mr-2"
        type="checkbox"
        onChange={handleChange}
      />
      <div className="flex flex-col pl-2 ">
        <div className="text-md font-bold">{title}</div>
        <div className="text-sm text-gray-400 ">{description}</div>
      </div>
      <div className=" text-sm  text-purple-900 absolute end-3">
        {isMonthly ? <div>+${price}/mo</div> : <div>+${price * 10}/yr</div>}
      </div>
    </div>
  );
};

const Step3 = ({
  currentStep,
  setCurrentStep,
  isMonthly,
  setSelectedAddons,
  SelectedAddons,
}) => {
  const Addons = [
    {
      title: "Online Service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      title: "Larger storage",
      description: "Extra  1 1256GB of cloud save",
      price: 2,
    },
    {
      title: "Customizable profile",
      description: "Custom theme  your profile",
      price: 2,
    },
  ];

  return (
    <>
      <div className="mb:hidden">
        {/**Mobile design */}
        <div className="w-[90%] max-w-md bg-white shadow-lg p-6  rounded-lg flex flex-col space-y-4 absolute top-[15%] left-1/2 transform -translate-x-1/2">
          <h1 className=" text-2xl font-bold py-3">Pick add-ons</h1>
          <p className="text-lg text-gray-400">
            Add-ons help enhance your gaming experience.
          </p>
          {Addons.map((addon) => (
            <div key={addon.title} className="">
              <AddOn
                title={addon.title}
                description={addon.description}
                price={addon.price}
                isMonthly={isMonthly}
                setSelectedAddons={setSelectedAddons}
                SelectedAddons={SelectedAddons}
              />
            </div>
          ))}
        </div>
        <div className="w-screen flex absolute  bottom-0 bg-white  py-4 ">
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

      <div className="hidden mb:inline">
        {/*desktop design*/}
        <div className="bg-white space-y-8 inline  rounded-lg w-auto  ">
          <h1 className=" text-2xl font-bold py-3 ">Pick add-ons</h1>
          <p className="text-lg text-gray-400">
            Add-ons help enhance your gaming experience.
          </p>
          {Addons.map((addon) => (
            <div key={addon.title} className="">
              <AddOn
                title={addon.title}
                description={addon.description}
                price={addon.price}
                isMonthly={isMonthly}
                setSelectedAddons={setSelectedAddons}
                SelectedAddons={SelectedAddons}
              />
            </div>
          ))}
           <div className=" flex  relative">
            <div>
          <PreviousButton
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          /></div>
          <div className=" pl-64">
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

export default Step3;
