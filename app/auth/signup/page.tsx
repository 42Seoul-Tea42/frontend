'use client';

import React, { useEffect, useState } from 'react';
import AccountInfoForm from './AccountInfoForm';
import SignupStepper from './SignupStepper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import PersonalInfoForm from './PersonalInfoForm';
import { signupSteps } from '../../store/slices/signupSlice';

const Signup: React.FC = () => {
  const currentStep = useSelector((state: RootState) => state.signupViewer.currentStep);
  const [currentForm, setCurrentForm] = useState<JSX.Element | null>(null);

  useEffect(() => {
    switch (currentStep) {
      case signupSteps.AccountInfo:
        setCurrentForm(<AccountInfoForm />);
        break;
      case signupSteps.PersonalInfo:
        setCurrentForm(<PersonalInfoForm />);
        break;
      case signupSteps.EmojiInfo:
        setCurrentForm(<div>Emoji Info</div>);
        break;
      default:
        setCurrentForm(<AccountInfoForm />);
        break;
    }
  }, [currentStep]);

  return (
    <div className="items-center justify-center h-screen flex flex-col">
      <div className="mb-20">
        <SignupStepper currentStep={currentStep} />
      </div>
      {currentForm}
    </div>
  );
};

export default Signup;
