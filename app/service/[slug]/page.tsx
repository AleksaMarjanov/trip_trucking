import { Hero, TrustedBy } from '@/components';

import { client } from '@/lib/sanity.client';
import { Services } from '@/typings';
import { urlFor } from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import { RichTextComponents } from '@/components/RichTextComponent';
import Trusted from '@/sanity/schemas/trusted';


type Props = {
    params: {
        slug: string;
    };
};

export const revalidate = 60; // revalidate this page every 60 seconds

// get dynamic params for each service 
export async function generateStaticParams() {
    const query = groq`
		*[_type == "services"]
		{
			slug
		}
		`;
    const slugs: Services[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map((slug) => ({
        slug,
    }));
}

async function Service({ params: { slug } }: Props) {
    // fetch data for only listing that is active/clicked
    const query = groq`

		*[_type == "services" && slug.current == $slug][0] {
			...,
			author->,
			categories[]->,
		}
	`;

    const service: Services = await client.fetch(query, { slug });

    return (
        <>
            <Hero
                message={service?.heroTagline}
                heading={service?.headingHero}
                src={urlFor(service?.heroImage).url()}
                title={service.title}
                // href={(service.title).toLowerCase()}
                href={service.slug.current}
                callToAction="Request Free Quote"
                callToActionHref="/contact"
            />
            <article id={service.slug.current}
                className="min-h-screen py-6 lg:py-12 xl:py-36">
                <h1 className='text-4xl lg:text-6xl font-semibold text-center mb-6 md:mb-16'>{service.title}</h1>
                <div className="p-6 md:px-16 flex flex-col lg:flex-row gap-6 md:gap-12 lg:gap-24">
                    <div className='w-full lg:w-1/2 flex flex-col text-xl font-medium items-start justify-start'>
                        <PortableText value={service?.body} components={RichTextComponents} />
                    </div>

                    <div
                        className="grid grid-cols-2  lg:w-1/2 grid-rows-2 md:grid-rows-3 sm:h-[60vh]"
                    >
                        <Image
                            src={urlFor(service.imageOne).url()}
                            alt={service.title}
                            width={400}
                            className="object-cover w-full h-full p-2 row-span-3 "
                            height={400}
                            priority
                        />
                        <Image
                            src={urlFor(service.imageTwo).url()}
                            alt={service.title}
                            width={400}
                            className="object-cover w-full h-full p-2 row-span-1"
                            height={400}
                            priority
                        />
                        <Image
                            src={urlFor(service.imageThree).url()}
                            alt={service.title}
                            width={400}
                            className="object-cover w-full h-full p-2 row-span-2"
                            height={400}
                            priority
                        />
                        {/* <Image */}
                        {/*     src={urlFor(service.imageFour).url()} */}
                        {/*     alt={service.title} */}
                        {/*     width={400} */}
                        {/*     className="object-cover w-full h-full p-2 row-span-3" */}
                        {/*     height={400} */}
                        {/*     priority */}
                        {/* /> */}
                    </div>
                </div>
            </article >

            <TrustedBy />
        </>
    )

}

export default Service;

