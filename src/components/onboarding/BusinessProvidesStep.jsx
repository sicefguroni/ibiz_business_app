import React from 'react';
import { Typography, Box, TextField, Chip } from '@mui/material';
import { ShoppingBagOutlined, LocalShippingOutlined, EmojiEventsOutlined, LightbulbOutlined, InfoOutlined, MoreHorizOutlined, EditOutlined, TravelExploreOutlined } from '@mui/icons-material';

/**
 * BusinessProvidesStep Component
 *
 * This component allows the user to select what their business provides
 * and describe how they plan to deliver or build it. It uses Material-UI
 * for a consistent and visually appealing user interface.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleMultiSelectChange - Callback function for multi-select (e.g., businessProvides).
 * @param {function} props.nextStep - Callback function to advance to the next step (not used directly in this step's UI).
 */
const BusinessProvidesStep = ({ formData, handleChange, handleMultiSelectChange, nextStep }) => {
    const maxCharacters = 5000;

    const getProvidesIcon = (item) => {
        switch (item) {
            case 'Products': return <ShoppingBagOutlined sx={{ color: '#f97316' }} />;
            case 'Services': return <LocalShippingOutlined sx={{ color: '#f97316' }} />;
            case 'Experience': return <TravelExploreOutlined sx={{ color: '#f97316' }} />;
            case 'Solutions': return <LightbulbOutlined sx={{ color: '#f97316' }} />;
            case 'Information': return <InfoOutlined sx={{ color: '#f97316' }} />;
            case 'Others': return <MoreHorizOutlined sx={{ color: '#f97316' }} />;
            default: return null;
        }
    };

    return (
        <Box>
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                What does your business provide?
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4, justifyContent: 'center' }}>
                {[
                    'Products',
                    'Services',
                    'Experience',
                    'Solutions',
                    'Information',
                    'Others'
                ].map((item) => (
                    <Chip
                        key={item}
                        label={item}
                        onClick={() => handleMultiSelectChange('businessProvides', item)}
                        icon={getProvidesIcon(item)}
                        sx={{
                            backgroundColor: formData.businessProvides.includes(item) ? '#f97316' : '#fff',
                            color: formData.businessProvides.includes(item) ? '#fff' : '#f97316',
                            border: `1px solid ${formData.businessProvides.includes(item) ? '#f97316' : '#f97316'}`,
                            fontWeight: 'medium',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            '& .MuiChip-icon': {
                                color: formData.businessProvides.includes(item) ? '#fff' : '#f97316',
                            },
                            '&:hover': {
                                backgroundColor: formData.businessProvides.includes(item) ? '#e06000' : '#fef3c7',
                            },
                        }}
                    />
                ))}
            </Box>

            {formData.businessProvides.includes('Others') && (
                <Box sx={{ mb: 4 }}>
                    <TextField
                        id="customBusinessProvides"
                        name="customBusinessProvides"
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                                <MoreHorizOutlined sx={{ mr: 1 }} /> Specify other provisions
                            </Box>
                        }
                        value={formData.customBusinessProvides}
                        onChange={handleChange}
                        fullWidth
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                borderColor: '#FF69B4',
                                '& fieldset': { borderColor: '#FF69B4' },
                                '&:hover fieldset': { borderColor: '#FF69B4' },
                                '&.Mui-focused fieldset': { borderColor: '#FF69B4', borderWidth: '2px' },
                            },
                            '& .MuiInputLabel-root': { color: '#f97316', fontWeight: 'medium', '&.Mui-focused': { color: '#f97316' } },
                            '& .MuiInputBase-input': { color: '#333' },
                            '& .MuiInputBase-input::placeholder': { color: '#999' },
                        }}
                    />
                </Box>
            )}

            <Box sx={{ mb: 4 }}>
                <Typography variant="body2" color="text.secondary" align="right" sx={{ mb: 1 }}>
                    {formData.howToDeliver.length}/{maxCharacters} characters
                </Typography>
                <TextField
                    id="howToDeliver"
                    name="howToDeliver"
                    label={
                        <Box sx={{ color: '#f97316', mb: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <EditOutlined sx={{ mr: 1 }} />
                                <Typography variant="body1" fontWeight="medium">
                                    How do you plan to deliver or build it?
                                </Typography>
                            </Box>
                            <Box sx={{ pl: 3, mt: 0.01 }}>
                                <Typography variant="body2" color="text.secondary">
                                    Will you develop it yourself, hire someone, use existing platforms, or partner with others?
                                </Typography>
                            </Box>
                        </Box>

                    }
                    value={formData.howToDeliver}
                    onChange={handleChange}
                    multiline
                    rows={6}
                    fullWidth
                    variant="outlined"
                    inputProps={{ maxLength: maxCharacters }}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            borderColor: '#FF69B4',
                            '& fieldset': { borderColor: '#FF69B4' },
                            '&:hover fieldset': { borderColor: '#FF69B4' },
                            '&.Mui-focused fieldset': { borderColor: '#FF69B4', borderWidth: '2px' },
                        },
                        '& .MuiInputLabel-root': { color: '#f97316', fontWeight: 'medium', '&.Mui-focused': { color: '#f97316' } },
                        '& .MuiInputBase-input': { color: '#333' },
                        '& .MuiInputBase-input::placeholder': { color: '#999' },
                    }}
                />
            </Box>
        </Box>
    );
};

export default BusinessProvidesStep;
