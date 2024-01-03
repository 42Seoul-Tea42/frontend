import "./styles/tailwind.css";
import Head from "next/head";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html>
        <Head>
          <title>tea for two</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
