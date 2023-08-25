import React from 'react';

const NextButton = ({currentStep,setCurrentStep}) => {
    const handleButtonClick =() => {
        setCurrentStep(currentStep + 1)
    }
    return (
        <div className=' pr-6'>
            <button className=' w-28 h-8 bg-[#02295a] hover:bg-[#024a5a] rounded-md text-white' onClick={handleButtonClick}>Next Step</button>
        </div>
    );
}

export default NextButton;
