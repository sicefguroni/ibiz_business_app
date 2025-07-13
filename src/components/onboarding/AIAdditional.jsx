import React from 'react';

/**
 * aiAdditionalInfoStep Component
 *
 * This component allows the user to specify their estimated capital range
 * using a slider with two points, or indicate if they are unsure. It uses Material-UI
 * for a consistent and visually appealing user interface.
 *
 * @param {object} props - The component props.
 * @param {object} props.formData - The current form data object.
 * @param {function} props.handleChange - Callback function to update form data.
 * @param {function} props.handleSubmit - Callback function for final submission (not used directly in this step's UI).
 */
const AIAdditional = ({ formData, handleChange, handleSubmit }) => {
    const maxCharacters = 5000;
    
    return (
        <div className='w-[640px] h-[400px]'>
            <div className="mb-4">
                <p className="text-sm text-right mb-1 text-secondary-black italic">
                    {formData.aiAdditionalInfo?.length || 0}/{maxCharacters} characters
                </p>
      
                <textarea
                    id="aiAdditionalInfo"
                    name="aiAdditionalInfo"
                    value={formData.aiAdditionalInfo || ''}
                    onChange={handleChange}
                    rows={6}
                    maxLength={maxCharacters}
                    className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                    placeholder="✏️ Add any extra information or context for the AI here."
                />
            </div>
        </div>
    );
};

export default AIAdditional;
