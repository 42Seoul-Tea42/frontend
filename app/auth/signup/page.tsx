'use client';

import AccountInfoForm from './AccountInfoForm';
import SignupStepper from './SignupStepper';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Signup: React.FC = () => {
  const currentStep = useSelector((state: RootState) => state.signupViewer.currentStep);
  return (
    <div className="items-center justify-center h-screen flex flex-col">
      <div className="mb-20">
        <SignupStepper />
      </div>
      <AccountInfoForm />
    </div>
  );
};

export default Signup;
