import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tripp in Trucking - Hydro-Vac Services in Williston',
    description: 'Your best Hydro-vac services',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} relative min-h-screen bg-white`}>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    )
}
