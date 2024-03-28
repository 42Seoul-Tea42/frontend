'use client';

import { useState } from 'react';
import axiosInstance from '../../utils/axios';
import { useSearchParams } from 'next/navigation';

const SettingPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const searchParams = useSearchParams();
  const token = searchParams.get('key');

  const handleSettingPassword = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      await axiosInstance.post(`/user/resetPw/${token}`, {
        password: password
      });
      alert('비밀번호가 성공적으로 변경되었습니다.');
    } catch (error) {
      alert('유효하지 않습니다. 다시 시도해주세요.');
      window.location.href = '/user?page=1';
    }
  };

  return (
    <div>
      <div className="mb-5">
        <input
          type="password"
          id="password"
          className="block py-2.5 w-full text-sm text-gray-900"
          placeholder="비밀번호를 입력해주세요."
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-5">
        <input
          type="password"
          id="confirm password"
          className="block py-2.5 w-full text-sm text-gray-900"
          placeholder="비밀번호를 다시 입력해주세요."
          required
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={handleSettingPassword}
        className="text-white mt-5 bg-gray-700 hover:bg-black-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black-600 dark:hover:bg-black-700 dark:focus:ring-black-800"
      >
        submit
      </button>
    </div>
  );
};

export default SettingPassword;
