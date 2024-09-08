import Image from "next/image";
import { SkillIconTitleProps } from "@/components/atom/skill-icon-title";
import { SkillIconTitle } from "@/components/atom";
import clockImg from "assets/images/clock.png";

interface TimeSkillCardProps {
    start: string;
    end: string;
    title: string;
    skills: SkillIconTitleProps[];
}

const TimeSkillCard = ({ start, end, title, skills }: TimeSkillCardProps) => {
    return (
        <div
            className={
                "time-skill-card gap-y-13 relative grid place-items-start rounded-xl border-l-4 border-secondary-500 bg-primary-600 bg-opacity-70 p-4"
            }
        >
            <Image
                src={clockImg}
                alt={"skill bk"}
                className={
                    "z-0 rounded-xl object-cover object-left opacity-30 lg:object-top"
                }
                fill
            />
            <header
                className={
                    "z-10 flex w-full flex-col justify-center gap-x-4 gap-y-1 text-3xl font-medium text-primary-50"
                }
            >
                <div className={"flex w-full items-center justify-between"}>
                    <span>{start}</span>
                    <span>{end}</span>
                </div>
                <h4 className={"w-full text-center"}>{title}</h4>
            </header>
            <main className={"z-10 flex flex-wrap items-center gap-4 py-8"}>
                {skills.map((skill) => (
                    <SkillIconTitle {...skill} key={skill.title} />
                ))}
            </main>
        </div>
    );
};

export default TimeSkillCard;
