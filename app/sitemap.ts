import { MetadataRoute } from 'next'

export default function handler(req: any, res: any) {
    const sitemap: MetadataRoute.Sitemap = [
        {
            url: 'https://trippintruckingandservices.com',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://trippintruckingandservices.com/about',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://trippintruckingandservices.com/services',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://trippintruckingandservices.com/careers',
            lastModified: new Date().toISOString(),
        },
        {
            url: 'https://trippintruckingandservices.com/contact',
            lastModified: new Date().toISOString(),
        },
    ]

    const xml = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${sitemap
                .map(
                    ({ url, lastModified }) => `
                    <url>
                        <loc>${url}</loc>
                        <lastmod>${lastModified}</lastmod>
                    </url>
                `
                )
                .join('')}
        </urlset>
    `

    res.setHeader('Content-Type', 'application/xml')
    res.status(200).end(xml.trim())
}