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
                variants={fadeIn('up', 'tween', 0.6, 1)}
                className='lg:absolute mt-6 md:mt-0 lg:min-h-[50vh] bg-white md:h-[200px] lg:top-[30%]  z-[20] xl:ml-[20rem] xl:mr-[20rem]  mb-[2rem]'>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.6, 1)}
                    className="w-full  mt-6 px-12 md:px-16 flex items-center justify-center">
                    <h2 className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl">Discover our comprehensive range of services designed to meet all your needs efficiently and effectively.</h2>
                </motion.div>
            </motion.div >
        </motion.div>
    )
}

export default IntroText 
