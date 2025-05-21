/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                hostname: 'freepik.com',
            },
            {
                hostname: 'images.unsplash.com',
            },
            {
                hostname: 'images.pexels.com',
            },
            {
                hostname: 'github.com',
            },

        ],
    },
}

module.exports = nextConfig
