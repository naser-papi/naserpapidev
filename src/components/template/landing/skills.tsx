import Image from "next/image";
import skillsBk from "assets/images/skills-bk.png";
import {
    SkillCards,
    SkillHeader,
    SkillIcons,
} from "@/components/organism/landing";

const Skills = () => {
    return (
        <div className={"relative w-screen py-12 px-6 sm:p-12"}>
            <Image
                src={skillsBk}
                alt={"skills"}
                fill
                className={"object-cover"}
            />
            <div
                className={
                    "relative w-full grid place-items-center gap-y-12 z-10 py-12"
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
