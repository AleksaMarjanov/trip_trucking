"use client"

import { urlFor } from "@/lib/urlFor";
import { Services } from "@/typings";
import { useState } from 'react'
import Image from "next/image";

type Service = {
    fill?: boolean;
    service: Services
}

const ServiceImage = ({ service, fill }: Service) => {
    const [loading, setLoading] = useState(true)

    return <>
        {fill ? (
            <Image src={urlFor(service.heroImage).url()} fill alt={service.title} />
        ) : (
            <Image
                src={urlFor(service.heroImage).url()}
                alt={service.title}
                width={1000}
                height={1000}
                className={`object-cover rounded-[5px] duration-500 ease-in-out group-hover:opacity-75
                    ${loading
                        ? "scale-110 blur-2xl grayscale"
                        : "scale-100 blur-0 grayscale-0"
                    }`}
                onLoadingComplete={() => setLoading(false)}
                priority
            />
        )}

    </>
}

export default ServiceImage 
