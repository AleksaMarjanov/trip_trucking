"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//     title: 'Tripp in Trucking - Hydro-Vac Services in Williston',
//     description: 'Your best Hydro-vac services',
// }

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    useEffect(() => {
        setTimeout(() => {
            document.scrollingElement?.scroll(0, 0)
        }, 0)
    }, [pathname])



    return (
        <html lang="en">
            <body className={`${inter.className} bg-white`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
