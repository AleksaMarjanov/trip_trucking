import { BulletSection, Footer, Services, TrustedBy } from "@/components";
import HeroLanding from "@/components/HeroLanding";
import Lorem from "@/components/Lorem";
import { groq } from "next-sanity";
import Image from "next/image";

const Home = () => {

    return (

        <main className="min-h-screen relative">
            <div className="">
                <HeroLanding
                    // title="Tripp in Trucking and Services"
                    title=""
                    src="/tripHero.jpg"
                    // message="Unlocking the Hydro Power, Unleashing Your Success!"
                    message=""
                    heading="Revolutionizing hydro vac and trucking solutions."
                    href="services"
                    callToAction="Request Free Quote"
                    callToActionHref="/contact"
                />
            </div>
            <Lorem />
            <section className="z-[20] ">
                <Services />
            </section>
            {/* <section className="mb-30 "> */}
            {/*     <BulletSection /> */}
            {/* </section> */}
            <div className="">
                <TrustedBy />
            </div>

        </main >
    )
}

export default Home;
