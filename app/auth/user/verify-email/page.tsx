'use client';

const VerifyEmail: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="relative min-w-96 min-h-96 flex flex-col text-center items-center justify-center bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="items-end ml-5 mr-5 mt-5">
          <h5 className="tracking-wide text-3xl ml-5 min-w-80 font-semibold text-gray-900 dark:text-white flex-grow">
            이메일을 인증해주세요.
          </h5>
          <div className="flex">
            <input
              type="id"
              name="floating_id"
              onChange={() => {}}
              id="floating_id"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="ID를 입력해주세요."
              required
            />
            <button
              type="button"
              className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {}}
            >
              비밀번호 재설정 메일보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
