'use client';

import { SubmitButton } from '../../UI';

interface SignupFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  inputs: JSX.Element;
  subject: string;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSubmit, subject, inputs }) => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="max-w-md min-w-96 min-h-96 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <h5 className="text-lg font-semibold mb-5 underline decoration-wavy decoration-pink-500/50">{subject}</h5>
          {inputs}
          <div className="flex justify-end">
            <SubmitButton text="회원가입" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
