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
            <div className={`${isOpen ? 'opacity-60' : 'opacity-100'}`}>
                {children}
                <Footer />
            </div>
        </>
    )
}

export default RootLayout
