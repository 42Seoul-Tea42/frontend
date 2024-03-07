'use client';

import './styles/tailwind.css';
import store from './store/store';
import type { Metadata } from 'next';
import { Provider as ReduxProvider } from 'react-redux';

export const metadata: Metadata = {
  title: 'Tea For Two',
  description: 'Tea For Two is a sns matching platform.',
  applicationName: 'teafortwo'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <ReduxProvider store={store}>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
};

export default RootLayout;
