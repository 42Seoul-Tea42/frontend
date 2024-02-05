"use client";

import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HomeNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
