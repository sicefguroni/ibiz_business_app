import React from 'react';
import { Typography, Box, Chip, Paper } from '@mui/material';
import {
    LightbulbOutlined, LocationOnOutlined, EditOutlined,
    PersonOutline, ChildCareOutlined, ManOutlined, SchoolOutlined, ElderlyOutlined, FamilyRestroomOutlined, SportsEsportsOutlined, FlightTakeoffOutlined, MoreHorizOutlined, WorkOutline, // Beneficiary Icons
    ShoppingBagOutlined, LocalShippingOutlined, EmojiEventsOutlined, InfoOutlined, // Business Provides Icons
    AttachMoneyOutlined, SettingsOutlined, SubscriptionsOutlined, AccountBalanceOutlined // Pricing Model Icons
} from '@mui/icons-material';

/**
 * Step6Summary Component
 *
 * This component displays a summary of the user's business idea details
 * collected from the previous steps. It presents the information in a
 * clear, organized, and visually appealing manner using Material-UI.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The complete form data submitted by the user.
 * @param {function} props.onEdit - Callback function to navigate back to edit information.
 */
const Step6Summary = ({ formData, onEdit }) => {

    // Helper to format currency for display
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

    // Helper function to get the icon for each beneficiary
    const getBeneficiaryIcon = (beneficiary) => {
        switch (beneficiary) {
            case 'Women': return <PersonOutline sx={{ color: '#f97316' }} />;
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

    // Helper function to get the icon for each business provision type
    const getProvidesIcon = (item) => {
        switch (item) {
            case 'Products': return <ShoppingBagOutlined sx={{ color: '#f97316' }} />;
            case 'Services': return <LocalShippingOutlined sx={{ color: '#f97316' }} />;
            case 'Experience': return <EmojiEventsOutlined sx={{ color: '#f97316' }} />;
            case 'Solutions': return <LightbulbOutlined sx={{ color: '#f97316' }} />;
            case 'Information': return <InfoOutlined sx={{ color: '#f97316' }} />;
            case 'Others': return <MoreHorizOutlined sx={{ color: '#f97316' }} />;
            default: return null;
        }
    };

    // Helper function to get the icon for each pricing model type
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
            {/* Main heading for the summary */}
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                <LightbulbOutlined sx={{ mr: 1, color: '#f97316' }} /> Your Business Idea's Details
                <Box sx={{ width: '66%', mx: 'auto', height: '4px', bgcolor: '#e0e0e0', mt: 1, borderRadius: '9999px' }} />
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Business Idea Details */}
                <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                        Step 1 Description
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium', whiteSpace: 'pre-wrap' }}>
                        {formData.businessIdea || 'N/A'}
                    </Typography>
                </Paper>
                <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, display: 'flex', alignItems: 'center' }}>
                        <LocationOnOutlined sx={{ mr: 1, color: '#f97316' }} /> Step 1 Location
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium' }}>
                        {formData.businessLocation || 'N/A'}
                    </Typography>
                </Paper>

                {/* Target Customers Section */}
                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                        Target Customers
                    </Typography>
                    <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {formData.beneficiaries && formData.beneficiaries.length > 0 ? (
                                formData.beneficiaries.map((beneficiary, index) => (
                                    <Chip
                                        key={index}
                                        label={beneficiary}
                                        icon={getBeneficiaryIcon(beneficiary)}
                                        sx={{
                                            backgroundColor: '#fef3c7', // Light orange background
                                            color: '#f97316', // Orange text
                                            fontWeight: 'semibold',
                                            borderRadius: '16px', // Rounded
                                            '& .MuiChip-icon': {
                                                color: '#f97316', // Orange icon
                                            },
                                        }}
                                    />
                                ))
                            ) : (
                                <Typography variant="body2" color="text.secondary">No beneficiaries selected</Typography>
                            )}
                            {formData.customBeneficiaries && (
                                <Chip
                                    label={formData.customBeneficiaries}
                                    icon={<MoreHorizOutlined sx={{ color: '#f97316' }} />}
                                    sx={{
                                        backgroundColor: '#fef3c7',
                                        color: '#f97316',
                                        fontWeight: 'semibold',
                                        borderRadius: '16px',
                                        '& .MuiChip-icon': {
                                            color: '#f97316',
                                        },
                                    }}
                                />
                            )}
                        </Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Additional Description for Ideal Customers
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium', whiteSpace: 'pre-wrap' }}>
                            {formData.describeCustomers || 'N/A'}
                        </Typography>
                    </Paper>
                </Box>

                {/* Core Offerings Section */}
                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                        Core Offerings
                    </Typography>
                    <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {formData.businessProvides && formData.businessProvides.length > 0 ? (
                                formData.businessProvides.map((offering, index) => (
                                    <Chip
                                        key={index}
                                        label={offering}
                                        icon={getProvidesIcon(offering)}
                                        sx={{
                                            backgroundColor: '#fef3c7',
                                            color: '#f97316',
                                            fontWeight: 'semibold',
                                            borderRadius: '16px',
                                            '& .MuiChip-icon': {
                                                color: '#f97316',
                                            },
                                        }}
                                    />
                                ))
                            ) : (
                                <Typography variant="body2" color="text.secondary">No offerings selected</Typography>
                            )}
                            {formData.customBusinessProvides && (
                                <Chip
                                    label={formData.customBusinessProvides}
                                    icon={<MoreHorizOutlined sx={{ color: '#f97316' }} />}
                                    sx={{
                                        backgroundColor: '#fef3c7',
                                        color: '#f97316',
                                        fontWeight: 'semibold',
                                        borderRadius: '16px',
                                        '& .MuiChip-icon': {
                                            color: '#f97316',
                                        },
                                    }}
                                />
                            )}
                        </Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Additional Description for Core Offerings
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium', whiteSpace: 'pre-wrap' }}>
                            {formData.howToDeliver || 'N/A'}
                        </Typography>
                    </Paper>
                </Box>

                {/* Pricing Model Section */}
                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                        Pricing Model
                    </Typography>
                    <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                            {formData.pricingModel && formData.pricingModel.length > 0 ? (
                                formData.pricingModel.map((model, index) => (
                                    <Chip
                                        key={index}
                                        label={model}
                                        icon={getPricingIcon(model)}
                                        sx={{
                                            backgroundColor: '#fef3c7',
                                            color: '#f97316',
                                            fontWeight: 'semibold',
                                            borderRadius: '16px',
                                            '& .MuiChip-icon': {
                                                color: '#f97316',
                                            },
                                        }}
                                    />
                                ))
                            ) : (
                                <Typography variant="body2" color="text.secondary">No pricing model selected</Typography>
                            )}
                            {formData.customPricing && (
                                <Chip
                                    label={formData.customPricing}
                                    icon={<MoreHorizOutlined sx={{ color: '#f97316' }} />}
                                    sx={{
                                        backgroundColor: '#fef3c7',
                                        color: '#f97316',
                                        fontWeight: 'semibold',
                                        borderRadius: '16px',
                                        '& .MuiChip-icon': {
                                            color: '#f97316',
                                        },
                                    }}
                                />
                            )}
                        </Box>
                        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                            Additional Description for Pricing Model
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium', whiteSpace: 'pre-wrap' }}>
                            {formData.pricingDescription || 'N/A'}
                        </Typography>
                    </Paper>
                </Box>

                {/* Capital Section */}
                <Box>
                    <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
                        Capital
                    </Typography>
                    <Paper elevation={0} sx={{ border: '1px solid #e0e0e0', borderRadius: '12px', p: 3 }}>
                        <Typography variant="body1" sx={{ color: '#333', fontWeight: 'medium' }}>
                            {formatCurrency(formData.capitalRange)}
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Box>
    );
};

export default Step6Summary;
