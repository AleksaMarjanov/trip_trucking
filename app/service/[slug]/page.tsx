import { HeroLanding } from '@/components';
// import { RichTextComponents } from '@/components/RichTextComponent';

import { client } from '@/lib/sanity.client';
import { Services } from '@/typings';
import { urlFor } from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import image1 from '@/public/winching.jpg';


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
            <HeroLanding
                message={service?.headingMessage}
                heading={service?.headingHero}
                src={urlFor(service?.heroImage).url()}
                title="Service title"
                href="Service"
                callToAction="Request Free Quote"
                callToActionHref="/contact"
            />
            <article className="min-h-screen py-36 text-center ">
                <div className="p-6 flex flex-col md:flex-row justify-center gap-6 md:gap-12 lg:gap-24">
                    <div className='md:w-1/2 flex flex-col text-xl font-medium items-start justify-start'>
                        {/* <PortableText value={service?.body} components={RichTextComponents} /> */}
                    </div>
                    <div className='relative w-[300px] h-[300px] md:w-[600px] md:h-[600px]'>
                        <Image src={image1} alt="Hero Section Image" width={1000} height={1000} priority className='object-contain object-center' />
                    </div>
                </div>
            </article>
        </>
    )

}

export default Service;

