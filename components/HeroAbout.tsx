"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion'
import Link from 'next/link'
import ServiceImage from './ServiceImage'
import { usePathname } from 'next/navigation'

type HeroTypes = {
    heading: string,
    message: string,
    title: string,
    src: string,
    href: string,
    callToAction: string,
    callToActionHref: string,
}

const Hero = ({ title, heading, message, src, href, callToAction, callToActionHref }: HeroTypes) => {
    const [loading, setLoading] = useState(true)
    const pathname = usePathname()

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div
                variants={zoomIn(0.1, 0.6)}
                className="w-full relative z-[0] h-[50vh] md:h-[75vh] flex flex-col items-start justify-start object-cover object-center" >
                <Image
                    src={src}
                    alt="hero"
                    fill
                    className={`w-full fixed object-cover duration-700 ease-in-out transition-all  
                            ${loading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                        }`}
                    onLoadingComplete={() => setLoading(false)}
                    priority />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75 z-[2]" />
                <motion.div
                    className="px-6 sm:px-12 md:px-24 lg:px-32 text-white z-[2] absolute max-[375px]:top-[20%] top-[25%] lg:top-[30%] left-[3%] md:left-[10%] lg:left-[15%] flex flex-col justify-between gap-y-6"
                >
                    <div className='flex items-start justify-center flex-col gap-y-6'>
                        <motion.div
                            variants={textVariant(0.2)}
                        >
                            <h2 className="max-[375px]:text-4xl text-5xl md:text-7xl font-semibold ">{title}</h2>
                        </motion.div>
                        <motion.div
                            variants={textVariant(0.4)}
                        >
                            <h2 className="text-2xl md:text-6xl font-medium">{heading}</h2>
                        </motion.div>
                        {/* <div className='absolute z-[33] bg-white opacity-50 top-[50%]' /> */}
                        <motion.div
                            variants={textVariant(0.5)}
                            className='px-12 '
                        >
                            <p className="font-normal text-xl md:text-4xl">{message}</p>

                        </motion.div>
                    </div>

                    {(pathname === '/about') ?
                        ""
                        :
                        < a href={`${callToActionHref}`} className='max-w-[200px]'>
                            <motion.button className='bg-white text-black rounded-[5px] px-4 py-4 mt-4 xl:mt-16 hover:bg-stone-600 hover:border hover:text-white transition-colors duration-400 ease-out'>
                                {callToAction}
                            </motion.button>

                        </a>

                    }
                </motion.div>
            </motion.div >

        </motion.div >
    )
}

export default Hero
