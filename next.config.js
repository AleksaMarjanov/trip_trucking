/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     appDir: true,
    // },
    images: {
        domains: [
            'www.instagram.com',
            'www.facebook.com',
            'cdn.sanity.io',
            'azdot.gov',
            'www.energyjobshop.com'
        ]
    }, env: {
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        sanity_token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
        dataset: process.env.NEXT_APP_PUBLIC_DATASET,
        emailJs_service: process.env.REACT_APP_EMAILJS_SERVICE,
        emailJs_template: process.env.REACT_APP_EMAILJS_TEMPLATE,
        emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY,
        apiKey: process.env.REACT_APP_LEAFLET_API_KEY,
        emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY
    },
}

module.exports = nextConfig