"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import React from 'react'
import { fadeIn, staggerContainer, textVariant } from '@/utils/motion'

const BulletSection = () => {
    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="bulletSection" className="xl:relative z-[20] xl:ml-[10rem] mb-[2rem] top-[95%]"
        >
            <motion.section className="mr-50 bg-white text-black"
                variants={fadeIn('up', 'tween', 0.6, 1)}
            >
                <motion.div
                    className="py-12 gap-y-12 lg:gap-x-12 lg:gap-y-6 flex flex-col md:flex-row px-3 md:px-6 lg:px-12 ">
                    <motion.div className="flex gap-y-2 justify-start flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2 mb-6">
                            <h2 className="font-medium text-xl">Advanced Technology and Expertise</h2>
                            <Image src="/rocket.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <motion.ol
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="leading-[35px] font-semibold text-lg">
                            <motion.li variants={textVariant(0.2)}>&#x2022; State-of-the-art hydrovac trucks and cutting-edge equipment</motion.li>
                            <motion.li variants={textVariant(0.3)}>&#x2022; Experienced team members with in-depth knowledge of winching, hydrovac operations, and equipment recovery techniques. </motion.li>
                            <motion.li variants={textVariant(0.4)}>&#x2022; Ability to tackle complex projects with precision and efficiency</motion.li>
                        </motion.ol>
                    </motion.div>
                    <motion.div className="flex justify-start flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2 mb-6">
                            <h2 className="font-medium text-xl ">Safety and Environmental Focus</h2>
                            <Image src="/environment.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <motion.ol
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="leading-[35px] font-semibold text-lg">
                            <motion.li variants={textVariant(0.2)}>&#x2022; Strict adherence to safety protocols and industry regulations.</motion.li>
                            <motion.li variants={textVariant(0.3)}>&#x2022; Certification and commitment to maintaining a safe working environment.</motion.li>
                            <motion.li variants={textVariant(0.4)}>&#x2022; Environmental responsibility through sustainable practices and minimizing impact.</motion.li>
                        </motion.ol>
                    </motion.div>

                    <motion.div className="flex justify-start flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2 mb-6">
                            <h2 className="font-medium text-xl">Customized Solutions and Superior Service</h2>
                            <Image src="/solutions.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <motion.ol
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="leading-[35px] font-semibold text-lg">
                            <motion.li variants={textVariant(0.2)}>&#x2022; Tailored solutions based on unique project requirements.</motion.li>
                            <motion.li variants={textVariant(0.3)} >&#x2022; Flexibility to adapt to specific needs and challenges.</motion.li>
                            <motion.li variants={textVariant(0.4)}>&#x2022; Dedication to providing exceptional service and exceeding customer expectations.</motion.li>
                        </motion.ol>
                    </motion.div>
                </motion.div>

            </motion.section >
        </motion.div >
    )
}

export default BulletSection
