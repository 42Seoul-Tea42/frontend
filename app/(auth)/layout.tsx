'use client';

import { Provider } from 'react-redux';
import store from '../store/store';
import { CookiesProvider } from 'react-cookie';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <CookiesProvider>
      <Provider store={store}>{children}</Provider>
    </CookiesProvider>
  );
};

export default AuthLayout;
