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

    function Chip({ label, icon, selected, onClick }) {
      return (
        <button
          type="button"
          onClick={onClick}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full border font-medium transition-all duration-200
            ${selected
              ? 'bg-primary-orange text-white border-primary-orange'
              : 'bg-white text-primary-orange border-primary-orange'}
            hover:bg-yellow-100
          `}
        >
          <span className="text-lg">{icon}</span>
          {label}
        </button>
      );
    }

    return (
        <div className='w-[640px] h-[435px]'>
            <div className='flex flex-wrap gap-2 mb-4 justify-center'>
                {(() => {
                  const beneficiaryIcons = {
                    Women: "👩",
                    Children: "🧒",
                    Men: "👨",
                    Professionals: "💼",
                    Students: "🎓",
                    Elderly: "🧓",
                    Families: "👨‍👩‍👧‍👦",
                    Gamers: "🎮",
                    Tourists: "🧳",
                    Others: "…"
                  };
                  return Object.keys(beneficiaryIcons).map((beneficiary) => (
                    <Chip
                      key={beneficiary}
                      label={beneficiary}
                      icon={beneficiaryIcons[beneficiary]}
                      selected={formData.beneficiaries.includes(beneficiary)}
                      onClick={() => handleMultiSelectChange('beneficiaries', beneficiary)}
                    />
                  ));
                })()}
            </div>

            {formData.beneficiaries.includes('Others') && (
                <div className="mb-4">
                    <label htmlFor="customBeneficiaries" className="flex items-center gap-2 text-primary-orange font-medium mb-2">
                        <span role="img" aria-label="more">…</span> Specify other beneficiaries
                    </label>
                    <input
                        id="customBeneficiaries"
                        name="customBeneficiaries"
                        type="text"
                        value={formData.customBeneficiaries}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                        placeholder="Specify other beneficiaries"
                    />
                </div>
            )}

            <div className="mb-4">
                <p className="text-sm text-right mb-1 text-secondary-black italic">
                    {formData.describeCustomers?.length || 0}/{maxCharacters} characters
                </p>
                <label htmlFor="describeCustomers" className="flex items-center gap-2 text-primary-black mb-2">
                   
                </label>
                <textarea
                    id="describeCustomers"
                    name="describeCustomers"
                    value={formData.describeCustomers || ''}
                    onChange={handleChange}
                    rows={6}
                    maxLength={maxCharacters}
                    className="w-full rounded-xl border-2 border-pink-400 focus:border-pink-400 focus:ring-1 focus:ring-pink-400 text-base text-gray-800 p-3 placeholder:text-gray-400 outline-none transition-all duration-200"
                    placeholder="✏️ Describe your ideal customers or users. Think about age, location, habits, or a specific need."
                />
            </div>
        </div>
    );
};

export default BeneficiariesStep;
