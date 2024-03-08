import './styles/tailwind.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tea For Two',
  description: 'Tea For Two is a social matching platform.',
  applicationName: 'teafortwo'
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
