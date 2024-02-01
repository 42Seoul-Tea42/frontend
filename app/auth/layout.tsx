'use client';

import { Provider } from 'react-redux';
import store from '../store';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
}

export default AuthLayout;
