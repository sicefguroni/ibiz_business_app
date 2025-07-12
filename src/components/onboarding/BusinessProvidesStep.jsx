import React from 'react';
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
        <div className='w-[640px] h-[435px]'>
          {/* Custom Chips with Icons */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {[
              { label: 'Products', icon: '🛍️' },
              { label: 'Services', icon: '🛠️' },
              { label: 'Experience', icon: '🎢' },
              { label: 'Solutions', icon: '💡' },
              { label: 'Information', icon: 'ℹ️' },
              { label: 'Others', icon: '…' }
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleMultiSelectChange('businessProvides', label)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-all duration-200
                  ${formData.businessProvides.includes(label)
                    ? 'bg-primary-orange text-white border-primary-orange'
                    : 'bg-white text-primary-orange border-primary-orange'}
                  hover:bg-yellow-100
                `}
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Custom input for 'Others' */}
          {formData.businessProvides.includes('Others') && (
            <div className="mb-4">
              <label htmlFor="customBusinessProvides" className="flex items-center gap-2 text-primary-orange font-medium mb-2">
                <span role="img" aria-label="more">…</span> Specify other provisions
              </label>
              <input
                id="customBusinessProvides"
                name="customBusinessProvides"
                type="text"
                value={formData.customBusinessProvides}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                placeholder="Specify other provisions"
              />
            </div>
          )}

          {/* How to deliver section */}
          <div className="mb-4">
            <p className="text-sm text-right mb-1 text-secondary-black italic">
              {formData.howToDeliver.length}/{maxCharacters} characters
            </p>
            
            <textarea
              id="howToDeliver"
              name="howToDeliver"
              value={formData.howToDeliver}
              onChange={handleChange}
              rows={6}
              maxLength={maxCharacters}
              className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
              placeholder="✏️ Will you develop it yourself, hire someone, use existing platforms, or partner with others?"
            />
          </div>
        </div>
    );
};

export default BusinessProvidesStep;
