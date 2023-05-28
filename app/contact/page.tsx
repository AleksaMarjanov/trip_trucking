import { Form, Hero } from '@/components'
import React from 'react'
import dynamic from 'next/dynamic';

const MapWithNOSSR = dynamic(() => import("../../components/Map"), {
    ssr: false,
});


const Contact = () => {
    return (
        <>
            <Hero
                title="Contact"
                src="/contact.jpeg"
                heading="Get in touch with us"
                message="Let our team of experts help you"
                callToActionHref='#contact'
                href="#contact"
                callToAction='Contact'
            />

            <section className='my-6 md:my-24 items-center justify-center'>
                <div className='flex items-center justify-center flex-col px-6 py-6'>
                    <h2 className='text-3xl md:text-5xl font-bold'>Service inquiry</h2>
                    <p className='text-black/60 text-lg lg:text-xl'> Get in contact with us to see how we can assist with out expert trucking solutions</p>
                </div>

                <div id="#contact" className='mt-12 md:mt-24 mb-6 flex flex-col lg:flex-row items-center justify-center gap-y-6 lg:gap-y-0 gap-x-12'>
                    <div className='relative h-[50vh] w-[90%] md:w-[50%] z-[0] lg:pl-20'>
                        <MapWithNOSSR />
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Form />
                    </div>
                </div>
            </section >
        </>
    )
}

export default Contact
