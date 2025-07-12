import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const StepLayout = ({ step, totalSteps, children, onNext, onAnalyze, onEdit, onBack, title }) => {

    const onboardingButton = (buttonName, icon, onClick, isBack = false) => {
        return isBack ? (
            <button
                className='flex items-center gap-2 bg-primary-white hover:bg-stroke-100/50 transition-all duration-300 text-primary-black border border-primary-pink rounded-full px-8 py-2 text-[16px] font-medium'
                onClick={onClick}
            >
                {icon} {buttonName}
            </button>
        ) : (
            <button
                className='flex items-center gap-2 bg-primary-pink hover:bg-primary-pink/90 transition-all duration-300 text-primary-white rounded-full px-8 py-2 text-[16px] font-medium'
                onClick={onClick}
            >
                {buttonName} {icon}
            </button>
        );
    }

    const LayoutTitle = ({ title }) => {
        return (
            <h1 className='text-3xl font-medium text-center py-8'>
                {title}
            </h1>
        )
    }

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col'>
                <LayoutTitle title={title} />
                {children}
            </div>

            <div className='flex justify-center items-center gap-8'>
                {step > 1 && step < 6 && (
                    onboardingButton('Back', <ArrowBackRoundedIcon sx={{ fontSize: 18 }} />, onBack, true)
                )}

                {step < totalSteps ? (
                    step === totalSteps - 1 ? (
                        onboardingButton('Create', <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />, onNext)
                    ) : (
                        onboardingButton('Next', <ArrowForwardRoundedIcon sx={{ fontSize: 18 }} />, onNext)
                    )
                ) : (
                    <>
                        {onboardingButton('Edit Info', <EditIcon className='text-primary-black font-[18px]' />, onEdit, true)}
                        {onboardingButton('Analyze Feasibility', <BarChartIcon />, onAnalyze)}
                    </>
                )}
            </div>
        </div>
    );
};

export default StepLayout;
                              
