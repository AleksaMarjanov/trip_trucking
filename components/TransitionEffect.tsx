"use client";

import React from 'react'
import { motion } from 'framer-motion'

const TransitionEffect = () => {
    return (
        <>
            <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{
                    x: ["0%", "100%"], width: ["0%", "100%"]
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className='fixed top-[10%] bottom-0 right-full w-screen h-screen z-30 bg-gray-300' />
            <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
                className='fixed top-[10%] bottom-0 right-full w-screen h-screen z-20 bg-white' />
            <motion.div
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                className='fixed top-[10%] bottom-0 right-full w-screen h-screen z-10 bg-black' />
        </>
    )
}

export default TransitionEffect

