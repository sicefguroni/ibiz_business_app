import React, { useState, useEffect, useRef } from 'react';
import { TextField, Typography, Box, Paper, List, ListItem, ListItemText, CircularProgress } from '@mui/material';
import LightbulbOutlined from '@mui/icons-material/LightbulbOutlined';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';

/**
 * BusinessIdeaStep Component
 *
 * This component handles the first step of the onboarding process,
 * allowing the user to input their business idea and its location.
 * It includes a character counter for the business idea and
 * provides location suggestions using a conceptual API integration,
 * all styled with Material-UI for a prettier UI.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.nextStep - Callback function to advance to the next step.
 * @param {function} props.prevStep - Callback function to go to the previous step (not used directly in this step's UI).
 */
const BusinessIdeaStep = ({ formData, handleChange, nextStep, prevStep }) => {
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [loadingSuggestions, setLoadingSuggestions] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const suggestionsRef = useRef(null);

    const maxCharacters = 5000;

    /**
     * Fetches conceptual location suggestions based on the user's query.
     * This is a dummy implementation and should be replaced with a real API call.
     * @param {string} query - The user's input for location.
     */
    const fetchLocationSuggestions = async (query) => {
        if (query.length < 3) {
            setLocationSuggestions([]);
            setLoadingSuggestions(false);
            return;
        }

        setLoadingSuggestions(true);

        try {
            const dummySuggestions = [
                "Talamban, Cebu City, Philippines",
                "Lahug, Cebu City, Philippines",
                "Cebu City, Central Visayas, Philippines",
                "Talisay City, Central Visayas, Philippines",
                "Mandaue City, Central Visayas, Philippines",
                "Lapu-Lapu City, Central Visayas, Philippines",
                "Davao City, Davao Region, Philippines",
                "Manila, Metro Manila, Philippines",
            ].filter(loc => loc.toLowerCase().includes(query.toLowerCase()));

            setLocationSuggestions(dummySuggestions);
        } catch (error) {
            console.error("Error fetching location suggestions:", error);
            setLocationSuggestions([]);
        } finally {
            setLoadingSuggestions(false);
        }
    };

    useEffect(() => {
        const handler = setTimeout(() => {
            if (formData.businessLocation) {
                fetchLocationSuggestions(formData.businessLocation);
            } else {
                setLocationSuggestions([]);
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [formData.businessLocation]);

    /**
     * Handles the selection of a location suggestion from the dropdown.
     * Updates the form data and hides the suggestions.
     * @param {string} suggestion - The selected location suggestion.
     */
    const handleSelectSuggestion = (suggestion) => {
        handleChange({ target: { name: 'businessLocation', value: suggestion } });
        setLocationSuggestions([]);
        setShowSuggestions(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Box sx={{ width: '100%', maxWidth: 700, mx: 'auto', p: { xs: 2, sm: 4 } }}>
            <Typography variant="h4" component="h2" align="center" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
                What's your business idea?
            </Typography>

            <Box sx={{ mb: 4 }}>
                <Typography variant="body2" color="text.secondary" align="right" sx={{ mb: 1 }}>
                    {formData.businessIdea.length}/{maxCharacters} characters
                </Typography>
                <TextField
                    id="businessIdea"
                    name="businessIdea"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                            <LightbulbOutlined sx={{ mr: 1 }} /> Describe your business idea in detail for accurate assessment
                        </Box>
                    }
                    value={formData.businessIdea}
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
                            '& fieldset': {
                                borderColor: '#FF69B4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#FF69B4',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF69B4',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#f97316',
                            fontWeight: 'medium',
                            '&.Mui-focused': {
                                color: '#f97316',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#333',
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                        },
                    }}
                />
            </Box>

            <Box sx={{ position: 'relative' }} ref={suggestionsRef}>
                <TextField
                    id="businessLocation"
                    name="businessLocation"
                    label={
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#f97316' }}>
                            <LocationOnOutlined sx={{ mr: 1 }} /> Enter the location of your business
                        </Box>
                    }
                    value={formData.businessLocation}
                    onChange={(e) => {
                        handleChange(e);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    fullWidth
                    variant="outlined"
                    autoComplete="off"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            borderColor: '#FF69B4',
                            '& fieldset': {
                                borderColor: '#FF69B4',
                            },
                            '&:hover fieldset': {
                                borderColor: '#FF69B4',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: '#FF69B4',
                                borderWidth: '2px',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            color: '#f97316',
                            fontWeight: 'medium',
                            '&.Mui-focused': {
                                color: '#f97316',
                            },
                        },
                        '& .MuiInputBase-input': {
                            color: '#333',
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#999',
                        },
                    }}
                />

                {showSuggestions && (formData.businessLocation.length >= 3 || loadingSuggestions) && (
                    <Paper
                        sx={{
                            position: 'absolute',
                            zIndex: 20,
                            width: '100%',
                            mt: 1,
                            borderRadius: '8px',
                            boxShadow: 3,
                            maxHeight: 200,
                            overflowY: 'auto',
                        }}
                    >
                        {loadingSuggestions ? (
                            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
                                <CircularProgress size={24} sx={{ color: '#f97316' }} />
                            </Box>
                        ) : locationSuggestions.length > 0 ? (
                            <List>
                                {locationSuggestions.map((suggestion, index) => (
                                    <ListItem
                                        key={index}
                                        onClick={() => handleSelectSuggestion(suggestion)}
                                        sx={{
                                            cursor: 'pointer',
                                            '&:hover': {
                                                backgroundColor: '#fef3c7',
                                            },
                                            borderBottom: '1px solid #eee',
                                            '&:last-child': {
                                                borderBottom: 'none',
                                            },
                                        }}
                                    >
                                        <ListItemText primary={suggestion} sx={{ color: '#333' }} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                            <Typography sx={{ p: 2, color: '#666' }}>No suggestions found.</Typography>
                        )}
                    </Paper>
                )}
            </Box>
        </Box>
    );
};

export default BusinessIdeaStep;
