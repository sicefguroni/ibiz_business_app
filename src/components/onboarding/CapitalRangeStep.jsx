import React, { useState, useEffect } from 'react';
import { Typography, Box, Slider, Button } from '@mui/material';
import { AttachMoneyOutlined } from '@mui/icons-material';

/**
 * CapitalRangeStep Component
 *
 * This component allows the user to specify their estimated capital range
 * using a slider with two points, or indicate if they are unsure. It uses Material-UI
 * for a consistent and visually appealing user interface.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.setFormData - Callback function to directly set form data.
 * @param {function} props.handleSubmit - Callback function for final submission (not used directly in this step's UI).
 */
const CapitalRangeStep = ({ formData, handleChange, setFormData, handleSubmit }) => {
    const minCapital = 1000;
    const maxCapital = 100000;


    const [lastKnownRange, setLastKnownRange] = useState([minCapital, maxCapital]);


    const [sliderValue, setSliderValue] = useState(() => {

        if (Array.isArray(formData.capitalRange) && formData.capitalRange.length === 2) {
            return formData.capitalRange;
        }

        return [minCapital, maxCapital];
    });


    useEffect(() => {
        if (Array.isArray(formData.capitalRange) && formData.capitalRange.length === 2) {
            setSliderValue(formData.capitalRange);
            setLastKnownRange(formData.capitalRange);
        } else if (formData.capitalRange === 'not_sure_yet') {

            setSliderValue([minCapital, maxCapital]);
        }
    }, [formData.capitalRange]);


    const formatCurrency = (value) => {
        if (Array.isArray(value) && value.length === 2) {
            const formattedMin = new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 0 }).format(value[0]);
            const formattedMax = new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 0 }).format(value[1]);
            return `${formattedMin} - ${formattedMax}`;
        }
        if (value === 'not_sure_yet') {
            return "Not Sure Yet";
        }

        return new Intl.NumberFormat('fil-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 0 }).format(value);
    };

    /**
     * Handles the change event from the Slider component.
     * Updates both the internal sliderValue state and the formData.
     * When the slider is moved, it implicitly deselects "not_sure_yet".
     * @param {Event} event - The event object.
     * @param {number | number[]} newValue - The new value(s) from the slider.
     */
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
        setLastKnownRange(newValue);
        handleChange({ target: { name: 'capitalRange', value: newValue } });
    };


    const handleNotSureYetClick = () => {
        if (formData.capitalRange === 'not_sure_yet') {
            setFormData((prev) => ({ ...prev, capitalRange: lastKnownRange }));
        } else {
            setFormData((prev) => ({ ...prev, capitalRange: 'not_sure_yet' }));
        }
    };

    const isSliderDisabled = formData.capitalRange === 'not_sure_yet';

    return (
        <Box>

            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                Do you know how much you'll start?
            </Typography>


            <Box sx={{ mb: 4, position: 'relative', p: 2, border: '2px solid #FF69B4', borderRadius: '12px' }}>
                <Typography variant="body2" sx={{ color: '#f97316', fontWeight: 'bold', mb: 2 }}>
                    Capital Range
                </Typography>
                <Slider
                    id="capitalRange"
                    name="capitalRange"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    min={minCapital}
                    max={maxCapital}
                    step={1000}
                    valueLabelDisplay="off"
                    disableSwap
                    disabled={isSliderDisabled}
                    sx={{
                        color: '#f97316',
                        height: 8,
                        '& .MuiSlider-track': {
                            border: 'none',
                            backgroundColor: '#f97316',
                        },
                        '& .MuiSlider-rail': {
                            backgroundColor: '#e0e0e0',
                        },
                        '& .MuiSlider-thumb': {
                            height: 20,
                            width: 20,
                            backgroundColor: '#f97316',
                            border: '2px solid #fff',
                            boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)',
                            '&:focus, &:hover, &.Mui-active': {
                                boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02), 0px 0px 0px 8px rgba(249, 115, 22, 0.16)',
                            },
                        },

                        '&.Mui-disabled': {
                            '& .MuiSlider-track': {
                                backgroundColor: '#bdbdbd',
                            },
                            '& .MuiSlider-rail': {
                                backgroundColor: '#e0e0e0',
                            },
                            '& .MuiSlider-thumb': {
                                backgroundColor: '#bdbdbd',
                                border: '2px solid #ccc',
                            },
                        },
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                    <Typography variant="body2" sx={{ color: '#333', fontWeight: 'medium' }}>
                        {formatCurrency(minCapital)}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333', fontWeight: 'medium' }}>
                        {formatCurrency(maxCapital)}
                    </Typography>
                </Box>

                {typeof formData.capitalRange !== 'string' && Array.isArray(formData.capitalRange) && (
                    <Box sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: 'white',
                        px: 2,
                        py: 0.5,
                        borderRadius: '4px',
                        boxShadow: 1,
                        pointerEvents: 'none',
                    }}>
                        <Typography variant="body2" sx={{ color: '#f97316', fontWeight: 'bold' }}>
                            {formatCurrency(formData.capitalRange)}
                        </Typography>
                    </Box>
                )}
            </Box>

            <Button
                variant="outlined"
                onClick={handleNotSureYetClick}
                sx={{
                    mt: 2,
                    py: 1.5,
                    px: 3,
                    borderRadius: '20px',
                    fontWeight: 'medium',
                    textTransform: 'none',
                    backgroundColor: formData.capitalRange === 'not_sure_yet' ? '#f97316' : '#fff',
                    color: formData.capitalRange === 'not_sure_yet' ? '#fff' : '#f97316',
                    borderColor: '#f97316',
                    '&:hover': {
                        backgroundColor: formData.capitalRange === 'not_sure_yet' ? '#e06000' : '#fef3c7',
                        borderColor: '#f97316',
                    },
                }}
            >
                I'm not sure yet
            </Button>
        </Box>
    );
};

export default CapitalRangeStep;
