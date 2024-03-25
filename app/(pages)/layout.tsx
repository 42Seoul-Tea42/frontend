'use client';

import { Provider, useDispatch } from 'react-redux';
import Footer from './components/Footer';
import store from '../redux/store';
import Chat from './(chat)/Chat';
import { MessageSVG } from '../svg/HomeNavBarSVG';
import { useEffect, useState } from 'react';
import HomeNavBar from './components/HomeNavBar'; // Import the HomeNavBar component

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [viewChat, setViewChat] = useState<boolean>(false);

  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <HomeNavBar />
      <main>
        <div className={viewChat ? '' : 'hidden'}>
          <Chat />
        </div>
        <button
          onClick={() => setViewChat(!viewChat)}
          className="flex flex-col bg-gray-200 hover:bg-gray-400 text-red-400 items-center justify-center rounded-full w-20 h-20 fixed bottom-10 right-10 shadow-md"
        >
          <MessageSVG />
          <p className="font-bold">Chat</p>
        </button>
        {children}
      </main>
      <Footer />
    </Provider>
  );
};

export default HomeLayout;
