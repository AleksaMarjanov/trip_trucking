"use client"


import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useState, useEffect } from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import { urlFor } from '@/lib/urlFor'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity.client'
import { Services } from '@/typings'
import ClientSideRoute from './ClientSideRoute'
import ServiceImage from './ServiceImage'

const Services = () => {
    const [services, setServices] = useState([])

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

    return (
        <motion.div
            // variants={staggerContainer}
            // initial="hidden"
            // whileInView="show"
            // viewport={{ once: true }}
            id="services" className="max-[475px]:mt-24 lg:mt-48 lg:py-12 md:px-16 z-[90] mb-6"
        >
            <motion.div
                className='mt-6 sm:mt-24 lg:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-12 space-y-6 lg:space-y-0 lg:gap-18 px-12 text-center '>
                {services?.map((service: Services) => (
                    <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id} className='space-y-12'>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className='flex flex-col gap-y-6 md:gap-y-6'
                        >
                            <motion.div
                                variants={textVariant(0.3)}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className='group transiton-transform duration-200 ease-out'
                            >
                                <ServiceImage service={service} />
                            </motion.div>
                            <motion.h3
                                variants={textVariant(0.5)}
                                className='font-semibold max-[375px]:text-2xl text-3xl md:text-4xl mt-3'>
                                {service.title}
                            </motion.h3>
                            <motion.span
                                variants={textVariant(0.7)}
                                className='font-medium max-[375px]:text-lg text-black/75 text-2xl md:text-xl line-clamp-2'>
                                {service.description}
                            </motion.span>
                        </motion.div>
                    </ClientSideRoute>
                )).slice(0, 3)}
            </motion.div>
        </motion.div >
    )
}

export default Services;
