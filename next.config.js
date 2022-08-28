/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    cleanDistDir: true,
    experimental: {
        forceSwcTransforms: true,
    },
};

module.exports = nextConfig;
