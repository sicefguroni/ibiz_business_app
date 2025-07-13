import React from 'react';
import { LinearProgress, Box } from '@mui/material';

const StepProgressBar = ({ currentStep }) => {
    const stepProgressMap = {
        1: 20,
        2: 40,
        3: 60,
        4: 80,
        5: 100,
    };

    const progress = stepProgressMap[currentStep] || 100;

    return (
        <div className='w-[640px]'>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 6,
                    borderRadius: 5,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#FFA500',
                        borderRadius: 5,
                        transition: 'width 0.4s ease-in-out',
                    },
                }}
            />
        </div>
    );
};

export default StepProgressBar;
