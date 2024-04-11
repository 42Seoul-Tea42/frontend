'use client';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

interface EmailLoginFormProps {
  setId: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  lostPassword: () => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const EmailLoginForm: React.FC<EmailLoginFormProps> = ({ setId, setPassword, lostPassword, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6 mb-1 text-start">
      <div>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID</label>
        <input
          type="id"
          name="id"
          onChange={setId}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          placeholder=""
          required
        ></input>
      </div>
      <div>
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={setPassword}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          required
        ></input>
      </div>
      <button onClick={lostPassword} className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
        Lost Password?
      </button>
      <button
        type="submit"
        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login to your account
      </button>
    </form>
  );
};

export default EmailLoginForm;
