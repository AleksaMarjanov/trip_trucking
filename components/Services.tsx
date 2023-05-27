"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const Services = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="services" className="xl:absolute z-[20] xl:ml-[20rem] xl:mr-[20rem]  mb-[2rem] top-[75%]"
        >
            <motion.section className="mr-50 bg-white text-black"
                variants={fadeIn('up', 'tween', 0.6, 1)}
            >
                <motion.div
                    className="w-full h-[300px] px-6 md:px-16 flex items-center justify-center">
                    <h2 className="font-medium text-4xl">Discover our comprehensive range of services designed to meet all your needs efficiently and effectively.</h2>
                </motion.div>

            </motion.section >
        </motion.div >
    )
}

export default Services;
