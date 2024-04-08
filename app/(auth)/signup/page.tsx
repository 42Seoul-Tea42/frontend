'use client';

import React from 'react';
import SignupForm from './components/SignupForm';

const Signup: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <SignupForm />
      </div>
    </div>
  );
};

export default Signup;
