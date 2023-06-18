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
            <div className="w-full mt-16 grid grid-flow-row gap-y-12 md:flex md:flex-row md:items-start md:justify-between">
                <div className="flex flex-col items-start justify-center ">
                    <h2 className="col-span-4 md:col-span-2 text-2xl md:text-4xl text-black ">Solutions</h2>
                    {services.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} className="mt-6">
                            <ol>
                                <li className="text-lg font-bold text-black" >{service.title}</li>
                            </ol>
                        </ClientSideRoute >
                    ))
                    }
                </div>
                <div className="flex flex-col justify-center items-center gap-y-6">
                    <h2 className="col-span-4 md:col-span-2 text-2xl md:text-4xl text-black ">Company</h2>
                    <Link href='/about' className="text-xl font-semibold">
                        About Us
                    </Link>
                </div>

                <div className='col-span-4 md:col-span-1'>
                    <h2 className=" text-2xl md:text-4xl text-black mb-2">Socials</h2>

                </div>
            </div >
            <div className="mt-6 font-semibold text-black">
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

