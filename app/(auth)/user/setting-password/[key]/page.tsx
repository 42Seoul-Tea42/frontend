'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import axiosInstance from '../../../../utils/axios';

const page: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const param = useParams<{ key: string }>();

  const handleSettingPassword = async () => {
    if (password !== confirmPassword) {
      return;
    }

    const response = await axiosInstance.post(`/user/resetPw/${param.key}`, {
      password: password
    });
    if (response && response.status === 200) {
      alert('비밀번호가 성공적으로 변경되었습니다.');
    } else {
      alert('비밀번호 변경에 실패했습니다.');
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="items-end ml-5 mr-5 mt-5">
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@flowbite.com"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your confirm password
                </label>
                <input
                  type="confirm password"
                  id="confirm password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleSettingPassword}
                className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
