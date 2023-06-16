import { Hero } from '@/components'
import Apply from '@/components/Apply'
import TransitionEffect from '@/components/TransitionEffect'
import React from 'react'

const Careers = () => {
    return (
        <div>
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
                <svg className="absolute right-0 top-[45%] hidden md:block" width="466" height="633" viewBox="0 0 466 633" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M466 74L317.074 74C182.828 74 73.9999 182.571 73.9999 316.5C73.9999 450.429 182.828 559 317.074 559L466 559" stroke="#F1F1F1" stroke-width="147" stroke-miterlimit="10"></path>
                </svg>

                <Apply />
            </section>

        </div>
    )
}

export default Careers
