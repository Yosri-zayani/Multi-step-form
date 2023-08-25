function ToggleSwitch({isMonthly,setIsMonthly}) {
  
    return (
      <div className="flex items-center justify-center bg-gray-100 py-4 ">
        <span className="text-lg mr-4">Monthly</span>
        <div
          onClick={() => setIsMonthly(!isMonthly)}
          className={`relative inline-block w-16 h-8 bg-blue-800 rounded-full transition-colors cursor-pointer ${
            isMonthly ? '' : 'bg-blue-400'
          }`}
        >
          <span
            className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ease-in-out duration-300 ${
              isMonthly ? 'translate-x-0' : 'translate-x-full'
            }`}
          ></span>
        </div>
        <span className="text-lg ml-4">Yearly</span>
      </div>
    );
  }

  export default ToggleSwitch ; 