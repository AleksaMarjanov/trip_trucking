"use client";

import { client } from "@/lib/sanity.client";
import { Services } from '@/typings';
import { groq } from 'next-sanity';
import React, { useState, useEffect } from 'react'
import ClientSideRoute from './ClientSideRoute';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const [services, setServices] = useState([])

    const query = groq`
*[_type == 'services']
    `
    const fetchServices = async () => {
        const data = await client.fetch(query)
        setServices(data);
    }

    useEffect(() => {
        fetchServices()
    }, [])



    return (
        <footer className="w-full bg-gray-100 border-t-2 border-black shadow-2xl flex flex-col items-start py-6 md:py-12 px-6 md:px-12 justify-between">
            <div className="w-full mt-16 grid grid-rows-3 gap-y-12 md:flex md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-start justify-center ">
                    <h2 className="col-span-1 md:col-span-2 font-bold text-3xl md:text-5xl text-black ">Solutions</h2>
                    {services.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} className="mt-6">
                            <ol>
                                <li className="text-2xl  font-bold text-black" >{service.title}</li>
                            </ol>
                        </ClientSideRoute >
                    ))
                    }
                </div>
                <div className="flex flex-col justify-center items-start gap-y-6">
                    <h2 className="col-span-1 md:col-span-2 font-bold text-3xl md:text-5xl text-black ">Company</h2>
                    <Link href='/about' className="text-2xl font-semibold">
                        About Us
                    </Link>
                    <Link href='/careers' className="text-2xl font-semibold">
                        Careers
                    </Link>
                    <Link href='/services' className="text-2xl font-semibold">
                        Services
                    </Link>
                    <Link href='/contact' className="text-2xl font-semibold">
                        Contact
                    </Link>
                </div>

                <div className='col-span-1  md:col-span-1 flex flex-col'>
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Socials</h2>
                    <p className="font-semibold text-xl md:text-2xl">ap@trippintrucking.com</p>
                    <div className="flex flex-row mt-6" >
                        <Image src="/phone.svg" alt="phone icon" width={50} height={50} priority />
                        <a href="tel:7016517254" className="font-semibold text-xl md:text-2xl">(701)651-7254</a>
                    </div>

                </div>
            </div >
            <div className="mt-6 font-semibold text-xl text-black">
                <p>@ Copyright {new Date().getFullYear()}</p>
                <Link href="https://marjanovdesignsolutions.com" target='_blank'>
                    <span className='hover:text-black/50  transition-colors ease-out duration-300'>
                        Developed by Marjanov Design Solutions
                    </span>
                </Link>
            </div>

        </footer >
    )
}

export default Footer

