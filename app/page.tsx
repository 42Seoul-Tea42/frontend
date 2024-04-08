'use client';

import { useRouter } from 'next/navigation';
import Cup from './Cup';
import LearnMorePage from './LearnMorePage';
import { useEffect } from 'react';
import { DirectionSVG } from './svg';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const scrollPage = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth'
    });
  };

  const pushLoginPage = () => {
    router.push('/login');
  };

  return (
    <>
      {/* Main page - Tea for Two */}
      <div className="w-full h-screen col-3 space-y-10">
        <h1 className="tracking-wider flex justify-center items-end py-10 text-6xl font-extrabold bg-red-200 h-1/5">
          Tea for Two
        </h1>
        <div className="flex flex-col justify-center min-w-24 max-h-14 h-1/5">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button
                  type="button"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900"
                  onClick={pushLoginPage}
                >
                  <p className="mr-2">Get Started</p>
                  <DirectionSVG direction="right" size="4" />
                </button>
                <button
                  type="button"
                  className="py-3 px-5 sm:ms-4 text-sm font-bold text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
                  onClick={scrollPage}
                >
                  Learn more
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="h-3/5 flex">
          <Cup />
        </div>
      </div>
      {/* Second Page - Learn more */}
      <LearnMorePage />
    </>
  );
};

export default LandingPage;
