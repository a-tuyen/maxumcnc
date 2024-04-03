/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['user-images.githubusercontent.com', 'images.pexels.com', 'private-user-images.githubusercontent.com'],
    
        
    }
}

module.exports = nextConfig;

const withVideos = require('next-videos')

module.exports = withVideos()