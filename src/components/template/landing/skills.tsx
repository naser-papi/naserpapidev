import Image from "next/image";
import skillsBk from "assets/images/skills-bk.png";
import {
    SkillCards,
    SkillHeader,
    SkillFooter,
} from "@/components/organism/landing";

const Skills = () => {
    return (
        <div
            className={"relative w-full px-6 py-12 sm:p-12 xl:px-20"}
            id={"skills"}
        >
            <Image
                src={skillsBk}
                alt={"skills"}
                fill
                className={"object-cover"}
            />
            <div
                className={
                    "relative z-10 mx-auto grid w-full max-w-[1280px] place-items-center gap-y-12 py-12 xl:gap-y-12"
                }
            >
                <SkillHeader />
                <SkillCards />
                <SkillFooter />
            </div>
        </div>
    );
};

export default Skills;
