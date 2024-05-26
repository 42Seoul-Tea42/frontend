import { useRouter } from 'next/navigation';

const LearnMorePage: React.FC = () => {
  const router = useRouter();
  const handleStart = () => {
    router.push('auth/login');
  };

  return (
    <div className="w-full h-screen bg-green-200 flex items-center justify-center">
      <div className="p-20 h-3/5 text-start">
        <p className="tracking-wide text-4xl mb-10 font-semibold leading-relaxed text-gray-900">Fancy a Cup of Tea?</p>
        <p className="tracking-wide text-2xl mb-10 max-w-4xl font-medium text-gray-600">
          Meeting new people is an opportunity to expand the horizons of your life.<br></br>
          Discover your match for new experiences,
          <br /> make new friends,
          <br />
          and perhaps find a lover,
          <br />
          all as effortlessly as sipping a cup of tea.<br></br>
          Prepare an open-minded cup (yes, it means you!) and get ready for heartwarming connections!
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
