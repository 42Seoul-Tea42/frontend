'use client';

import { useRouter } from 'next/navigation';
import LoginIdInput from './LoginIdInput';
import { BlueHyperLink, SubmitButton } from '@/UI';
import PasswordInput from './PasswordInput';

interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const router = useRouter();
  return (
    <form onSubmit={onSubmit} className="space-y-6 mb-1 text-start">
      <div className="min-w-[300px]">
        <LoginIdInput />
      </div>
      <div className="w-full">
        <PasswordInput />
      </div>
      <SubmitButton text="Login your Account" />
      <details className="text-gray-700">
        <summary> help? </summary>
        <div className="ml-5">
          <div className="mt-1"></div>
          <BlueHyperLink
            text={'Lost Password?'}
            onClick={() => {
              router.push('/auth/reset-password');
            }}
          />
          <div className="mt-1"></div>
          <BlueHyperLink
            text={"Didn't receive the Email?"}
            onClick={() => {
              router.push('/auth/send-email');
            }}
          />
        </div>
      </details>
    </form>
  );
}

export default LoginForm;
