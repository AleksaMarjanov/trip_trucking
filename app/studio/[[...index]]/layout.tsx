'use client';

import { useState, useEffect } from "react";

export default function RootLayout({ children,
}: {
    children: React.ReactNode
}) {

    const [isSSR, setIsSSR] = useState(true)

    useEffect(() => {
        setIsSSR(false);
    }, [])

    if (isSSR) return null;

    return (
        <html lang="en">
            <body className={` bg-white  `}>
                {children}
            </body>
        </html>
    )
}


