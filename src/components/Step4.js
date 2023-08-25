import React, { useState, useEffect } from "react";
import PreviousButton from "./PreviousButton";

const Step4 = ({
  currentStep,
  setCurrentStep,
  SelectedPlan,
  isMonthly,
  SelectedAddons,
}) => {
  const [total, setTotal] = useState(0);
  const uniqueAddons = SelectedAddons.filter(
    (addon, index, self) =>
      index === self.findIndex((a) => a.title === addon.title)
  );
  useEffect(() => {
    let planPrice = 0;
    if (SelectedPlan.length > 0) {
      planPrice = SelectedPlan[0].price; // Assuming you have only one selected plan
    }

    const addonsPrice = uniqueAddons.reduce(
      (total, addon) => total + addon.price,
      0
    );
    const totalPrice = planPrice + addonsPrice;
    setTotal(totalPrice);
  }, [SelectedPlan, uniqueAddons]);

  const renderPlanPrice = (price) => {
    if (isMonthly) {
      return <div>${price}/mo</div>;
    } else {
      return <div>${price * 10}/yr</div>;
    }
  };

  return (
    <div className="">
      <div className=" mb:hidden w-[90%] max-w-md bg-white shadow-lg p-6 rounded-lg flex flex-col space-y-4 absolute top-[15%] left-1/2 transform -translate-x-1/2"> {/**Mobile display */}
        <h1 className="text-xl font-bold">Finishing Up</h1>
        <p className="text-gray-500">
          Double-check everything looks OK before confirming.
        </p>

        <div className="bg-gray-100 rounded-lg p-4">
          {SelectedPlan.map((plan) => (
            <div className="text-blue-900" key={plan.title}>
              {plan.title} {isMonthly ? "(Monthly)" : "(Yearly)"}
              <div className="flex relative">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="underline text-gray-500"
                >
                  Change
                </button>
                <div className="bottom-3 items-center font-bold absolute end-0">
                  {renderPlanPrice(plan.price)}
                </div>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          {uniqueAddons.map((addon) => (
            <div className="relative flex" key={addon.title}>
              <div className="text-gray-500">{addon.title}</div>
              <div className="absolute end-0">
                {renderPlanPrice(addon.price)}
              </div>
            </div>
          ))}
        </div>

        {/* Display the total */}
        <div className="text-gray-500 flex w-full relative p-4 ">
          Total{" "}
          {isMonthly ? (
            <div className="">
              {" "}
              (per month){" "}
              <div className=" absolute end-4 text-blue-700 text-lg font-bold bottom-3">
                ${total}/mo
              </div>{" "}
            </div>
          ) : (
            <div className="">
              {" "}
              (per year)
              <div className=" absolute end-4 text-blue-700 text-lg font-bold bottom-3">
                {" "}
                ${total * 10}/yr
              </div>{" "}
            </div>
          )}
        </div>
      </div>

      <div className="w-screen flex absolute bottom-0 bg-white py-4 mb:hidden"> 
        <PreviousButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="w-28 h-8 bg-[#02295a] rounded-md text-white text-center ">
          <button className=" pr-3"
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      <div className="bg-white space-y-8   rounded-lg w-auto hidden mb:inline "> {/**desktop display */}
        <h1 className="text-xl font-bold">Finishing Up</h1>
        <p className="text-gray-500">
          Double-check everything looks OK before confirming.
        </p>

        <div className="bg-gray-100 rounded-lg p-4">
          {SelectedPlan.map((plan) => (
            <div className="text-blue-900" key={plan.title}>
              {plan.title} {isMonthly ? "(Monthly)" : "(Yearly)"}
              <div className="flex relative">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="underline text-gray-500"
                >
                  Change
                </button>
                <div className="bottom-3 items-center font-bold absolute end-0">
                  {renderPlanPrice(plan.price)}
                </div>
              </div>
            </div>
          ))}
          <hr className="my-4" />
          {uniqueAddons.map((addon) => (
            <div className="relative flex" key={addon.title}>
              <div className="text-gray-500">{addon.title}</div>
              <div className="absolute end-0">
                {renderPlanPrice(addon.price)}
              </div>
            </div>
          ))}
        </div>

        {/* Display the total */}
        <div className="text-gray-500 flex w-full relative p-4 ">
          Total{" "}
          {isMonthly ? (
            <div className="">
              {" "}
              (per month){" "}
              <div className=" absolute end-4 text-blue-700 text-lg font-bold bottom-3">
                ${total}/mo
              </div>{" "}
            </div>
          ) : (
            <div className="">
              {" "}
              (per year)
              <div className=" absolute end-4 text-blue-700 text-lg font-bold bottom-3">
                {" "}
                ${total * 10}/yr
              </div>{" "}
            </div>
          )}
        </div>
      
        <div className=" flex  bg-white py-4">
        <PreviousButton
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="w-28 h-8 bg-[#02295a] rounded-md text-white text-center ">
          <button className=" pr-3"
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
      </div>


    </div>
  );
};

export default Step4;
