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
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="services" className="lg:mt-48 lg:py-12 relative z-90 md:px-16 z-[20] xl:ml-[20rem] xl:mr-[20rem]  mb-[2rem]"
        >
            <motion.section className="mr-50 bg-white text-black"
                variants={fadeIn('up', 'tween', 0.6, 1)}
            >
                {/* <motion.div className="w-full h-[300px] px-6 md:px-16 flex items-center justify-center"> */}
                {/*     <h2 className="font-medium text-4xl">Discover our comprehensive range of services designed to meet all your needs efficiently and effectively.</h2> */}
                {/* </motion.div> */}

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='mt-6 sm:mt-24 lg:mt-6 grid grid-cols-1 md:grid-cols-3 gap-12 px-12 text-center '>
                    {services?.map((service: Services) => (
                        <ClientSideRoute route={`/service/${service.slug.current}`} key={service._id}>
                            <div className='flex flex-col gap-y-3 md:gap-y-6'>
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
                                    className='font-semibold text-2xl mt-3'>
                                    {service.title}
                                </motion.h3>
                                <motion.span
                                    variants={textVariant(0.7)}
                                    className='font-normal text-black/75 text-lg line-clamp-2'>
                                    {service.description}
                                </motion.span>
                            </div>
                        </ClientSideRoute>
                    ))}
                </motion.div>
            </motion.section >
        </motion.div >
    )
}

export default Services;
