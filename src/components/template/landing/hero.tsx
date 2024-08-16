import { HeroBox, Intro, TopSkills } from "@/components/organism/landing";

const Hero = () => {
    return (
        <div
            className={
                "grid px-6 gap-y-12 bg-primary-700 pt-12 pb-6 place-items-center sm:p-12 sm:gap-y-20"
            }
        >
            <HeroBox />
            <Intro />
            <TopSkills />
        </div>
    );
};

export default Hero;
