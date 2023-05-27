import { BulletSection, Services } from "@/components";
import Hero from "@/components/Hero";
import HeroLanding from "@/components/HeroLanding";
import Lorem from "@/components/Lorem";
import Image from "next/image";

export default function Home() {

    return (
        <main className="min-h-screen relative">
            <div className="relative z-[0]">
                <Hero
                    // title="Tripp in Trucking and Services"
                    title=""
                    src="/tripHero.jpg"
                    // message="Unlocking the Hydro Power, Unleashing Your Success!"
                    message=""
                    heading="Revolutionizing hydro vac and trucking solutions."
                    href="bulletSection"
                    callToAction="Request Free Quote"
                    callToActionHref="/contact"
                />
            </div>
            <section>
                <Services />
            </section>
            {/* <section className="mb-30 "> */}
            {/*     <BulletSection /> */}
            {/* </section> */}
            {/* <div className="relative"> */}
            {/*     <Lorem /> */}
            {/* </div> */}

        </main >
    )
}
