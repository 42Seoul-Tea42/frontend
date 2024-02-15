'use client';

import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from './store';
import Cup from './Cup';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const scrollPage = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  };

  const pushLoginPage = () => {
    router.push('auth/login');
  };

  return (
    <>
      <Provider store={store}>
        {/* Main page - Tea for Two */}
        <div className="col-3 h-screen space-y-10">
          <div className="flex justify-center items-end py-10 text-6xl font-extrabold bg-red-200 h-1/5">
            Tea for Two
          </div>
          <div className="flex flex-col px-36 space-y-5 sm:flex-row sm:justify-center sm:space-y-0">
            <button
              type="button"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
              onClick={pushLoginPage}
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <button
              type="button"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-bold text-center text-black rounded-lg border border-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
              onClick={scrollPage}
            >
              Learn more
            </button>
          </div>
          <Cup />
        </div>

        {/* Second Page - Learn more */}
        <div className="w-full mx-auto p-4 h-screen bg-red-200"></div>
      </Provider>
    </>
  );
};

export default LandingPage;
