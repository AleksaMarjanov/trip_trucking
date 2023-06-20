
import './globals.css'
import { Inter } from 'next/font/google'
import { RootLayout } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Tripp in Trucking - Hydro-Vac Services in Williston',
    description: 'Your best Hydro-vac services',
}

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <html lang="en">
            <body className={`${inter.className} bg-white dark:text-black`}>
                <RootLayout>
                    {children}
                </RootLayout>
            </body>
        </html >
    )
}
