'use client';

import { signupSteps } from '../../store/slices/signupSlice';
import StepperSVG from '../../svg/StepperSVG';

interface SignupStepperProps {
  currentStep: number;
}

const SignupStepper: React.FC<SignupStepperProps> = ({ currentStep }) => {
  return (
    <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
      <li className="flex md:w-full items-center text-blue-600 dark:text-blue-500 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {currentStep > signupSteps.AccountInfo ? <StepperSVG /> : <span className="me-2">1</span>}
          Account <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {currentStep > signupSteps.PersonalInfo ? (
            <StepperSVG />
          ) : (
            <span className="me-2">2</span>
          )}
          Personal <span className="hidden sm:inline-flex sm:ms-2">Info</span>
        </span>
      </li>
      <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700">
        <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
          {currentStep > signupSteps.ProfileUpload ? (
            <StepperSVG />
          ) : (
            <span className="me-2">3</span>
          )}
          Profile <span className="hidden sm:inline-flex sm:ms-2">Upload</span>
        </span>
      </li>
      <li className="flex items-center">
        {currentStep > signupSteps.EmojiInfo ? <StepperSVG /> : <span className="me-2">4</span>}
        Emoji <span className="hidden sm:inline-flex sm:ms-2">Info</span>
      </li>
    </ol>
  );
};

export default SignupStepper;
