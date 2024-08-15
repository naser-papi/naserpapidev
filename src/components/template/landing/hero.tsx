import { HeroBox, Intro, TopSkills } from "@/components/organism/landing";

const Hero = () => {
    return (
        <div
            className={
                "grid px-6 gap-4 bg-primary-700 py-10 place-items-center"
            }
        >
            <HeroBox />
            <Intro />
            <TopSkills />
        </div>
    );
};

export default Hero;
