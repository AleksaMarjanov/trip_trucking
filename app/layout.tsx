
import './globals.css'
import { Inter } from 'next/font/google'
import { RootLayout } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Tripp in Trucking",
    description: "Tripp in Trucking is a reputable trucking company specializing in hydrovac services.With their headquarters located in Williston , Tripp in Trucking has been providing exceptional trucking solutions since 2021.They offer a wide range of services including hydrovac trucking, excavation, side dumping, winching, equipment hauling.Equipped with a diverse fleet of hydrovac trucks and advanced equipment, Tripp in Trucking ensures efficient material transport and excavation operations.They prioritize safety in all aspects of their work.Committed to meeting customer needs and environmental sustainability, Tripp in Trucking implements responsible practices.For reliable and professional hydrovac and trucking services, contact Tripp in Trucking at mainoffice@trippintrucking.com.",
    keywords: [
        "Tripp in Trucking",
        "Hydrovac services",
        "Trucking company",
        "Excavation",
        "Vacuum truck services",
        "Material transport",
        "Reliable",
        "Professional",
        "Safety standards",
        "Customer-focused",
        "Environmental sustainability",
        "Responsible practices",
        "Contact information"
    ]
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={`${inter.className} bg-white dark:bg-white dark:text-black`}>
                <RootLayout>
                    {children}
                </RootLayout>
            </body>
        </html >
    )
}
