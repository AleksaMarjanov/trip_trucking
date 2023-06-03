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
import { Testimonials, TrustedBy } from '@/typings';
import { urlFor } from '@/lib/urlFor';
import Image from 'next/image';

export const revalidate = 60;


const TrustedBy = () => {
    const [testimonials, setTestimonials] = useState([])
    const [trusted, setTrusted] = useState([])
    const [currentTestimonials, setCurrentTestimonials] = useState(0)

    const query = groq`
*[_type == "testimonials"]
    `
    const trustedQuery = groq`
*[_type == "trustedBy"]
    `
    // fetch client testimonials from sanity
    const fetchTestimonials = async () => {
        const data = await client.fetch(query)
        setTestimonials(data)
    }

    // fetch logos from sanityh 
    const fetchTrusted = async () => {
        const data = await client.fetch(trustedQuery)
        setTrusted(data)
    }

    useEffect(() => {
        fetchTestimonials()
        fetchTrusted()
    }, [])


    console.log({ trusted })

    return (
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className='w-full bg-gray-100 md:h-[60vh] mb-32'
        >
            <motion.div
                variants={fadeIn("up", "tween", 0.35, 0.85)}
                className="flex items-center flex-col justify-center"
            >
                <h2 className="py-6 md:py-12 px-12 text-4xl text-center font-semibold md:text-5xl text-black">
                    Trusted By Our Customers
                </h2>
                <div className="flex w-full flex-row items-center justify-center lg:mx-12">
                    <div className="w-full sm:w-full lg:w-[540px]">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            slidesPerView={1.}
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
                            {testimonials.map((testimonial: Testimonials) => (
                                <SwiperSlide key={testimonial._id} >
                                    <div className='swiper-slide' key={testimonial._id}>
                                        <motion.div
                                            variants={fadeIn("left", "tween", 0.2, 1)}
                                            initial="hidden"
                                            whileInView="show" className="object-contain p-4 flex flex-col gap-y-6" >
                                            <div className='relative w-full h-[80px]'>
                                                <Image src={urlFor(testimonial.Image).url()}
                                                    alt={testimonial.company}
                                                    fill
                                                    priority
                                                    className="object-contain object-center" />
                                            </div>

                                            <div className="white-space flex items-center font-bold justify-center text-2xl md:text-3xl ">
                                                &quot;{testimonial?.feedback}&quot;
                                            </div>
                                            <div className="">
                                                <div className="flex-col flex items-center justify-center">
                                                    <p className="font-semibold text-2xl items-center justify-center md:px-6 text-black">{testimonial?.company}</p>
                                                    <p className='text-black/75 text-xl'>{testimonial?.position}</p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <div className="bottom-0 flex select-none flex-row  items-center justify-between gap-1 text-white mx-6 my-6">
                                <BiLeftArrowAlt
                                    size={20}
                                    className="image-swiper-button-prev z-[2] h-[40px] w-[40px] cursor-pointer rounded-full bg-black p-1 transition-all duration-500 ease-in-out hover:bg-white hover:text-black"
                                />
                                <BiRightArrowAlt
                                    size={20}
                                    className="image-swiper-button-next z-[2] h-[40px] w-[40px] cursor-pointer bg-black p-1 rounded-full  transition-all duration-500 ease-in-out hover:bg-white hover:text-black"
                                />
                            </div>
                        </Swiper>
                    </div>

                </div >
                <div className='relative items-center justify-center flex w-full h-[250px] max-[425px]:h-[100px] bg-black'>
                    <Swiper
                        className="swiper-wrapper flex items-center justify-center"
                        observer={true}
                        slidesPerView={2}
                        modules={[Navigation, Pagination, Autoplay]}
                        onSwiper={swiper => {
                            setTimeout(() => {
                                swiper.update(); // ------> this solution
                            }, 3000);
                        }}
                        breakpoints={{
                            299: {
                                slidesPerView: 3,
                                spaceBetween: 5,
                            },
                            499: {
                                slidesPerView: 4,
                                spaceBetween: 10
                            },
                            999: {
                                slidesPerView: 5,
                                spaceBetween: 10
                            },
                            1440: {
                                slidesPerView: 8,
                                spaceBetween: 10
                            }
                        }}
                        loop={true}
                        speed={2500}
                        pagination={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                    >
                        {trusted.map((slide: TrustedBy, index: number) => (
                            <div className="swiper-slide m-0 flex items-center justify-center" key={slide._id} >
                                <SwiperSlide key={slide._id + index} >
                                    <div className="relative flex items-center justify-center px-6  w-[130px] h-[130px] md:w-[250px] md:h-[250px] ">
                                        <Image
                                            className="object-contain "
                                            src={urlFor(slide.mainImage).url()}
                                            alt={slide.name}
                                            width={1000}
                                            height={1000}
                                            //     sizes="(max-width: 768px) 100vw,
                                            // (max-width: 1200px) 50vw,
                                            // 33vw"
                                            priority
                                        />
                                    </div>
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>
            </motion.div >
        </motion.div >
    )
}

export default TrustedBy
