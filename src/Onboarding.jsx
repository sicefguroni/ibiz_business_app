import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import BusinessIdeaStep from './components/onboarding/BusinessIdeaStep';
import BeneficiariesStep from './components/onboarding/BeneficiariesStep';
import BusinessProvidesStep from './components/onboarding/BusinessProvidesStep';
import PricingModelStep from './components/onboarding/PricingModelStep';
import CapitalRangeStep from './components/onboarding/CapitalRangeStep';
import Step6Summary from './components/onboarding/Summarypage';
import LoadingAnimation from './components/onboarding/Analyzinganimation';

import StepLayout from './components/StepLayout';
import FloatingCard from './components/card';
import StepProgressBar from './components/ProgressBar';

import OnboardingBackground from './assets/Onboardingbg.png';

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
        capitalRange: 0,
    });
    const [submissionStatus, setSubmissionStatus] = useState('idle');

    useEffect(() => {
        document.body.style.backgroundImage = `url(${OnboardingBackground})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundAttachment = 'fixed';
        document.body.style.backgroundColor = '#fbf2ec';
    }, [step]);

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
        /*
        setSubmissionStatus('loading');
        setStep(7);
        try {
            const response = await fetch('http://localhost:5000/api/onboarding', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            const stringData = JSON.stringify(data);
            navigate('/feasibility', { state: { userData: stringData } });

            setSubmissionStatus('success') 
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmissionStatus('error');
        } */

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
                    <CapitalRangeStep
                        formData={formData}
                        handleChange={handleChange}
                        setFormData={setFormData}
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
            >
                {content}
            </StepLayout>
        );
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #F9F1EA;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    margin: 0;
                    transition: background-image 0.5s ease-in-out;
                    overflow-y: auto;
                }
            `}</style>

            <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 w-full bg-[#F9F1EA]">
                {step <= 6 && <StepProgressBar currentStep={step} />}

                {step <= 6 ? (
                    <FloatingCard>
                        {renderStepContent()}
                    </FloatingCard>
                ) : (
                    renderStepContent()
                )}
            </div>

        </>
    );
};

export default Onboarding;
