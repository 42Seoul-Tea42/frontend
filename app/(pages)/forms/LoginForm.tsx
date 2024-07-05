'use client';

import { useRouter } from 'next/navigation';
import LoginIdInput from './LoginIdInput';
import { BlueHyperLink, SubmitButton } from '@/ui';
import PasswordInput from './PasswordInput';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import LoadingSpinner from '../components/LoadingSpinner';

interface LoginFormProps {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function LoginForm({ onSubmit }: LoginFormProps) {
  const router = useRouter();
  const error = useSelector((state: RootState) => state.loginSlice.error);
  return (
    <div className="relative">
      <p className="absolute bottom-24 text-red-600">{error}</p>
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
    </div>
  );
}

export default LoginForm;
