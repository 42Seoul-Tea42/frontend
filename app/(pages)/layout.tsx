'use client';

import { Provider } from 'react-redux';
import Footer from './components/Footer';
import HomeNavBar from './components/HomeNavBar';
import ChatVisibleControl from './(chat)/components/ChattingVisibleControl';
import Chatting from './(chat)/Chatting';
import store from '@/redux/store';
import { SocketProvider } from '@/socket/socketContext';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Provider store={store}>
        <SocketProvider>
          <HomeNavBar />
          <ChatVisibleControl props={<Chatting />} />
          <main>{children}</main>
          <Footer />
        </SocketProvider>
      </Provider>
    </div>
  );
};

export default HomeLayout;
