import { TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import React from 'react'

const About = () => {
    return (
        <div>
            <Hero
                title="Get to know us"
                src="/HydroVacOnField.jpg"
                message="Our Story"
                heading="About"
                href="paragraph"
                callToAction="Contact"
                callToActionHref="/contact"
            />

        </div>
    )
}

export default About
