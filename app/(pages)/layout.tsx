'use client';

import { Provider, useDispatch, useSelector } from 'react-redux';
import Footer from './components/Footer';
import Chat from './(chat)/Chat';
import { useState } from 'react';
import HomeNavBar from './components/HomeNavBar'; // Import the HomeNavBar component
import { SocketProvider } from '../utils/socketContext';
import ChatButton from './(chat)/ChatButton';
import store from '../redux/store';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const [viewChat, setViewChat] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <SocketProvider>
        <HomeNavBar />
        <main>
          <div className={viewChat ? '' : 'hidden'}>
            <Chat />
          </div>
          <ChatButton viewChat={viewChat} setViewChat={setViewChat} />
          {children}
        </main>
        <Footer />
      </SocketProvider>
    </Provider>
  );
};

export default HomeLayout;
