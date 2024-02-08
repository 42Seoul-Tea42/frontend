'use client';

import { Provider } from 'react-redux';
import Footer from './components/Footer';
import HomeNavBar from './components/HomeNavBar';
import store from '../store';

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <HomeNavBar />
      <main>{children}</main>
      <Footer />
    </Provider>
  );
}

export default HomeLayout;
