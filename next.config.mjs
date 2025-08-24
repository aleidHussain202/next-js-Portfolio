/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export',
    distDir: 'out',
    basePath: process.env.NODE_ENV === 'production' ? '/next-js-Portfolio' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/next-js-Portfolio' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
