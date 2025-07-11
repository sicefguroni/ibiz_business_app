import React from 'react';
import { Typography, Box, TextField, Button, Chip } from '@mui/material';
import { PersonOutline, ChildCareOutlined, ManOutlined, SchoolOutlined, ElderlyOutlined, FamilyRestroomOutlined, SportsEsportsOutlined, FlightTakeoffOutlined, MoreHorizOutlined, EditOutlined, WorkOutline, FemaleOutlined } from '@mui/icons-material';

/**
 * BeneficiariesStep Component
 *
 * This component allows the user to select who will benefit most from their business idea
 * and describe their ideal customers. It uses Material-UI for a consistent and prettier UI.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleMultiSelectChange - Callback function for multi-select (e.g., beneficiaries).
 * @param {function} props.nextStep - Callback function to advance to the next step.
 */
const BeneficiariesStep = ({ formData, handleChange, handleMultiSelectChange, nextStep }) => {
    const maxCharacters = 5000;

    const getBeneficiaryIcon = (beneficiary) => {
        switch (beneficiary) {
            case 'Women': return <FemaleOutlined sx={{ color: '#f97316' }} />;
            case 'Children': return <ChildCareOutlined sx={{ color: '#f97316' }} />;
            case 'Men': return <ManOutlined sx={{ color: '#f97316' }} />;
            case 'Professionals': return <WorkOutline sx={{ color: '#f97316' }} />;
            case 'Students': return <SchoolOutlined sx={{ color: '#f97316' }} />;
            case 'Elderly': return <ElderlyOutlined sx={{ color: '#f97316' }} />;
            case 'Families': return <FamilyRestroomOutlined sx={{ color: '#f97316' }} />;
            case 'Gamers': return <SportsEsportsOutlined sx={{ color: '#f97316' }} />;
            case 'Tourists': return <FlightTakeoffOutlined sx={{ color: '#f97316' }} />;
            case 'Others': return <MoreHorizOutlined sx={{ color: '#f97316' }} />;
            default: return null;
        }
    };

    return (
        <Box >
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                Who do you think will benefit most from it?
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 4, justifyContent: 'center' }}>
                {[
                    'Women',
                    'Children',
                    'Men',
                    'Professionals',
                    'Students',
                    'Elderly',
                    'Families',
                    'Gamers',
                    'Tourists',
                    'Others'
                ].map((beneficiary) => (
                    <Chip
                        key={beneficiary}
                        label={beneficiary}
                        onClick={() => handleMultiSelectChange('beneficiaries', beneficiary)}
                        icon={getBeneficiaryIcon(beneficiary)}
                        sx={{
                            backgroundColor: formData.beneficiaries.includes(beneficiary) ? '#f97316' : '#fff',
                            color: formData.beneficiaries.includes(beneficiary) ? '#fff' : '#f97316',
                            border: `1px solid ${formData.beneficiaries.includes(beneficiary) ? '#f97316' : '#f97316'}`,
                            fontWeight: 'medium',
                            padding: '8px 12px',
                            borderRadius: '20px',
                            '& .MuiChip-icon': {
                                color: formData.beneficiaries.includes(beneficiary) ? '#fff' : '#f97316',
                            },
                            '&:hover': {
                                backgroundColor: formData.beneficiaries.includes(beneficiary) ? '#e06000' : '#fef3c7',
                            },
                        }}
                    />
                ))}
            </Box>

            {formData.beneficiaries.includes('Others') && (
                <Box sx={{ mb: 4 }}>
                    <TextField
                        id="customBeneficiaries"
                        name="customBeneficiaries"
                        label={
                            <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                                <MoreHorizOutlined sx={{ mr: 1 }} /> Specify other beneficiaries
                            </Box>
                        }
                        value={formData.customBeneficiaries}
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
                    {formData.describeCustomers?.length || 0}/{maxCharacters} characters
                </Typography>
                <TextField
                    id="describeCustomers"
                    name="describeCustomers"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                            <EditOutlined sx={{ mr: 1 }} /> Describe your ideal customers or users. Think about age, location, habits, or a specific need.
                        </Box>
                    }
                    value={formData.describeCustomers || ''}
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

export default BeneficiariesStep;
