import { TrustedBy } from '@/components'
import Hero from '@/components/Hero'
import React from 'react'


const About = () => {

    return (

        <div>
            <Hero
                title="Get to know us"
                src="/hydroVacOnField.jpg"
                message="Our Story"
                heading="About"
                href="about"
                callToAction="Contact"
                callToActionHref="/contact"
            />

            <article id="about" className='w-full sm:px-16 px-6 py-12 grid  lg:grid-cols-3 grid-rows-1 gap-y-12  lg:gap-y-0 lg:gap-x-6 '>
                <div className='flex flex-col items-start justyf-start gap-y-4 '>
                    <h2 className='text-2xl md:text-5xl lg:text-6xl font-semibold'>
                        I. Company Overview:
                    </h2>
                    <p className='text-xl leading-[35px] font-medium'>
                        Tripp in Trucking is a reputable transportation company that specializes in providing reliable and efficient trucking services. With a strong presence in the industry, we have built a solid reputation for delivering exceptional logistics solutions to our clients. Our company operates a large fleet of well-maintained trucks and employs a team of dedicated professionals who are committed to excellence in service.
                    </p>
                </div>

                <div className='flex flex-col items-start justyf-start'>
                    <h2 className='text-2xl md:text-5xl lg:text-6xl font-semibold'>
                        II. Mission:
                    </h2>
                    <p className='text-xl leading-[35px] font-medium'>
                        At Tripp in Trucking, our mission is to be a trusted partner in transportation by delivering exceptional service, ensuring timely and secure deliveries, and exceeding customer expectations. We strive to provide innovative and efficient solutions that optimize supply chain management for our clients.
                    </p>
                </div>

                <div className='flex flex-col items-start justyf-start'>
                    <h2 className='text-2xl md:text-5xl lg:text-6xl font-semibold'>
                        III. Values:
                    </h2>
                    <ul className='text-xl leading-[35px] font-medium'>
                        <li>
                            &#x2022;<b>Integrity</b> :We conduct our business with the highest ethical standards, fostering transparency, honesty, and trust in all our relationships with customers, employees, and stakeholders.
                        </li>
                        <li>
                            &#x2022;<b>Safety</b>: We prioritize the safety of our employees, partners, and the communities in which we operate. We adhere to strict safety protocols and continuously invest in training and technology to maintain a safe working environment.
                        </li>
                        <li>
                            &#x2022;<b>Reliability</b>:We are committed to delivering reliable and consistent transportation services, meeting deadlines, and ensuring the secure and timely delivery of goods. Our clients can rely on us to fulfill their logistics needs efficiently.
                        </li>
                        <li>
                            &#x2022;<b>Customer Focus</b>: We prioritize our customers needs and work closely with them to understand their unique requirements. Our customer-centric approach allows us to provide tailored solutions and exceptional service to meet their expectations.
                        </li>
                        <li>
                            &#x2022;<b>Teamwork</b>: We foster a collaborative work culture, valuing the contribution of each team member. By working together, we achieve excellence in our operations, support one another, and continuously improve our services.
                        </li>
                        <li>
                            &#x2022;<b>Continuous Improvement</b>:
                            We embrace a culture of continuous improvement and innovation. We actively seek ways to enhance our processes, invest in technology, and adapt to industry advancements to deliver optimal results for our clients.
                            These elements provide an overview of Tripp in Truckings company background, purpose, and core values, showcasing the companys commitment to delivering reliable transportation services while upholding ethical standards and maintaining a positive work environment.
                        </li>
                    </ul>
                </div>
            </article >

        </div >
    )
}

export default About
