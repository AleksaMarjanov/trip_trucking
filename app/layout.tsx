"use client"

import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import TransitionEffect from '@/components/TransitionEffect'

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

    // useEffect(() => {
    //     setTimeout(() => {
    //         document.scrollingElement?.scroll(0, 0)
    //     }, 0)
    // }, [pathname])


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
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
