/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental: {
    //     scrollRestoration: true
    // },
    images: {
        // disable so nextjs wouldn't add its own types for SVG
        disableStaticImages: true,
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
        emailJs_careers: process.env.REACT_APP_EMAILJS_CAREERS,
        emailJs_contact: process.env.REACT_APP_EMAILJS_CONTACT,
        emailJs_API: process.env.REACT_APP_EMAILJS_API_KEY,
        apiKey: process.env.REACT_APP_LEAFLET_API_KEY,
    },
    async rewrites() {
        return [
            {
                source: '/sitemap.xml',
                destination: '/api/sitemap',
            },
        ]
    },
}

module.exports = nextConfig
