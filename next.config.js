/** @type {import('next').NextConfig} */

module.exports = {
  // // devolpe ---------------------------------------------------
  // // 개발 서버용 백엔드로 프록시하는 방법을 설정합니다.
  async rewrites() {
    return [
      {
        source: '/favicon.ico',
        destination: process.env.NEXT_PUBLIC_DOMAIN
      }
    ];
  },

  images: {
    unoptimized: true
  }

  // // 리렌더링 방지 true 하면 두번씩 렌더링됨
  // reactStrictMode: false,

  // deploy -----------------------------------------------------

  // nginx 빌드용
  // output: 'export',
};
