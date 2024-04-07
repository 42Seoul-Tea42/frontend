import './styles/tailwind.css';
import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'Tea For Two',
  description: 'Tea For Two is a social matching platform.',
  applicationName: 'teafortwo'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ''} />
    </html>
  );
};

export default RootLayout;
