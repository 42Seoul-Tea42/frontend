'use client';

import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from './store';
import Cup from './Cup';

function LandingPage() : React.ReactNode {
  const router = useRouter();

  const scrollPage = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      behavior: 'smooth',
    })
  }

  const pushLoginPage = () => {
    router.push('auth/login'); 
  }
  
  return (
    <>
      <Provider store={store}>
        {/* Main page - Tea for Two */}
        <div className="w-full mx-auto h-screen bg-blue-100">
            <h1 className="text-center bg-red-100">Tea For Two</h1>
          <div className="flex items-center justify-center h-screen">
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                <button 
                  type="button" 
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-bold text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                  onClick={pushLoginPage}
                  >
                    Get started
                    <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
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
        </div>

        {/* Second Page - Learn more */}
        <div className="w-full mx-auto p-4 h-screen bg-red-400"></div>
      </Provider>
    </>
  );
}

export default LandingPage;
