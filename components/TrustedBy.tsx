"use client";

import { useState, useEffect } from 'react'
import { groq } from 'next-sanity';
import { client } from '@/lib/sanity.client';
import { motion } from 'framer-motion';
import { slideIn } from '@/utils/motion';
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
        <section className='mt-6 md:mt-24 px-6 md:px-12 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-4xl md:text-6xl text-center'>Trusted By Our Customers</h1>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="flex flex-col items-center justify-center m-4"
            >

                {testimonials.length && (
                    < div className="">
                        <Image src={urlFor(test.Image).url()}
                            className="rounded-full object-contain "
                            width={500}
                            height={500}
                            priority
                            alt={test.company}
                        />




                        <div className="" onClick={() => handleClick(currentTestimonials === 0
                            ? testimonials.length - 1
                            : currentTestimonials - 1
                        )}
                        >
                            {"‣"}
                        </div>
                        <div className="prev" onClick={() => handleClick(
                            currentTestimonials === testimonials.length - 1
                                ? 0
                                : currentTestimonials - 1

                        )}>
                            {"‣"}
                        </div>
                    </div>
                )}
            </motion.div>
        </section >
    )
}

export default TrustedBy
