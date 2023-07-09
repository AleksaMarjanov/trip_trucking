"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/utils/motion'

const IntroText = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            <motion.div
                variants={fadeIn('up', 'tween', 0.8, 0.6)}
                className='lg:absolute mt-6 md:mt-0  bg-white md:h-[250px] lg:top-[25%]  z-[20] xl:ml-[20rem] xl:mr-[20rem]  mb-[2rem]'>
                <motion.div
                    className="w-full  flex flex-col gap-6 md:gap-8 mt-6 px-12 md:px-16 flex items-center justify-center">
                    <h1 className='font-bold text-3xl md:text-5xl lg:text-6xl text-center'>Rapid 24/7 Response</h1>
                    <h2 className="font-medium text-2xl text-3xl md:text-5xl lg:text-6xl">Discover our comprehensive range of services designed to meet all your needs efficiently and effectively.</h2>
                </motion.div >
            </motion.div >
        </motion.div>
    )
}

export default IntroText 
