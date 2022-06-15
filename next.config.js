
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        loader: 'default',
        domains: ["res.cloudinary.com", "images.pexels.com", "images.unsplash.com"],


    }
}

module.exports = nextConfig