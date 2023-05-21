import { Form, Hero } from '@/components'
import React from 'react'

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

            <section id="#contact">
                <Form />
            </section>
        </div>
    )
}

export default Contact
