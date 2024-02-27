'use client';

import { Fragment } from 'react';
import { signupSteps } from '../../../store/slices/signupSlice';
import StepperSVG from '../../../svg/StepperSVG';

interface StepperItem {
  step: number;
  label: string;
}

const steps: StepperItem[] = [
  { step: signupSteps.AccountInfo, label: 'Account Info' },
  { step: signupSteps.PersonalInfo, label: 'Personal Info' },
  { step: signupSteps.ProfileUpload, label: 'Profile Upload' },
  { step: signupSteps.EmojiInfo, label: 'Emoji Info' }
];

interface SignupStepperProps {
  currentStep: number;
}

const SignupStepper: React.FC<SignupStepperProps> = ({ currentStep }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((item, index) => (
        <li
          key={index}
          className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
            currentStep >= item.step ? 'text-blue-600 dark:text-blue-500' : ''
          } ${currentStep === item.step ? 'font-bold' : ''}`}
        >
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            {currentStep > item.step ? <StepperSVG /> : <span className="me-2">{index + 1}</span>}
            {item.label.split(' ').map((word, idx) => (
              <Fragment key={idx}>
                {idx > 0 && <span className="hidden sm:inline-flex sm:ms-2"> </span>}
                <span>{word}</span>
              </Fragment>
            ))}
          </span>
        </li>
      ))}
    </ol>
  );
};

export default SignupStepper;
