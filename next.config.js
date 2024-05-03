/** @type {import('next').NextConfig} */

module.exports = {
  // nginx 빌드용
  // output: 'export',
  images: {
    unoptimized: true
  },
  // next.config.js

  // 개발 서버용 백엔드로 프록시하는 방법을 설정합니다.
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `${process.env.NEXT_PUBLIC_SERVER_URL}/:path*`
      }
    ];
  }
};
