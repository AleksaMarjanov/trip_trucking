import { AboutOverlay, HeroAbout, TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

export const metadata = {

}

const About = () => {

    return (

        <section className='dark:bg-white'>
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
        </section>
    )
}

export default About
