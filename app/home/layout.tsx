"use client";

import Footer from "./Footer";
import HomeNavBar from "./HomeNavBar";

// 홈 레이아웃 컴포넌트
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HomeNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
