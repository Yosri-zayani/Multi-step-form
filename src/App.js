import React, { useState } from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import ThankYou from './components/ThankYou';
import BackgroundMobile from './images/bg-sidebar-mobile.svg'
import BackgroundDesktop from './images/bg-sidebar-desktop.svg'

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [isMonthly, setIsMonthly] = useState(true);
    const [SelectedPlan,setSelectedplan] = useState([]);
    const [SelectedAddons,setSelectedAddons] = useState([]);

    const steps = [
        { name: 'Personal Info', component: <Step1  currentStep={currentStep} setCurrentStep={setCurrentStep} /> },
        { name: 'Select Plan', component: <Step2 isMonthly={isMonthly} setIsMonthly={setIsMonthly} currentStep={currentStep} setCurrentStep={setCurrentStep} setSelectedplan={setSelectedplan} /> },
        { name: 'Add-ons',  component: <Step3  currentStep={currentStep} setCurrentStep={setCurrentStep} isMonthly={isMonthly} SelectedAddons={SelectedAddons} setSelectedAddons={setSelectedAddons}/> },
        { name: 'Review',   component: <Step4  currentStep={currentStep} setCurrentStep={setCurrentStep} SelectedPlan={SelectedPlan} isMonthly={isMonthly} SelectedAddons={SelectedAddons} /> },
        {component: <ThankYou/>}
        

    ];

    const handleButtonClick = step => {
        setCurrentStep(step);
    };

    return (
        <div className=' font-display'>
        <div className=' mb:hidden '>  {/**mobile design */}
            <div>
            <div className='relative'>
                <img src={BackgroundMobile} alt='background' className='w-full h-auto' />
                <div className='absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-4'>
                    {steps.slice(0, 4).map((step, index) => {
                        const isSelected = currentStep === index + 1;
                        return (
                            <button
                                key={index}
                                onClick={() => handleButtonClick(index + 1)}
                                className={`rounded-full text-white w-8 h-8 inline-block ring-1 ring-white ${isSelected ? 'bg-blue-500 text-black ring-0' : ''}`}
                            >
                                {index + 1}
                            </button>
                        )
                    })}
                </div>
            </div>
            {steps[currentStep - 1].component}
            </div>
        </div>
        <div className='hidden mb:bg-gray-300 mb:flex items-center h-full '>
    <div className='hidden mb:flex items-center rounded-md  bg-white p-4 m-8 mx-[20%] my-[5%] w-[80%] h-[100%] ' >  {/**desktop design */}
            <div className='relative mr-24'>
                <img src={BackgroundDesktop} alt='background' className='  min-h-full min-w-full ' />
                <div className=' absolute  top-0 flex flex-col m-8 ' >
                    {steps.slice(0, 4).map((step, index) => {
                        const isSelected = currentStep === index + 1;
                        return (
                            <div className='flex items-center pb-4'  key={index}>
                            <button
                                onClick={() => handleButtonClick(index + 1)}
                                className={`rounded-full text-white w-8 h-8 inline-block ring-1 ring-white ${isSelected ? 'bg-blue-500 text-black ring-0' : ''}`}
                            >
                                {index + 1}
                            </button>
                            <div className='flex flex-col pl-4'>
                            <div className='text-sm text-gray-400 '>STEP {index + 1}</div>
                            <div className='text-white font-bold'>{step.name}</div>
                            </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div>
            {steps[currentStep - 1].component}
            
            </div>
        </div>
        </div>
     </div>
    );
    
};

export default App;
