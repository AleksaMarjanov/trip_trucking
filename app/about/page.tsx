import { TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import React from 'react'

const About = () => {
    return (
        <div>
            <Hero
                title="Get to know us"
                src="/Hydrovac-NG-removebg-preview.png"
                message="Our Story"
                heading="About"
                href="paragraph"
                callToAction="Contact"
                callToActionHref="/contact"
            />

            <div className="">
                <TrustedBy />
            </div>

        </div>
    )
}

export default About
