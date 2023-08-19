"use client"


import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { Services } from '@/typings'
import ClientSideRoute from './ClientSideRoute'
import ServiceImage from './ServiceImage'
import { usePathname } from 'next/navigation'

const ServicesList = () => {
    const [services, setServices] = useState([])
    const pathname = usePathname()

    const query = groq`
 *[_type == 'services']
    `

    const fetchServices = async () => {
        const data = await client.fetch(query)
        setServices(data);
    }

    // only run on client side and fetch services
    useEffect(() => {
        fetchServices();
    }, [])

    useEffect(() => {
        setTimeout(() => {
            document.scrollingElement?.scroll(0, 0)
        }, 0)
    }, [pathname])


    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        }
    }, [pathname])

    return (
        <motion.div
            id="services" className="dark:bg-white bg-white relative max-[475px]:mt-18 min-h-screen lg:py-12 md:px-16 z-[90] "
        >
            <motion.div
                className='mt-12 lg:mt-6 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-12 text-center '>
                {services?.map((service: Services) => (
                    <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} className=''>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden" whileInView="show"
                            viewport={{ once: true }}
                            className='flex flex-col gap-y-3 md:gap-y-6'
                        >
                            <motion.div
                                variants={textVariant(0.3)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                                className='group transiton-transform duration-200 ease-out'
                            >
                                <ServiceImage service={service} />
                            </motion.div>
                            <motion.h3
                                variants={textVariant(0.5)}
                                className='font-semibold text-3xl md:text-4xl mt-3'>
                                {service.title}
                            </motion.h3>
                            <motion.span
                                variants={textVariant(0.7)}
                                className='font-medium text-black/75 text-2xl md:text-xl line-clamp-2'>
                                {service.description}
                            </motion.span>
                        </motion.div>
                    </ClientSideRoute>
                ))}
            </motion.div>
        </motion.div >
    )
}

export default ServicesList;
