import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import EditIcon from '@mui/icons-material/Edit';
import BarChartIcon from '@mui/icons-material/BarChart';


const StepLayout = ({ step, totalSteps, children, onNext, onAnalyze, onEdit, onBack }) => {
    return (
        <div>
            {children}

            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                sx={{
                    mt: 0.1,
                    mb: 3,
                    pt: 0,
                }}
            >
                {step > 1 && step < 6 && (
                    <Button
                        variant="outlined"
                        color="inherit"
                        onClick={onBack}
                        sx={{
                            borderRadius: '9999px',
                            px: 4,
                            py: 1.5,
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderColor: '#FF69B4',
                            color: '#FF69B4',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 105, 180, 0.08)',
                                borderColor: '#FF69B4',
                            },
                        }}
                    >
                        ← Back
                    </Button>
                )}

                {step < totalSteps ? (
                    step === totalSteps - 1 ? (
                        <Button
                            variant="contained"
                            onClick={onNext}
                            sx={{
                                bgcolor: '#FF69B4',
                                color: 'white',
                                borderRadius: '9999px',
                                px: 5,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff519f',
                                },
                            }}
                        >
                            Create →
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={onNext}
                            sx={{
                                bgcolor: '#FF69B4',
                                color: 'white',
                                borderRadius: '9999px',
                                px: 5,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff519f',
                                },
                            }}
                        >
                            Next →
                        </Button>
                    )
                ) : (
                    <>
                        <Button
                            variant="outlined"
                            onClick={onEdit}
                            startIcon={<EditIcon sx={{ color: '#FF69B4' }} />}
                            sx={{
                                borderRadius: '9999px',
                                px: 4,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                borderColor: '#FF69B4',
                                color: '#FF69B4',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 105, 180, 0.08)',
                                    borderColor: '#FF69B4',
                                },
                            }}
                        >
                            Edit Info
                        </Button>
                        <Button
                            variant="contained"
                            onClick={onAnalyze}
                            startIcon={<BarChartIcon sx={{ color: 'white' }} />}
                            sx={{
                                bgcolor: '#FF69B4',
                                color: 'white',
                                borderRadius: '9999px',
                                px: 5,
                                py: 1.5,
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff519f',
                                },
                            }}
                        >
                            Analyze Feasibility
                        </Button>
                    </>
                )}
            </Stack>
        </div>
    );
};

export default StepLayout;
