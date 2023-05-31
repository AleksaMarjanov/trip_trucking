"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { slideIn, slideShow } from '@/utils/motion';
import { wrap } from 'popmotion'
import { images } from './image-data';

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};


const TrustedBy = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <section className='mt-6 md:mt-24 px-6 md:px-12 flex flex-col items-center justify-center'>
            <h1 className='font-semibold text-4xl md:text-6xl text-center'>Trusted By Our Customers</h1>

            <>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={images[imageIndex]}
                        custom={direction}
                        variants={slideIn('left', 'tween', 1, 1.2)}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>
                <div className="next" onClick={() => paginate(1)}>
                    {"‣"}
                </div>
                <div className="prev" onClick={() => paginate(-1)}>
                    {"‣"}
                </div>
            </>
        </section>
    )
}

export default TrustedBy
