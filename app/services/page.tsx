import { Hero, ServicesList } from '@/components'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const ServicesPage = () => {
    return (
        <>
            <TransitionEffect />
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
                <ServicesList />
            </section>

        </>

    )
}

export default ServicesPage
