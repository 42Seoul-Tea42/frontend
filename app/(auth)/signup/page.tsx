'use client';

import React from 'react';
import SignupForm from './components/SignupForm';
import EmailVerificationForm from './components/EmailVerificationForm';

const Signup: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        {/* <SignupForm /> */}
        <EmailVerificationForm />
      </div>
    </div>
  );
};

export default Signup;
