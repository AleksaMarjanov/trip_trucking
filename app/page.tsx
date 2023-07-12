import { BulletSection, Footer, Services, TrustedBy, IntroText } from "@/components";
import HeroLanding from "@/components/HeroLanding";
import TransitionEffect from "@/components/TransitionEffect";
import { groq } from "next-sanity";
import Image from "next/image";

const Home = () => {

    return (
        <>
            <TransitionEffect />
            <main className="min-h-screen relative dark:bg-white">
                <div className="">
                    <HeroLanding
                        title=""
                        src="/tripHero.jpg"
                        // message="Unlocking the Hydro Power, Unleashing Your Success!"
                        message=""
                        heading="Revolutionizing hydro vac and trucking solutions."
                        href="services"
                        // callToAction="Request Free Quote"
                        callToActionHref="/contact"
                    />
                </div>
                <IntroText />
                <section className="">
                    <Services />
                </section>
                <section >
                    <TrustedBy />
                </section>

            </main >
        </>
    )
}

export default Home;
