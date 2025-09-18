
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
   async redirects() {
    return [
      {
        source: '/games/apps/codmod',
        destination: '/games/apps/cod-mobile-mod-menu',
        permanent: true,
      },
      {
        source: '/:path((?!/).*)',
        has: [
          {
            type: 'host',
            value: '^(?!tweak\\.appsg\\.site$).*$',
          },
        ],
        destination: 'https://tweak.appsg.site/:path*',
        permanent: true,
      },
      {
        source: '/developer tools/apps',
        destination: '/developer-tools/apps',
        permanent: true,
      },
      {
        source: '/developer tools/apps/:slug',
        destination: '/developer-tools/apps/:slug',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.iconfinder.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
