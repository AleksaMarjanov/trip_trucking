
import './globals.css'
import { Inter } from 'next/font/google'
import { RootLayout } from '@/components'

const inter = Inter({ subsets: ['latin'] })
export const metadata = {
    title: "Hydro Vac, Excavation, Daylighting, and Equipment Hauling Near Williston - Tripp in Trucking",
    description: "Tripp in Trucking specializes in hydro vac, excavation, daylighting, equipment hauling, winching, emergency spill response, and side dumping services near Williston, ND. Since 2021, we have been committed to providing exceptional, eco-friendly solutions with a focus on safety and efficiency. Our modern fleet ensures reliable hydrovac services, material transport, and emergency response tailored to your needs. Contact Tripp in Trucking at mainoffice@trippintrucking.com for professional trucking and hydrovac solutions you can trust.",
    keywords: [
        "Hydro vac services near Williston",
        "Excavation services Williston",
        "Daylighting services Williston",
        "Winching services Williston",
        "Equipment hauling North Dakota",
        "Emergency spill response Williston",
        "Side dumping services Williston",
        "Hydrovac trucking North Dakota",
        "Vacuum truck services Williston",
        "Reliable hydrovac services",
        "Safety-focused trucking solutions",
        "Eco-friendly excavation Williston ND",
        "Professional material transport Williston",
    ],
    alternates: {
        canonical: "https://trippintruckingandservices.com",
    },
};



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
