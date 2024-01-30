'use client';

import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from './store';
import Cup from './Cup';

function LandingPage() {
  const router = useRouter();

  const scrollView = () => {
    const targetY = window.innerHeight;
    const duration = 500;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      window.scrollTo(0, targetY * progress);

      if (elapsedTime < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };
    window.requestAnimationFrame(animateScroll);
  };

  return (
    <>
      <Provider store={store}>
        {/* Main page - Tea for Two */}
        <div className="w-full mx-auto h-screen bg-blue-100">
          <div className="flex items-center justify-center h-screen">
            <div>
              <h1 className="text-center bg-red-100">Tea For Two</h1>
              <button
                type="button"
                className="text-black bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={scrollView}
              >
                Learn More
              </button>
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={() => router.push('/auth/login')}
              >
                Get Started
              </button>
              <Cup />
            </div>
          </div>
        </div>

        {/* Second Page - Learn more */}
        <div className="w-full mx-auto p-4 h-screen bg-red-400"></div>
      </Provider>
    </>
  );
}

export default LandingPage;
