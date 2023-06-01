"use client";

import { useState, useEffect } from 'react'
import { groq } from 'next-sanity';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { client } from '@/lib/sanity.client';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '@/utils/motion';
import { Testimonials } from '@/typings';
import { urlFor } from '@/lib/urlFor';
import Image from 'next/image';


const TrustedBy = () => {
    const [testimonials, setTestimonials] = useState([])
    const [currentTestimonials, setCurrentTestimonials] = useState(0)

    const query = groq`
*[_type == "testimonials"]
    `
    const fetchTestimonials = async () => {
        const data = await client.fetch(query)
        setTestimonials(data)
    }

    useEffect(() => {
        fetchTestimonials()
    }, [])

    const handleClick = (index: any) => {
        setCurrentTestimonials(index)
    }

    const test = testimonials[currentTestimonials]

    console.log({ testimonials })

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <motion.div
                variants={fadeIn("up", "tween", 0.35, 0.85)}
                className="relative flex w-full flex-col items-center justify-center md:min-h-[70vh] "
            >
                <h2 className="py-6 px-12 text-2xl font-semibold md:text-4xl text-white ">
                    Trusted by our customers
                </h2>
                <div className="flex w-full flex-row items-center justify-center md:items-start md:justify-center lg:mx-12">
                    <div className="w-full object-contain sm:w-full lg:w-[540px]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1}
                            navigation={{
                                nextEl: ".image-swiper-button-next",
                                prevEl: ".image-swiper-button-prev",
                                disabledClass: "swiper-button-disabled",
                            }}
                            loop={true}
                            observer={true}
                            observeParents={true}
                            parallax={true}
                            autoplay={{ delay: 6000 }}
                        >
                            {testimonials?.map((testimonial: Testimonials, index: number) => (
                                <SwiperSlide key={testimonial._id + index}>
                                    <div className="swiper-slide" key={testimonial._id + index}>
                                        <div className="">
                                            <motion.div
                                                variants={fadeIn("left", "tween", 0.2, 1)}
                                                initial="hidden"
                                                whileInView="show" className="object-contain p-4" >
                                                <Image src={`${urlFor(testimonial?.Image).url()}`}
                                                    alt={testimonial.company}
                                                    width={50}
                                                    height={50}
                                                    priority
                                                    className="rounded-full object-contain" />

                                                <div className="top-0 items-start justify-center py-8 lg:flex lg:flex-col lg:py-4">
                                                    <div className="white-space relative overflow-hidden text-lg text-gray-800">
                                                        {/* <Image */}
                                                        {/*     src="/quotes.svg" */}
                                                        {/*     alt="quotes" */}
                                                        {/*     width={30} */}
                                                        {/*     height={30} */}
                                                        {/*     priority */}
                                                        {/* /> */}
                                                        {testimonial?.feedback}
                                                    </div>
                                                </div>
                                                <div className="relative bottom-0 flex flex-row">
                                                    <div className="flex-col flex">
                                                        <h2 className="text-extrabold mx-6 flex items-center justify-center text-xl">
                                                            {testimonial?.company}
                                                        </h2>
                                                        <p className="flex items-center justify-center px-6 text-black">{testimonial?.company}</p>
                                                    </div>
                                                    <p>{testimonial?.position}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="absolute  bottom-0 right-10 mt-32 flex select-none flex-row  items-start justify-start gap-1 text-white lg:right-0">
                                <BiLeftArrowAlt
                                    size={20}
                                    className="image-swiper-button-prev z-[2] h-[40px] w-[40px] cursor-pointer bg-black p-1 transition-all duration-500 ease-in-out hover:bg-white hover:text-[#F7AB0A]"
                                />
                                <BiRightArrowAlt
                                    size={20}
                                    className="image-swiper-button-next z-[2] h-[40px] w-[40px] cursor-pointer bg-black p-1  transition-all duration-500 ease-in-out hover:bg-white hover:text-[#F7AB0A]"
                                />
                            </div>
                        </Swiper>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default TrustedBy
