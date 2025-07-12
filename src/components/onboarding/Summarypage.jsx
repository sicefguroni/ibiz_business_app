import React from 'react';

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

const providesIcons = {
  Products: "🛍️",
  Services: "🛠️",
  Experience: "🎢",
  Solutions: "💡",
  Information: "ℹ️",
  Others: "…"
};

const pricingIcons = {
  "Charge fees": "💰",
  "Custom pricing": "⚙️",
  Subscription: "🔄",
  "Lending/Rent": "🏦",
  Others: "…"
};

function Chip({ label, icon }) {
  return (
    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-yellow-50 text-primary-orange border border-primary-orange font-medium text-sm">
      <span className="text-lg">{icon}</span>
      {label}
    </span>
  );
}

const Step6Summary = ({ formData }) => (
  <div className="flex flex-col gap-6">
    {/* Business Idea Details */}
    <div className="border border-gray-200 rounded-xl p-4 bg-white">
        <div className="text-xs text-gray-500 mb-1">Step 1 Description</div>
        <div className="text-base text-gray-800 font-medium whitespace-pre-wrap">
            {formData.businessIdea || 'N/A'}
        </div>
    </div>

    <div className="border border-gray-200 rounded-xl p-4 bg-white">
        <div className="flex items-center text-xs text-gray-500 mb-1">
            <span className="mr-1 text-primary-orange">📍</span> Step 1 Location
        </div>
        <div className="text-base text-gray-800 font-medium">
            {formData.businessLocation || 'N/A'}
        </div>
    </div>

    {/* Target Customers Section */}
    <div>
        <div className="text-lg font-bold text-gray-800 mb-2">Target Customers</div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
                {formData.beneficiaries && formData.beneficiaries.length > 0 ? (
                    formData.beneficiaries.map((beneficiary, idx) => (
                    <Chip key={idx} label={beneficiary} icon={beneficiaryIcons[beneficiary] || "…"} />
                    ))
                ) : (
                    <span className="text-xs text-gray-500">No beneficiaries selected</span>
                )}
                {formData.customBeneficiaries && (
                    <Chip label={formData.customBeneficiaries} icon="…" />
                )}
            </div>
            <div className="text-xs text-gray-500 mb-1">Additional Description for Ideal Customers</div>
            <div className="text-base text-gray-800 font-medium whitespace-pre-wrap">
                {formData.describeCustomers || 'N/A'}
            </div>
        </div>
    </div>

    {/* Core Offerings Section */}
    <div>
        <div className="text-lg font-bold text-gray-800 mb-2">Core Offerings</div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
            <div className="flex flex-wrap gap-2 mb-2">
                {formData.businessProvides && formData.businessProvides.length > 0 ? (
                    formData.businessProvides.map((offering, idx) => (
                    <Chip key={idx} label={offering} icon={providesIcons[offering] || "…"} />
                    ))
                ) : (
                    <span className="text-xs text-gray-500">No offerings selected</span>
                )}
                {formData.customBusinessProvides && (
                    <Chip label={formData.customBusinessProvides} icon="…" />
                )}
            </div>
            <div className="text-xs text-gray-500 mb-1">Additional Description for Core Offerings</div>
            <div className="text-base text-gray-800 font-medium whitespace-pre-wrap">
                {formData.howToDeliver || 'N/A'}
            </div>
        </div>
    </div>

    {/* Pricing Model Section */}
    <div>
        <div className="text-lg font-bold text-gray-800 mb-2">Pricing Model</div>
            <div className="border border-gray-200 rounded-xl p-4 bg-white">
                <div className="flex flex-wrap gap-2 mb-2">
                    {formData.pricingModel && formData.pricingModel.length > 0 ? (
                        formData.pricingModel.map((model, idx) => (
                        <Chip key={idx} label={model} icon={pricingIcons[model] || "…"} />
                        ))
                    ) : (
                        <span className="text-xs text-gray-500">No pricing model selected</span>
                    )}
                    {formData.customPricing && (
                        <Chip label={formData.customPricing} icon="…" />
                    )}
                </div>
            <div className="text-xs text-gray-500 mb-1">Additional Description for Pricing Model</div>
            <div className="text-base text-gray-800 font-medium whitespace-pre-wrap">
            {formData.pricingDescription || 'N/A'}
            </div>
        </div>
    </div>

    {/* AI Additional Section */}
    <div>
      <div className="text-lg font-bold text-gray-800 mb-2">AI Additional Information</div>
        <div className="border border-gray-200 rounded-xl p-4 bg-white">
            <div className="text-base text-gray-800 font-medium">
                {formData.aiAdditionalInfo || 'N/A'}
            </div>
        </div>
    </div>
  </div>
);

export default Step6Summary;
