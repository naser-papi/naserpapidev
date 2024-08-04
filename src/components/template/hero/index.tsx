import { HeroBox, Intro, TopSkills } from "@/components";

const Hero = () => {
    return (
        <div className={"grid px-6 gap-4 bg-primary-700"}>
            <HeroBox />
            <Intro />
            <TopSkills />
        </div>
    );
};

export default Hero;
