"use client"

import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import TransitionEffect from './TransitionEffect';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <TransitionEffect />
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* When navigation bar is open, dim the background */}
            <div className={`${isOpen ? 'opacity-60 drop-shadow-2xl' : 'opacity-100'}`}>
                {children}
                <Footer />
            </div>
        </>
    )
}

export default RootLayout
