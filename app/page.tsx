import { BulletSection } from "@/components";
import Hero from "@/components/Hero";
import HeroLanding from "@/components/HeroLanding";
import Lorem from "@/components/Lorem";
import Image from "next/image";

export default function Home() {

    return (
        <main className="min-h-screen relative">
            <div className="relative z-[0]">
                <HeroLanding title="Tripp in Trucking and Services"
                    src="/tripHero.jpg"
                    message="Unlocking the Hydro Power, Unleashing Your Success!"
                    heading="Revolutionizing Hydro Vac and Trucking Solutions"
                    href="bulletSection"
                    callToAction="Request Free Quote"
                    callToActionHref="/contact"
                />
            </div>
            <section className="mb-30">
                <BulletSection />
            </section>
            <div className="relative">
                <Lorem />
            </div>

        </main >
    )
}
