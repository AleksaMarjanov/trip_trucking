import { Hero, ServicesList } from '@/components'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const ServicesPage = () => {
    return (
        <section className='dark:bg-white bg-white'>
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


            <section id="services" className=''>

                <h1 className='px-8 md:px-6 font-semibold text-2xl md:text-3xl lg:text-4xl py-6 md:py-12'>
                    our Partner for Safe & Efficient Transportation Services
                </h1>
                <ServicesList />
            </section>

        </section >

    )

}
export default ServicesPage
