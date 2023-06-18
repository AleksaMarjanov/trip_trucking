"use client";


import Link from "next/link"

export default function ClientSideRoute({
    children,
    route,
    className

}: {
    children: React.ReactNode
    route: string
    className: string
}) {

    return (
        <Link href={route} passHref className={`${className}`}>
            {children}
        </Link >
    )
}
