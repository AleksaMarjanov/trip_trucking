import { AboutOverlay, HeroAbout, TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import TransitionEffect from '@/components/TransitionEffect'
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: 'Tripp in Trucking - About',
    keywords: [
        "Tripp in Trucking",
        "Hydrovac services",
        "Trucking company",
        "Excavation",
        "Vacuum truck services",
        "Material transport",
        "Reliable",
        "Professional",
        "Safety standards",
        "Customer-focused",
        "Environmental sustainability",
        "Responsible practices",
        "Contact information"
    ],
    description: 'Discover Our Story - Get to know our trucking companys rich history, values, and commitment to excellence.Learn how we have become a trusted partner in the transportation industry'

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
