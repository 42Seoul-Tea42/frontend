'use client';

import React, { useEffect, useState } from 'react';
import AccountInfoForm from './components/AccountInfoForm';
import PictureUploadForm from './components/PictureUploadForm';
import EmojiInfoForm from '../login/components/EmojiInfoForm';
import ProfileInfoForm from './components/ProfileInfoForm';

const Signup: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [currentForm, setCurrentForm] = useState<JSX.Element | null>(null);

  const onNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const forms = {
    oauth: [
      <ProfileInfoForm onNextStep={onNextStep} />,
      <PictureUploadForm onNextStep={onNextStep} />,
      <EmojiInfoForm onNextStep={onNextStep} />
    ],
    normal: [
      <AccountInfoForm onNextStep={onNextStep} />,
      <ProfileInfoForm onNextStep={onNextStep} />,
      <PictureUploadForm onNextStep={onNextStep} />,
      <EmojiInfoForm onNextStep={onNextStep} />
    ]
  };

  useEffect(() => {
    setCurrentForm(forms.normal[currentStep]);
  }, [currentStep]);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">{currentForm}</div>
    </div>
  );
};

export default Signup;
