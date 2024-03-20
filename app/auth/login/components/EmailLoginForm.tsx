'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axiosInstance from '../../../utils/axios';

const EmailLoginForm: React.FC = () => {
  const router = useRouter();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const clickSubmit = async () => {
    const result = await axiosInstance.post('/user/login', {
      login_id: id,
      pw: password
    });
    if (result && result.status === 200) {
      router.push('/home');
    }
  };

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handlepassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const findPassword = () => {
    router.push('/auth/user/reset-password');
  };

  return (
    <div className="space-y-6 mb-1 text-start">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your ID
        </label>
        <input
          type="id"
          name="id"
          onChange={handleId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder=""
          required
        ></input>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handlepassword}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        ></input>
      </div>
      <button
        onClick={findPassword}
        className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
      >
        Lost Password?
      </button>
      <button
        type="button"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={clickSubmit}
      >
        Login to your account
      </button>
    </div>
  );
};

export default EmailLoginForm;
