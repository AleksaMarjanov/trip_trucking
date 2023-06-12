"use client";

import Image from 'next/image'
import { motion, stagger } from 'framer-motion'
import React, { useState } from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'


const AboutOverlay = () => {
    const [loading, setLoading] = useState(true)

    return (
        <div className='min-h-screen flex flex-col items-center'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='h-[35vh] overflow-hidden' >
                <div className="absolute z-[10] top-[30%] md:top-[45%] lg:top-[40%] left-0 w-[85%] h-full bg-white rounded-tr-[152px]" >

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
            <div className='mt-12 md:mt-0 md:mb-32 px-6 lg:px-40 w-full relative z-[30] top-[100%] flex flex-col md:flex-row gap-y-12 md:space-x-24 items-center justify-center '>

                <div className='relative w-full md:w-1/2 md:max-w-[580px] h-[600px] '>
                    <Image
                        src="/simonson.jpg"
                        alt="hydro vac"
                        fill
                        className={`object-cover w-full object-center rounded-2xl
                            ${loading
                                ? 'blur-2xl scale-110 greyscale'
                                : 'blur-0 scale-100 grayscale-0'
                            }    relative inline-block
                                `}
                        onLoadingComplete={() => setLoading(false)}
                        priority
                    />
                </div>
                <div className='w-full lg:px-6 gap-y-6 md:gap-y-12  flex md:flex-[0.5] flex-col items-start justify-center' >
                    <h3 className='w-full text-3xl text-bold  text-black/75'>
                        Our Story
                    </h3>
                    <p className='text-xl md:text-4xl font-semibold'>
                        With a strong presence in the industry, we have built a solid reputation for delivering exceptional logistics solutions to our clients. Our company operates a large fleet of well-maintained trucks and employs a team of dedicated professionals who are committed to excellence in service.
                    </p>
                </div>
            </div>
        </div>
    )

}

export default AboutOverlay
