import "./styles/tailwind.css";
import Head from "next/head";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tea For Two",
  description: "Tea For Two is a social media platform for tea lovers.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>tea for two</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>{children}</body>
      </html>
    </>
  );
}

export default RootLayout;
