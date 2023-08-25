import React from "react";

import NextButton from "./NextButton";

const Step1 = ({ currentStep, setCurrentStep }) => {
  return (
    <>
      <div className=" mb:hidden min-h-screen flex flex-col  bg-gray-100 "> {/*mobile design */}
     <div className="  w-[90%] max-w-md bg-white shadow-lg p-6  rounded-lg flex flex-col space-y-4 absolute top-[15%] left-1/2 transform -translate-x-1/2">
          {" "}
          {/* Adjusted positioning */}
          <h1 className="text-xl font-semibold">Personal Info</h1>
          <p className="text-gray-600">
            Please provide your name, email address, and phone number
          </p>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              placeholder="e.g Stephen King"
              className="mt-1 w-full p-2 border rounded-md"
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              placeholder="e.g StephenKing@lorem.com"
              className="mt-1 w-full p-2 border rounded-md"
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              placeholder="e.g +1 234 567 890"
              className="mt-1 w-full p-2 border rounded-md"
            ></input>
          </div>
        </div>
        <div className="w-screen flex absolute bottom-0 bg-white  py-4 ">
          <div className=" pl-[70%]">
            <NextButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              className=""
            />{" "}
          </div>
        </div>
      </div>







      <div className=" hidden  mb:inline  bg-gray-100 "> {/*desktop design */}
     <div className="  bg-white space-y-8   rounded-lg ">
          <h1 className="text-3xl font-semibold text-[#02295a]">Personal Info</h1>
          <p className="text-gray-400">
            Please provide your name, email address, and phone number
          </p>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              placeholder="e.g Stephen King"
              className="mt-1 w-full p-2 border rounded-md hover:cursor-pointer"
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Email Address
            </label>
            <input
              placeholder="e.g StephenKing@lorem.com"
              className="mt-1 w-full p-2 border rounded-md  hover:cursor-pointer"
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              placeholder="e.g +1 234 567 890"
              className="mt-1 w-full p-2 border rounded-md  hover:cursor-pointer"
            ></input>
          </div>
        </div>
        <div className="w-full flex   bg-white  py-4 ">
          <div className=" pl-[75%] pt-4 mt-4">
            <NextButton
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
