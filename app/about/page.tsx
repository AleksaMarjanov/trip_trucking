import { AboutOverlay, HeroAbout, TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import React from 'react'


const About = () => {

    return (

        <div>
            <TransitionEffect />
            <div className=''>
                <HeroAbout
                    title=""
                    src="/hydroVacOnField.jpg"
                    heading="Ignite Your Journey to Success!"
                    message=""
                    href="about"
                    callToAction=""
                    callToActionHref="/contact"
                />
            </div>

            <AboutOverlay />


        </div >
    )
}

export default About
