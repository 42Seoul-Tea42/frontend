'use client';

import React, { useEffect, useState } from 'react';
import SignupStepper, { Steps } from './components/SignupStepper';
import AccountInfoForm from './components/AccountInfoForm';
import PersonalInfoForm from './components/PersonalInfoForm';
import ProfileUploadForm from './components/ProfileUploadForm';
import EmojiInfoForm from '../login/components/EmojiInfoForm';

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.ACCOUNT_INFO);
  const [currentForm, setCurrentForm] = useState<JSX.Element | null>(null);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  useEffect(() => {
    switch (currentStep) {
      case Steps.ACCOUNT_INFO:
        setCurrentForm(<AccountInfoForm onNextStep={nextStep} />);
        break;
      case Steps.PERSONAL_INFO:
        setCurrentForm(<PersonalInfoForm onNextStep={nextStep} />);
        break;
      case Steps.PROFILE_UPLOAD:
        setCurrentForm(<ProfileUploadForm onNextStep={nextStep} />);
        break;
      case Steps.EMOJI_INFO:
        setCurrentForm(<EmojiInfoForm onNextStep={nextStep} />);
        break;
      default:
        setCurrentForm(<AccountInfoForm onNextStep={nextStep} />);
        break;
    }
  }, [currentStep]);

  return (
    <div className="items-center justify-center h-screen flex flex-col">
      <div className="h-48">
        <SignupStepper currentStep={currentStep} />
      </div>
      {currentForm}
    </div>
  );
};

export default Signup;
