/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    // Only use basePath if deploying to username.github.io/repository-name
    // Remove these lines if deploying to a custom domain or username.github.io
    // basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    // assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
