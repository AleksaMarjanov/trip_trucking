import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://trippintruckingandservices.com',
            lastModified: new Date(),
        },
        {
            url: 'https://trippintruckingandservices.com/about',
            lastModified: new Date(),
        },
        {
            url: 'https://trippintruckingandservices.com/services',
            lastModified: new Date(),
        },
        {
            url: 'https://trippintruckingandservices.com/careers',
            lastModified: new Date(),
        },
        {
            url: 'https://trippintruckingandservices.com/contact',
            lastModified: new Date(),
        },
    ]
}
