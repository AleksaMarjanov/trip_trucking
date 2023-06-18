"use client";


import Link from "next/link"
import { usePathname } from "next/navigation";
import { useEffect } from 'react'

export default function ClientSideRoute({
    children,
    route,
    className

}: {
    children: React.ReactNode
    route: string
    className: string
}) {

    // Workaround in next, that solves issue with not scrolling to the top of the page if using Link component
    // instead of <a> HTML element 
    //
    // const pathname = usePathname()
    //
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         window.scrollTo({
    //             top: 0,
    //             left: 0,
    //             behavior: "smooth"
    //         })
    //     }
    // }, [pathname])

    return (
        <a href={route} className={`${className}`}>
            {children}
        </a>
    )
}
