import React from "react";
import Thankyou from "../images/icon-thank-you.svg";
const ThankYou = () => {
  let Mobile = (window.innerWidth < 450);
  return (
    
    
    <div className={`${Mobile ? "py-28 w-[90%] max-w-md bg-white shadow-lg p-6 max-h-[80vh] text-center items-center  rounded-lg flex flex-col space-y-4 absolute top-[15%] left-1/2 transform -translate-x-1/2" :"bg-white flex  rounded-lg  " }`}>
      <div className="bg-white space-y-8   rounded-lg hidden mb:inline ">
      <img src={Thankyou} alt="checkmark" className="h-16 w-16"></img>
      <h1 className="text-2xl font-bold">Thank you! </h1>
      <p className={`${Mobile ? "text-lg text-gray-500":" text-sm text-gray-500 overflow-clip "}`}>
        Thank you for confirming your subscription! We hope you have fun using
        our platform.If you ever need support, feel free to email us at
        support@loremGaming.com.
      </p>

      </div>
    </div>
  );
};

export default ThankYou;
