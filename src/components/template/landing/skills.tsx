import Image from "next/image";
import skillsBk from "assets/images/skills-bk.png";
import {
    SkillCards,
    SkillHeader,
    SkillIcons,
} from "@/components/organism/landing";

const Skills = () => {
    return (
        <div className={"relative w-screen"}>
            <Image
                src={skillsBk}
                alt={"skills"}
                fill
                className={"object-cover"}
            />
            <div
                className={
                    "relative w-full grid place-items-center gap-y-10 z-10 px-6 py-10"
                }
            >
                <SkillHeader />
                <SkillCards />
                <SkillIcons />
            </div>
        </div>
    );
};

export default Skills;
