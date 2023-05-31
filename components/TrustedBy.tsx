"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideIn, slideShow } from '@/utils/motion';
import { images } from './image-data';



const TrustedBy = () => {

    return (
        <section className='mt-6 md:mt-24 px-6 md:px-12 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-4xl md:text-6xl text-center'>Trusted By Our Customers</h1>

            <>
                <div className="next" onClick={() => { }}>
                    {"‣"}
                </div>
                <div className="prev" onClick={() => { }}>
                    {"‣"}
                </div>
            </>
        </section>
    )
}

export default TrustedBy
