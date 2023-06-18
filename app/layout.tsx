
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import TransitionEffect from '@/components/TransitionEffect'

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
            <body className={`${inter.className} bg-white`}>
                <TransitionEffect />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
