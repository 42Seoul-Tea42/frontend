import "./styles/tailwind.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tea For Two",
  description: "Tea For Two is a social media platform for tea lovers.",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}

export default RootLayout;
