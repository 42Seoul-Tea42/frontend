'use client';

import { Provider } from 'react-redux';
import Footer from './components/Footer';
import { SocketProvider } from '../socket/socketContext';
import store from '../redux/store';
import HomeNavBar from './components/HomeNavBar';
import ChatVisibleControl from './(chat)/components/ChattingVisibleControl';
import Chatting from './(chat)/Chatting';

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
