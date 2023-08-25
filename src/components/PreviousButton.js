import React from 'react';

const PreviousButton = ({currentStep,setCurrentStep}) => {
    const handleButtonClick =() => {
        setCurrentStep(currentStep - 1)
    }
    return (
        <div className='text-gray-500 pl-4 w-full'>
            <button className=' hover:text-blue-600' onClick={handleButtonClick}>Go back</button>
        </div>
    );

}

export default PreviousButton;
