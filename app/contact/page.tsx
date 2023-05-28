import { Form, Hero } from '@/components'
import React from 'react'
import dynamic from 'next/dynamic';

const MapWithNOSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
});


const Contact = () => {
    return (
        <div>
            <Hero
                title="Contact"
                src="/contact.jpeg"
                heading="Get in touch with us"
                message="Let our team of experts help you"
                callToActionHref='#contact'
                href="#contact"
                callToAction='Contact'
            />

            <section id="#contact" className='mt-12 md:mt-24 mb-6 flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-y-0 gap-x-12'>
                <div className='w-full lg:w-1/2'>
                    <Form />
                </div>
                <div className='relative h-[60vh] w-[60vh] z-0'>
                    <MapWithNOSSR />
                </div>
            </section>
        </div >

    )
}

export default Contact
