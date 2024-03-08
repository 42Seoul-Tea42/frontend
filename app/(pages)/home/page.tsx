'use client';

import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="mt-40 md:m-40">
        <ImageConverter />
      </div>
    </div>
  );
};

export default Home;
