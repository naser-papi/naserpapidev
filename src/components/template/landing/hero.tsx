import {
    HeroBox,
    HeroHead,
    Intro,
    TopSkills,
} from "@/components/organism/landing";

const Hero = () => {
    return (
        <div
            id="hero"
            className={
                "grid place-items-center gap-x-6 px-6 gap-y-12 bg-primary-700 pt-12 pb-6 scroll-mt-10 sm:p-12 sm:gap-y-20 lg:px-12 xl:px-20 xl:grid-cols-[1fr_auto] xl:[&>.hero-head]:col-span-2 xl:[&>.content-frame]:col-span-2 "
            }
        >
            <HeroHead />
            <HeroBox />
            <Intro />
            <TopSkills />
        </div>
    );
};

export default Hero;
