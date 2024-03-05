import { Fragment, useEffect } from 'react';
import StepperSVG from '../../../svg/StepperSVG';

interface StepperItem {
  step: Steps;
  label: string;
}

interface SignupStepperProps {
  currentStep: Steps;
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0) + str.slice(1).toLowerCase();
};

export enum Steps {
  ACCOUNT_INFO,
  PERSONAL_INFO,
  PROFILE_UPLOAD,
  EMOJI_INFO
}

const SignupStepper: React.FC<SignupStepperProps> = ({ currentStep }) => {
  const steps = Object.entries(Steps)
    .filter(([_, value]) => typeof value === 'number')
    .map(([key, value]) => ({
      step: value as number,
      label: capitalizeFirstLetter(key.replace('_', ' '))
    }));

  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      {steps.map((item, index) => (
        <li
          key={index}
          className={`flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-solid after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700 ${
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
