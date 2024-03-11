'use client';

import UserDetailsButton from '../components/UserDetailsButton';
import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="mt-40 md:m-40">
        <ImageConverter />
        <UserDetailsButton targetId={1} />
      </div>
    </div>
  );
};

export default Home;
