import { BulletSection } from "@/components";
import Hero from "@/components/Hero";
import HeroLanding from "@/components/HeroLanding";
import Image from "next/image";

export default function Home() {

    return (
        <main className="min-h-screen relative">
            <div className="relative z-[0]">
                <HeroLanding title="Tripp in Trucking and Services"
                    src="/tripHero.jpg"
                    message="Unlocking the Hydro Power, Unleashing Your Success!"
                    heading="Revolutionizing Hydro Vac and Trucking Solutions"
                    href="about"
                    callToAction="Request Free Quote"
                    callToActionHref="/contact"
                />
            </div>
            <BulletSection />
        </main >
    )
}
