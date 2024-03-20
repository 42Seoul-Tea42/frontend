'use client';

import { useState } from 'react';
import axiosInstance from '../../../utils/axios';

const ResetPassword: React.FC = () => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const findId = async () => {
    alert('가입하신 아이디는 땡땡땡 입니다.');
  };

  const sendResetPasswordMail = async () => {
    // const result = await axiosInstance.post('/user/find', {
    //   login_id: id
    // });
    alert('가입하신 메일을 확인해주세요.');
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex min-w-96 min-h-96 flex flex-col text-center gap-y-10 items-start justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div>
          <h5 className="text-start tracking-wide text-3xl ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            아이디찾기
          </h5>
          <div className="flex">
            <input
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Email을 입력해주세요."
              required
            />
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={findId}
            >
              아이디찾기
            </button>
          </div>
        </div>
        <div>
          <h5 className="text-start tracking-wide text-3xl ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            가입하신 이메일을 통해서 비밀번호를 변경해주세요.
          </h5>
          <div className="flex">
            <input
              type="id"
              name="floating_id"
              onChange={e => setId(e.target.value)}
              id="floating_id"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="ID를 입력해주세요."
              required
            />
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={sendResetPasswordMail}
            >
              비밀번호 재설정 메일보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
