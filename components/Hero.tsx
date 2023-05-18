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
                className="relative h-screen flex items-start justify-start bg-fixed bg-cover w-full object-cover object-center" >
                <Image src={src} alt="hero" fill className="w-full fixed object-cover object-center" priority />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
                <motion.div
                    className="py-5 text-white z-[2] absolute top-[50%] left-[30%] "
                >

                    <motion.div
                        variants={textVariant(0.1)}
                    >
                        <h2 className="py-5 text-3xl md:text-5xl font-semibold ">{title}</h2>
                    </motion.div>
                    <motion.div
                        variants={textVariant(0.2)}
                    >
                        <h2 className="text-2xl md:text-4xl font-semibold">{heading}</h2>
                    </motion.div>
                    <motion.div
                        variants={textVariant(0.3)}
                    >
                        <p className="py-5 mt-4 font-medium text-3xl">{message}</p>
                    </motion.div>
                    <motion.div
                        variants={textVariant(0.5)}
                        className="mt-4 flex flex-col gap-y-6 md:flex-row md:gap-x-6 items-start justify-start "
                    >
                        <Link href="/contact">
                            <motion.button
                                className="py-2 md:py-6 px-3 md:px-6 text-white 
                            bg-white/50 hover:bg-[#00626f] font-bold text-lg 
                            transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem] ">
                                Contact
                            </motion.button>

                        </Link>

                        <a href="tel:">
                            <motion.button
                                className="py-2 md:py-6 px-3 md:px-6 bg-[#00626f] text-white  hover:bg-transparent
                             font-bold text-sm sm:text-md md:text-lg hover:border-2 hover:border-white
                             transition-all duration-700 ease-in-out cursor-pointer rounded-[2rem]">
                                Call
                            </motion.button>
                        </a>

                    </motion.div>

                </motion.div>

            </motion.div>
        </motion.div >
    )
}

export default Hero
