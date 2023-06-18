"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, textVariant, zoomIn } from '@/utils/motion'
import Link from 'next/link'

type HeroTypes = {
    heading: string,
    message: string,
    title: string,
    src: string,
    href: string,
    callToActionHref: string,
}

const Hero = ({ title, heading, message, src, href, callToActionHref }: HeroTypes) => {
    const [loading, setLoading] = useState(true)

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div
                variants={zoomIn(0.6, 0.8)}
                className="w-full relative h-[80vh] md:h-[85vh] flex flex-col items-start justify-start object-cover object-center" >
                <Image
                    src={src}
                    fill
                    alt="hero"
                    className={`w-full fixed object-cover object-center
                    ${loading
                            ? "scale-110 blur-2xl grayscale"
                            : "scale-100 blur-0 grayscale-0"
                        }`}
                    onLoadingComplete={() => setLoading(false)}
                    priority
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]" />
                <motion.div
                    className="text-white z-[2] absolute max-md:top-[45%] top-[30%] left-[10%] md:left-[10%] flex flex-col justify-between gap-y-6"
                >
                    <div className='flex items-start justify-center flex-col gap-y-6'>
                        <motion.div
                            variants={textVariant(0.4)}
                        >
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold">{title}</h2>
                        </motion.div>
                        <motion.div
                            variants={textVariant(0.5)}
                            className='max-[475px]:px-6'
                        >
                            <h2 className="max-[325px]:text-2xl text-4xl md:text-7xl lg:text-8xl font-semibold">{heading}</h2>
                        </motion.div>
                        <div className='absolute z-[33] bg-white opacity-50 top-[50%]' />
                        <motion.div
                            variants={textVariant(0.6)}
                        >
                            <p className="font-normal text-2xl md:text-4xl">{message}</p>

                        </motion.div>
                    </div>
                </motion.div>
            </motion.div >

        </motion.div >
    )
}

export default Hero
