import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import BusinessIdeaStep from '../components/onboarding/BusinessIdeaStep';
import BeneficiariesStep from '../components/onboarding/BeneficiariesStep';
import BusinessProvidesStep from '../components/onboarding/BusinessProvidesStep';
import PricingModelStep from '../components/onboarding/PricingModelStep';
import AIAdditional from '../components/onboarding/AIAdditional';
import Step6Summary from '../components/onboarding/Summarypage';
import LoadingAnimation from '../components/onboarding/Analyzinganimation';

import StepLayout from '../components/StepLayout';
import StepProgressBar from '../components/progressbar';
import Navbar from '../components/userPages/Navbar';

const Onboarding = () => {
    const navigate = useNavigate();
    const totalSteps = 5;
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        businessIdea: '',
        businessLocation: '',
        beneficiaries: [],
        customBeneficiaries: '',
        describeCustomers: '',
        businessProvides: [],
        customBusinessProvides: '',
        howToDeliver: '',
        pricingModel: [],
        customPricing: '',
        pricingDescription: '',
        aiAdditionalInfo: '',
    });
    const [submissionStatus, setSubmissionStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleMultiSelectChange = (name, value) => {
        setFormData((prevData) => {
            const currentValues = prevData[name];
            return {
                ...prevData,
                [name]: currentValues.includes(value)
                    ? currentValues.filter((item) => item !== value)
                    : [...currentValues, value],
            };
        });
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => Math.max(1, prev - 1));
// hellop
    const handleSubmit = async () => {
        const data = JSON.stringify(formData);

        navigate('/feasibility', { state: { userData: data } }); 
    };

    const handleCreate = () => {
        setTimeout(() => {
            nextStep();
        }, 1000);
    };

    const renderStepContent = () => {
        let content;
        switch (step) {
            case 1:
                content = (
                    <BusinessIdeaStep
                        formData={formData}
                        handleChange={handleChange}
                        nextStep={nextStep}
                    />
                );
                break;
            case 2:
                content = (
                    <BeneficiariesStep
                        formData={formData}
                        handleChange={handleChange}
                        handleMultiSelectChange={handleMultiSelectChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
                break;
            case 3:
                content = (
                    <BusinessProvidesStep
                        formData={formData}
                        handleChange={handleChange}
                        handleMultiSelectChange={handleMultiSelectChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
                break;
            case 4:
                content = (
                    <PricingModelStep
                        formData={formData}
                        handleChange={handleChange}
                        handleMultiSelectChange={handleMultiSelectChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
                break;
            case 5:
                content = (
                    <AIAdditional
                        formData={formData}
                        handleChange={handleChange}
                        nextStep={nextStep}
                        prevStep={prevStep}
                    />
                );
                break;
            case 6:
                content = (
                    <Step6Summary
                        formData={formData}
                        handleSubmit={handleSubmit}
                        prevStep={prevStep}
                    />
                );
                break;
            case 7:
                return <LoadingAnimation submissionStatus={submissionStatus} />;
            default:
                return null;
        }

        return (
            <StepLayout
                step={step}
                totalSteps={totalSteps + 1}
                onNext={step === 5 ? handleCreate : nextStep}
                onBack={prevStep}
                onAnalyze={handleSubmit}
                onEdit={() => setStep(1)}
                title={step === 2 ? 'Who will benefit most from your business idea?' 
                    : step === 3 ? 'What does your business provide?' 
                    : step === 4 ? (<>How will you make money, <br /> and how much money are you willing to start?</>) 
                    : step === 5 ? 'Is there anything else AI should consider?' 
                    : step === 6 ? 'Your Business Idea\'s Details' : ''}
            >
                {content}
            </StepLayout>
        );
    };

    return (
        <>
            <div className="min-h-screen w-screen flex flex-col items-center justify-center landing-bg">
                <Navbar isNotMainPage={true}/>
                {step < 6 && <StepProgressBar currentStep={step} />}

                {step <= 6 ? (
                    renderStepContent()
                ) : (
                    renderStepContent()
                )}
            </div>

        </>
    );
};

export default Onboarding;
