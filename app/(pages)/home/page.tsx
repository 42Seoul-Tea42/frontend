'use client';

import UserDetailsBar from '../components/UserDetailsBar';
import ImageConverter from './components/ImageConverter';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen">
      <div className="mt-40 md:m-40">
        <ImageConverter />
        <UserDetailsBar targetId={1} name="이름" distance={5} />
      </div>
    </div>
  );
};

export default Home;
