import { Hero, Apply } from '@/components'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

export const metadata = {
    title: 'Tripp in Trucking - Careers',
    description: 'Join Our Dynamic Team - Explore exciting opportunities and rewarding careers in our trucking company. Be a part of our success story and grow professionally with us.',
}

const Careers = () => {

    return (

        <div className='dark:bg-white'>
            <TransitionEffect />
            <Hero
                title="Join Our Team of Trailblazers"
                heading="Apply Today"
                message="Fuel Your Career with Exciting Opportunities and Boundless Growth"
                src="/truck1.jpg"
                href="apply"
                callToAction='Apply'
                callToActionHref='#apply'
            />
            <section className='min-h-screen'>
                <div className="flex items-center text-balance justify-center px-6 md:px-12 py-6 md:py-12">
                    <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Join Our Team:
                        Apply for a Trippin Trucking Adventure!
                    </h1>
                </div>
                <Apply />
            </section>

        </div>
    )
}

export default Careers
