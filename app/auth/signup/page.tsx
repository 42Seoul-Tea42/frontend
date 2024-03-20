'use client';

import React, { useEffect, useState } from 'react';
import SignupStepper, { Steps } from './components/SignupStepper';
import AccountInfoForm from './components/AccountInfoForm';
import ProfileUploadForm from './components/PictureUploadForm';
import EmojiInfoForm from '../login/components/EmojiInfoForm';
import ProfileInfoForm from './components/ProfileInfoForm';

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
      case Steps.PROFILE_INFO:
        setCurrentForm(<ProfileInfoForm onNextStep={nextStep} />);
        break;
      case Steps.PICTURE_UPLOAD:
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
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-20">
          <SignupStepper currentStep={currentStep} />
        </div>
        {currentForm}
      </div>
    </div>
  );
};

export default Signup;
