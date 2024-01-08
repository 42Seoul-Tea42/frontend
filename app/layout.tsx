import "./styles/tailwind.css";
import Head from "next/head";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html>
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
