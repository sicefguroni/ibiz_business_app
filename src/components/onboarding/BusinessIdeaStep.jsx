import React, { useState, useEffect, useRef } from 'react';

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
        <div className='w-[640px] h-[435px] flex flex-col justify-evenly'>
            <h1 className='text-3xl font-medium text-center'>
                What's your business idea?
            </h1>

            <div>
                <p className='text-sm text-right mb-1 text-secondary-black italic'>
                    {formData.businessIdea.length}/{maxCharacters} characters
                </p>
                <textarea
                    id="businessIdea"
                    name="businessIdea"
                    value={formData.businessIdea}
                    onChange={handleChange}
                    rows={6}
                    maxLength={maxCharacters}
                    className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                    placeholder="💡Describe your business idea in detail for accurate assessment"
                />
            </div>

            <div className='relative' ref={suggestionsRef}>
                <input
                    id="businessLocation"
                    name="businessLocation"
                    type="text"
                    value={formData.businessLocation}
                    onChange={(e) => {
                        handleChange(e);
                        setShowSuggestions(true);
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    autoComplete="off"
                    className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                    placeholder="📍Enter the location of your business"
                />

                {showSuggestions && (formData.businessLocation.length >= 3 || loadingSuggestions) && (
                    <div className="absolute z-20 w-full mt-1 rounded-lg shadow-lg bg-white max-h-52 overflow-y-auto border border-gray-200">
                        {loadingSuggestions ? (
                            <div className="flex justify-center p-2 text-primary-orange">Loading...</div>
                        ) : locationSuggestions.length > 0 ? (
                            <ul>
                                {locationSuggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleSelectSuggestion(suggestion)}
                                        className="cursor-pointer px-4 py-2 hover:bg-yellow-100 border-b border-gray-100 last:border-b-0 text-gray-800"
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="p-2 text-gray-500">No suggestions found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default BusinessIdeaStep;
