"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion'
import Link from 'next/link'

type HeroTypes = {
    heading: string,
    message: string,
    title: string,
    src: string,
}

const Hero = ({ title, heading, message, src }: HeroTypes) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div
                variants={zoomIn(0.05, 0.4)}
                className="relative h-screen flex flex-col items-start justify-start bg-fixed bg-cover w-full object-cover object-center" >
                <Image src={src} alt="hero" fill className="w-full fixed object-cover object-center" priority />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
                <motion.div
                    className="py-5 text-white z-[2] absolute top-[30%] left-[10%] md:left-[30%] "
                >

                    <motion.div
                        variants={textVariant(0.1)}
                    >
                        <h2 className="text-3xl md:text-5xl font-semibold ">{title}</h2>
                    </motion.div>
                    <motion.div
                        variants={textVariant(0.2)}
                    >
                        <h2 className="py-5 text-2xl md:text-4xl font-semibold">{heading}</h2>
                    </motion.div>
                    <motion.div
                        variants={textVariant(0.3)}
                    >
                        <p className="py-5 font-medium text-3xl">{message}</p>

                    </motion.div>

                </motion.div>
                <motion.div
                    variants={textVariant(0.5)}
                    className="absolute bottom-[10%] left-[40%] md:left-[50%] z-[30] mt-64 md:mt-[3rem] flex items-center justify-center"

                >
                    <a href="#">
                        <motion.button
                            className="text-white  
                            font-bold uppercase text-sm sm:text-md md:text-lg 
                            cursor-pointer ">
                            Scroll Down
                        </motion.button>
                    </a>

                </motion.div>
            </motion.div>

        </motion.div >
    )
}

export default Hero
