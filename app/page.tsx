import Hero from "@/components/Hero";
import HeroLanding from "@/components/HeroLanding";

export default function Home() {

    return (
        <main className="min-h-screen ">
            <HeroLanding title="Tripp in Trucking"
                src="/tripHero.jpg"
                message="Unlocking the Hydro Power, Unleashing Your Success!"
                heading="Revolutionizing Hydro Vac and Trucking Solutions"
                href="about"
                callToAction="Request Free Quote"
                callToActionHref="/contact"
            />
        </main>
    )
}
