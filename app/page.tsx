import { BulletSection, Footer, Services, TrustedBy, IntroText } from "@/components";
import HeroLanding from "@/components/HeroLanding";
import { groq } from "next-sanity";
import Image from "next/image";

const Home = () => {

    return (

        <main className="min-h-screen relative">
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
            <section>
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
