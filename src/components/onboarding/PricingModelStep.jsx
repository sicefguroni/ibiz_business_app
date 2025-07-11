import React from 'react';
import { Typography, Box, TextField, Chip } from '@mui/material';
import { AttachMoneyOutlined, SettingsOutlined, SubscriptionsOutlined, AccountBalanceOutlined, MoreHorizOutlined, EditOutlined } from '@mui/icons-material';

/**
 * PricingModelStep Component
 *
 * This component allows the user to select their business's pricing model
 * and describe it in more detail. It uses Material-UI for a consistent
 * and visually appealing user interface.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleMultiSelectChange - Callback function for multi-select (e.g., pricingModel).
 * @param {function} props.nextStep - Callback function to advance to the next step (not used directly in this step's UI).
 */
const PricingModelStep = ({ formData, handleChange, handleMultiSelectChange, nextStep }) => {
    const maxCharacters = 5000;

    const getPricingIcon = (model) => {
        switch (model) {
            case 'Charge fees': return <AttachMoneyOutlined sx={{ color: '#f97316' }} />;
            case 'Custom pricing': return <SettingsOutlined sx={{ color: '#f97316' }} />;
            case 'Subscription': return <SubscriptionsOutlined sx={{ color: '#f97316' }} />;
            case 'Lending/Rent': return <AccountBalanceOutlined sx={{ color: '#f97316' }} />;
            case 'Others': return <MoreHorizOutlined sx={{ color: '#f97316' }} />;
            default: return null;
        }
    };

    return (
        <Box>
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                How will you make money from it?
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4, justifyContent: 'center' }}>
                {[
                    'Charge fees',
                    'Custom pricing',
                    'Subscription',
                    'Lending/Rent',
                    'Others'
                ].map((model) => (
                    <Chip
                        key={model}
                        label={model}
                        onClick={() => handleMultiSelectChange('pricingModel', model)}
                        icon={getPricingIcon(model)}
                        sx={{
                            backgroundColor: formData.pricingModel.includes(model) ? '#f97316' : '#fff',
                            color: formData.pricingModel.includes(model) ? '#fff' : '#f97316',
                            border: `1px solid ${formData.pricingModel.includes(model) ? '#f97316' : '#f97316'}`,
                            fontWeight: 'medium',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            '& .MuiChip-icon': {
                                color: formData.pricingModel.includes(model) ? '#fff' : '#f97316',
                            },
                            '&:hover': {
                                backgroundColor: formData.pricingModel.includes(model) ? '#e06000' : '#fef3c7',
                            },
                        }}
                    />
                ))}
            </Box>

            {formData.pricingModel.includes('Others') && (
                <Box sx={{ mb: 4 }}>
                    <TextField
                        id="customPricing"
                        name="customPricing"
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                                <MoreHorizOutlined sx={{ mr: 1 }} /> Specify other pricing models
                            </Box>
                        }
                        value={formData.customPricing}
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
                    {formData.pricingDescription?.length || 0}/{maxCharacters} characters
                </Typography>
                <TextField
                    id="pricingDescription"
                    name="pricingDescription"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                            <EditOutlined sx={{ mr: 1 }} /> Mention your pricing model — will you charge a fee, sell a product, offer subscriptions, or rely on ads?
                        </Box>
                    }
                    value={formData.pricingDescription || ''}
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

export default PricingModelStep;
