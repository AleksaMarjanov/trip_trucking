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


            <Apply />

        </div>
    )
}

export default Careers
