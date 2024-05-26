import { useRouter } from 'next/navigation';

const LearnMorePage: React.FC = () => {
  const router = useRouter();
  const handleStart = () => {
    router.push('auth/login');
  };

  return (
    <div className="w-full h-screen bg-red-200 flex items-center justify-center">
      <div className="p-20 h-3/5 text-start">
        <p className="tracking-wide text-3xl mb-5 font-semibold leading-relaxed text-gray-900">Fancy a Cup of Tea?</p>
        <p className="tracking-wide text-lg max-w-4xl font-medium text-gray-600">
          Meeting new people is an opportunity to expand the horizons of your life.<br></br>
          Discover your match for new experiences, make new friends, and perhaps find a lover,
          <br></br>
          all as effortlessly as sipping a cup of tea.<br></br>
          Prepare an open-minded cup (yes, it means you!) and get ready for heartwarming connections!
          <br></br>
        </p>
        <button
          type="button"
          className="flex tracking-wide justify-center items-center mt-10 py-3 px-5 text-base font-semibold text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300"
          onClick={handleStart}
        >
          Start Now !
        </button>
      </div>
    </div>
  );
};

export default LearnMorePage;
