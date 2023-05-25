import Image from 'next/image'
import React from 'react'

const BulletSection = () => {
    return (
        <div className="xl:absolute z-[20] xl:ml-[10rem] mb-[2rem] top-[85%]">
            <section className="mr-50 bg-black text-white">
                <div className="py-12 gap-y-12 lg:gap-x-12 lg:gap-y-6 flex flex-col md:flex-row px-3 md:px-6 lg:px-12 ">
                    <div className="flex gap-y-2 justify-center flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2">
                            <h2 className="font-medium text-xl">Advanced Technology and Expertise</h2>
                            <Image src="/rocket.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <ol className="leading-[30px] font-semibold text-lg">
                            <li>State-of-the-art hydrovac trucks and cutting-edge equipment</li>
                            <li>Experienced team members with in-depth knowledge of hydrovac excavation tecniques</li>
                            <li>Ability to tackle complex projects with precision and efficiency</li>
                        </ol>
                    </div>
                    <div className="flex justify-center flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2">
                            <h2 className="font-medium text-xl">Safety and Environmental Focus</h2>
                            <Image src="/environment.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <ol className="leading-[30px] font-semibold text-lg">
                            <li>Strict adherence to safety protocols and industry regulations.</li>
                            <li>Certification and commitment to maintaining a safe working environment.</li>
                            <li>Environmental responsibility through sustainable practices and minimizing impact.</li>
                        </ol>
                    </div>

                    <div className="flex justify-center flex-col">
                        <div className="flex flex-row gap-1 lg:gap-2">
                            <h2 className="font-medium text-xl">Customized Solutions and Superior Service</h2>
                            <Image src="/solutions.svg" alt="solutions light bulb image" width={50} height={50} priority className="object-contain object-center" />
                        </div>
                        <ol className="leading-[30px] font-semibold text-lg">
                            <li>Tailored solutions based on unique project requirements.</li>
                            <li>Flexibility to adapt to specific needs and challenges.</li>
                            <li>Dedication to providing exceptional service and exceeding customer expectations.</li>
                        </ol>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default BulletSection
