'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { signupSteps } from '../../store/slices/signupSlice';
import SignupStepper from './components/SignupStepper';
import AccountInfoForm from './components/AccountInfoForm';
import PersonalInfoForm from './components/PersonalInfoForm';
import ProfileUploadForm from './components/ProfileUploadForm';
import EmojiInfoForm from '../login/components/EmojiInfoForm';

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
      case signupSteps.ProfileUpload:
        setCurrentForm(<ProfileUploadForm />);
        break;
      case signupSteps.EmojiInfo:
        setCurrentForm(<EmojiInfoForm />);
        break;
      default:
        setCurrentForm(<AccountInfoForm />);
        break;
    }
  }, [currentStep]);

  return (
    <div className="items-center justify-center h-screen flex flex-col">
      <div className="h-48">
        <SignupStepper currentStep={currentStep} />
      </div>
      {currentForm}
      {/* <AccountInfoForm />
      <PersonalInfoForm />
      <ProfileUploadForm />
      <EmojiInfoForm /> */}
    </div>
  );
};

export default Signup;
