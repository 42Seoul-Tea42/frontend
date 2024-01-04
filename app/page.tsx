"use client";

import { useRouter } from "next/navigation";

function LandingPage() {
  const router = useRouter();

  const scrollView = () => {
    (function smoothScroll() {
      const targetY = window.innerHeight;
      const duration = 500;

      const startTime = performance.now();
      function animateScroll(currentTime: number) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo(0, targetY * progress);

        if (elapsedTime < duration) {
          window.requestAnimationFrame(animateScroll);
        }
      }
      window.requestAnimationFrame(animateScroll);
    })();
  };

  return (
    <>
      {/* Tea for Two Main */}
      <div className="w-full mx-auto h-screen bg-blue-100">
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-center bg-red-100">Tea for Two</h1>
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
            onClick={() => router.push("/home")}
          >
            Get Started
          </button>
        </div>
      </div>
      {/* Learn more */}
      <div className="w-full mx-auto p-4 h-screen bg-red-400"></div>
    </>
  );
}

export default LandingPage;
