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
        <div className='w-[640px] h-[400px]'>
          {/* Custom Chips with Icons */}
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {[
              { label: 'Charge fees', icon: '💰' },
              { label: 'Custom pricing', icon: '⚙️' },
              { label: 'Subscription', icon: '🔄' },
              { label: 'Lending/Rent', icon: '🏦' },
              { label: 'Others', icon: '…' }
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                onClick={() => handleMultiSelectChange('pricingModel', label)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-all duration-200
                  ${formData.pricingModel.includes(label)
                    ? 'bg-primary-orange text-white border-primary-orange'
                    : 'bg-white text-primary-orange border-primary-orange hover:bg-yellow-100'}
                `}
              >
                <span className="text-lg">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Custom input for 'Others' */}
          {formData.pricingModel.includes('Others') && (
            <div className="mb-4">
              <label htmlFor="customPricing" className="flex items-center gap-2 text-primary-orange font-medium mb-2">
                <span role="img" aria-label="more">…</span> Specify other pricing models
              </label>
              <input
                id="customPricing"
                name="customPricing"
                type="text"
                value={formData.customPricing}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                placeholder="Specify other pricing models"
              />
            </div>
          )}

          <div>
            <p className="text-sm text-right mb-1 text-secondary-black italic">
              {formData.pricingDescription?.length || 0}/{maxCharacters} characters
            </p>
           
            <textarea
              id="pricingDescription"
              name="pricingDescription"
              value={formData.pricingDescription || ''}
              onChange={handleChange}
              rows={6}
              maxLength={maxCharacters}
              className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
              placeholder="✏️ Describe your pricing model in detail."
            />
          </div>
        </div>
    );
};

export default PricingModelStep;
