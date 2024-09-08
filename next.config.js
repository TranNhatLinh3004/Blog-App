/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: "https",
            hostname: "images.pexels.com",
            pathname: "/photos/**",
        }, ],
    },
    env: {
        GOOGLE_ID: process.env.GOOGLE_ID,
        GOOGLE_SECRET: process.env.GOOGLE_SECRET,

        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    },
    api: {
        external: ["http://localhost:3000/api"],
    },
};

module.exports = nextConfig;