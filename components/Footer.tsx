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
        <footer className="w-full bg-gray-100 border-t-2 border-[#00626f] shadow-2xl flex flex-col items-start px-6 md:px-12 justify-between">
            <div className="w-full mt-16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 16 grid gap-24 grid-cols-4 md:flex-row items-start justify-center">
                <div>
                    <h2 className="col-span-4 md:col-span-1 text-2xl md:text-4xl text-[#00626f] mb-2">Services</h2>
                    {services.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} >
                            <ol>
                                <li className="text-lg text-[#00626f]" >{service.title}</li>
                            </ol>
                        </ClientSideRoute >
                    ))
                    }
                </div>


                {/* <div className="col-span-4 md:col-span-1 gap-y-3 md:gap-y-4 flex flex-col text-[#00626f] items-start justify-start"> */}
                {/*     <h2 className="text-2xl text-[#00626f] mb-2 md:text-4xl ">Office</h2> */}
                {/*     <div className="flex items-start justify-start relative flex-row w-full h-full"> */}
                {/*         <a href="tel:701.577.1000"> */}
                {/*             <Image */}
                {/*                 src="/phone.svg" */}
                {/*                 alt="phone icon" */}
                {/*                 width={30} */}
                {/*                 height={30} */}
                {/*                 priority */}
                {/*             /> */}
                {/*         </a> */}
                {/*         <a href="tel:701.577.1000">Call or Text (701)-577-1000</a> */}
                {/*     </div> */}
                {/*     <div className='py-2'> */}
                {/*         501 Main Street */}
                {/*         Williston ND 58801 */}
                {/*         <div className='flex mt-4 flex-row items-start'> */}
                {/*             <Image */}
                {/*                 src="/mapIcon.svg" */}
                {/*                 alt="map icon" */}
                {/*                 width={30} */}
                {/*                 height={30} */}
                {/*                 priority */}
                {/*             /> */}
                {/*             <Link className="" href="https://www.google.com/maps/place/Williston+Family+Dentistry/@48.1488416,-103.6250724,17z/data=!3m1!4b1!4m6!3m5!1s0x53215b7154289103:0x8a0ba01f800015e!8m2!3d48.148838!4d-103.6224975!16s%2Fg%2F11fhs3d38v" > */}
                {/*                 Get Directions */}
                {/*             </Link> */}
                {/*         </div> */}
                {/*     </div> */}
                {/**/}
                {/*     <span>M–TH, 7:30AM–4:00PM<br /> */}
                {/*         F-SU Closed</span> */}
                {/* </div> */}

                <div className='col-span-4 md:col-span-1'>
                    <h2 className=" text-2xl md:text-4xl text-[#00626f] mb-2">Socials</h2>
                </div>
            </div >

            <div className="mt-6 font-semibold text-[#00626f]">
                <p>@ Copyright {new Date().getFullYear()}</p>
                <Link href="https://marjanovdesignsolutions.com" target='_blank'>
                    <span className='hover:text-opacity-50'>Developed by Marjanov Design Solutions</span>
                </Link>
            </div>
        </footer >
    )
}

export default Footer

