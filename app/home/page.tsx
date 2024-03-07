'use client';

import Image from 'next/image';
import Draggable from 'react-draggable';

const Home: React.FC = () => {
  return (
    <div className="w-full h-screen">
      {' '}
      <Draggable>
        <div className="mx-auto mt-20 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="relative overflow-hidden rounded-lg md:h-96">
            <Image
              src="/조유리.webp"
              alt="face"
              width={500}
              height={500}
              priority={true}
              draggable={false}
            />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
