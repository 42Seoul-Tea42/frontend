/** @type {import('next').NextConfig} */

module.exports = {
  // 개발 서버용 백엔드로 프록시하는 방법을 설정합니다.
  // async rewrites() {
  //   return [
  //     {
  //       source: '/favicon.ico',
  //       destination: 'http://10.14.7.1:80/'
  //     }
  //   ];
  // },

  // nginx 빌드용
  output: 'export',

  images: {
    unoptimized: true
  },

  // 리렌더링 방지 true 하면 두번씩 렌더링됨
  reactStrictMode: false
};
