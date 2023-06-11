"use client";

import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import React, { useState } from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'


const AboutOverlay = () => {
    const [loading, setLoading] = useState(true)

    return (
        <motion.div

            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className='min-h-screen overflow-hidden' >
            <div className="absolute z-[10] top-[30%] md:top-[45%] lg:top-[50%] left-0 w-[85%] h-full bg-white rounded-tr-[152px]" >

                <motion.article
                    variants={fadeIn('up', 'tween', 0.4, 0.6)}
                    className='relative z-[20] top-[7%] md:top-[7%] max-[325px]:left-[10%] left-[7%] md:left-[10%] 
                w-full flex flex-col-reverse sm:px-6 xl:px-44 md:space-x-24 gap-y-12 md:gap-y-0  
                items-start justify-start md:flex-row '>

                    <div className='w-full flex items-start justify-center flex-col gap-y-6 lg:gap-y-12 '>
                        <motion.h2
                            variants={textVariant(0.5)}
                            className='font-semibold text-3xl md:text-4xl text-black/75'>
                            Tripp in Trucking
                        </motion.h2>
                        <motion.p
                            variants={textVariant(0.7)}
                            className='font-medium text-xl md:text-4xl'>
                            Revolutionizing Hydro Vac and Trucking Solutions from Williston, Empowering the Future of Logistics!
                        </motion.p>

                    </div>
                    <div className='relative w-full md:max-w-[740px] h-[250px] md:h-[300px] lg:h-[360px]'>
                        <Image
                            src="/hydroVacOnField.jpg"
                            alt="about"
                            fill
                            className={`object-cover object-center rounded-2xl 
                        relative inline-block 

                            ${loading
                                    ? "scale-110 blur-2xl grayscale"
                                    : "scale-100 blur-0 grayscale-0"
                                }
w-full md:translate-x-[15%] lg:translate-x-[5%] xl:translate-x-[25%] md:scale-[1.1] md:translate-y-[10%]`}

                            onLoadingComplete={() => setLoading(false)}
                            priority
                        />
                    </div>
                </motion.article >
            </div>
        </motion.div>
    )
}

export default AboutOverlay
