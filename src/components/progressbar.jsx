import React from 'react';
import { LinearProgress, Box, Typography } from '@mui/material';


const StepProgressBar = ({ currentStep }) => {
    const stepProgressMap = {
        1: 10,
        2: 30,
        3: 50,
        4: 75,
        5: 100,
    };

    const progress = stepProgressMap[currentStep] || 100;

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '640px',
                mt: { xs: 6, sm: 10 },
                mb: 2,
                px: { xs: 2, sm: 0 },
            }}
        >
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: 'center', mb: 1 }}
            >
            </Typography>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: '#e0e0e0',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: '#FFA500',
                        borderRadius: 5,
                        transition: 'width 0.4s ease-in-out',
                    },
                }}
            />
        </Box>
    );
};

export default StepProgressBar;
