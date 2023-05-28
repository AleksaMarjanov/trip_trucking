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
        <footer className="w-full bg-gray-100 border-t-2 border-[#434f7e] shadow-2xl flex flex-col items-start px-6 md:px-12 justify-between">
            <div className="w-full mt-16 flex flex-row items-start justify-between">
                <div>
                    <h2 className="col-span-4 md:col-span-1 text-2xl md:text-4xl text-[#434f7e] mb-2">Services</h2>
                    {services.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} >
                            <ol>
                                <li className="text-lg text-[#434f7e]" >{service.title}</li>
                            </ol>
                        </ClientSideRoute >
                    ))
                    }
                </div>

                <div className='col-span-4 md:col-span-1'>
                    <h2 className=" text-2xl md:text-4xl text-[#00626f] mb-2">Socials</h2>
                </div>
                <div className="mt-6 font-semibold text-[#00626f]">
                    <p>@ Copyright {new Date().getFullYear()}</p>
                    <Link href="https://marjanovdesignsolutions.com" target='_blank'>
                        <span className='hover:text-opacity-50'>Developed by Marjanov Design Solutions</span>
                    </Link>
                </div>
            </div >

        </footer >
    )
}

export default Footer

