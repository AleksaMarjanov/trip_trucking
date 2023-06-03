import { Hero, Services } from '@/components'
import React from 'react'

const ServicesPage = () => {
    return (
        <>
            <Hero
                title="Services"
                src="/hero.jpg"
                heading="Power of Innovative Solutions"
                message="Leading the Way in Revolutionary Services"
                callToActionHref='/contact'
                href="services"
                callToAction='Request Free Quote'
            />


            <section id="services">
                <Services />
            </section>

        </>

    )
}

export default ServicesPage
