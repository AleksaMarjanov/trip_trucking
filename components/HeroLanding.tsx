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
    href: string,
    callToAction: string,
    callToActionHref: string,
}

const HeroLanding = ({ title, heading, message, src, href, callToAction, callToActionHref }: HeroTypes) => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div
                variants={zoomIn(0.05, 0.8)}
                className="w-full relative h-screen flex flex-col items-start justify-start object-cover object-center" >
                <Image src={src} alt="hero" fill className="w-full fixed object-cover object-center" priority />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]" />
                <motion.div
                    className="text-white z-[2] absolute top-[35%] left-[3%] flex flex-col justify-between gap-y-6"
                >
                    <div className='flex items-start justify-center flex-col gap-y-6'>
                        <motion.div
                            variants={textVariant(0.2)}
                        >
                            <h2 className="text-5xl md:text-7xl font-semibold ">{title}</h2>
                        </motion.div>
                        <motion.div
                            variants={textVariant(0.4)}
                        >
                            <h2 className="text-2xl md:text-6xl font-medium">{heading}</h2>
                        </motion.div>
                        <div className='absolute z-[33] bg-white opacity-50 top-[50%]' />
                        <motion.div
                            variants={textVariant(0.5)}
                        >
                            <p className="font-normal text-2xl md:text-4xl">{message}</p>

                        </motion.div>
                    </div>

                    <a href={`${callToActionHref}`} className='max-w-[200px]'>
                        <motion.button className=' bg-white text-black rounded-[5px] px-4 py-4 mt-4 xl:mt-16 hover:bg-stone-600 hover:border hover:text-white transition-colors duration-400 ease-out'>
                            {callToAction}
                        </motion.button>
                    </a>
                </motion.div>
                <motion.div
                    variants={textVariant(0.5)}
                    className="absolute bottom-[10%] left-[40%] sm:left-[45%] md:left-[45%] z-[30] mt-64 md:mt-[3rem] flex items-center justify-center"

                >
                    <a href={`#${href}`}>
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

export default HeroLanding

