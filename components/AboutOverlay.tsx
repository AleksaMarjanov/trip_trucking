"use client";

import Image from 'next/image'
import { motion, stagger, useScroll, useSpring, useTransform, motionValue, MotionValue } from 'framer-motion'
import React, { useState, useRef } from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'
import Link from 'next/link';


const AboutOverlay = () => {
    const [loading, setLoading] = useState(true)

    const useParallax = (value: MotionValue<number>, distance: number) => {
        return useTransform(value, [0, 1], [-distance, distance]);
    }

    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({ target: ref });
    // const y = useParallax(scrollYProgress, 300);

    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className='flex flex-col items-center gap-y-12'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className='h-[38vh] md:h-[35vh] overflow-hidden' >
                <motion.div

                    variants={fadeIn('up', 'tween', 0.6, 0.85)}
                    className="absolute z-[10] top-[30%] md:top-[45%] lg:top-[40%] left-0 w-[85%] h-[50vh] bg-white rounded-tr-[152px]" >

                    <motion.article
                        variants={fadeIn('up', 'tween', 0.7, 0.8)}
                        className='relative z-[20] top-[7%] md:top-[12%] max-[325px]:left-[10%] left-[7%] md:left-[10%] 
                w-full flex flex-col-reverse sm:px-6 xl:px-44 md:space-x-24 gap-y-12 md:gap-y-0  
                items-start justify-start md:flex-row '>

                        <div className='w-full flex items-start justify-center flex-col gap-y-6 lg:gap-y-12 '>
                            <motion.h3 className='w-full text-3xl text-bold  text-black/75'
                                variants={textVariant(0.7)}
                            >
                                Tripp in Trucking
                            </motion.h3>
                            <motion.p
                                variants={textVariant(0.9)}
                                className='md:leading-[55px] font-medium text-2xl lg:text-[38px]'>
                                Revolutionizing Hydro Vac and Trucking Solutions from Williston, Empowering the Future of Logistics!
                            </motion.p>

                            <motion.button
                                variants={textVariant(1)}
                                className='px-4 py-4 bg-black hover:bg-white hover:border-black hover:text-black border-2 transition-colors duration-300 ease-out text-white rounded-2xl'
                            >
                                <Link href="/contact">
                                    Free Quote
                                </Link>
                            </motion.button>
                        </div>
                        <div className='relative w-full  md:max-w-[740px] h-[250px] md:h-[300px] lg:h-[360px]'>
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
                </motion.div>


            </motion.div>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                // className='mt-12 md:mt-0 mb-32 px-6 w-full relative z-[30] top-5 md:-top-32 flex flex-col md:flex-row gap-y-12 md:space-x-24 items-center justify-center'>
                className='grid mt-12 max-[475px]:mt-36 md:mt-24 gap-6  md:gap-24 md:grid-cols-2 items-center justify-center px-6 relative z-[30] top-5 md:-top-32  lg:px-16 xl:px-40  mb-32 '
            >

                <motion.div
                    variants={fadeIn('up', 'tween', 0.9, 0.85)}
                    className='relative w-full lg:w-[580px] sm:h-[400px] h-[500px] md:h-[700px]'>
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
                </motion.div>
                <motion.div
                    variants={fadeIn('up', 'tween', 0.55, 0.9)}
                    className='w-full gap-y-6 flex flex-col items-start justify-center' >
                    <motion.h3
                        variants={textVariant(0.8)}
                        className='w-full text-3xl text-bold  text-black/75'>
                        Our Story
                    </motion.h3>
                    <motion.p
                        variants={textVariant(1)}
                        className='md:leading-[55px] font-medium text-2xl lg:text-[38px]'>
                        With a strong presence in the industry, we have built a solid reputation for delivering exceptional logistics solutions to our clients. Our company operates a large fleet of well-maintained trucks and employs a team of dedicated professionals who are committed to excellence in service.
                    </motion.p>
                </motion.div>
            </motion.div >
            <motion.div className='absolute z-[1] w-full h-[200px] -bottom-[90%] -translate-x-[-85%]  bg-slate-200 -skew-x-12' style={{ scaleY }} />


            <motion.div
                variants={fadeIn('up', 'tween', 0.5, 0.85)}
                className='px-6 lg:px-40 mt-16 mb-16 md:mt-24 md:px-16 gap-y-12 md:gap-y-0 md:gap-x-24 p-12 rounded-tr-[240px] rounded-bl-[240px] bg-slate-200 w-full relative grid md:grid-cols-2'
            >

                <div className='w-full lg:flex-[0.75] flex items-start justify-center flex-col gap-y-6 lg:gap-y-12 '>
                    <motion.h3 className='w-full text-3xl text-bold  text-black/75'
                        variants={textVariant(0.7)}
                    >
                        Careers
                    </motion.h3>
                    <motion.p
                        variants={textVariant(0.9)}
                        className='md:leading-[55px] font-medium text-2xl lg:text-[38px]'>
                        At Tripp in Trucking, diversity and equal opportunities are our foundation. We embrace diversity to foster innovation and growth across our organization, from recruitment to career development.
                    </motion.p>

                    <motion.button
                        variants={textVariant(1)}
                        className='px-4 py-4 bg-black hover:bg-white hover:border-black hover:text-black border-2 transition-colors duration-300 ease-out text-white rounded-2xl'
                    >
                        <Link href="/careers">
                            Join Our Team
                        </Link>
                    </motion.button>
                </div>

                <div className='relative w-full lg:w-[580px] sm:h-[400px] h-[500px] md:h-[700px]'>
                    <Image
                        src="/truck3.jpg"
                        alt="Careers"
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
            </motion.div>
        </div >
    )


}
export default AboutOverlay
