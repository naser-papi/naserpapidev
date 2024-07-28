import { BaseHTMLAttributes } from "react";

interface SkillCardProps extends BaseHTMLAttributes<HTMLDivElement> {
    icon: JSX.Element;
    title: string;
    subTitle: string;
}

const SkillCard = ({ icon, title, subTitle }: SkillCardProps) => {
    return (
        <div className={"flex gap-0 items-stretch"}>
            <div className={"rounded-l-lg bg-tertiary-900 w-[10px]"} />
            <div
                className={
                    "flex flex-col items-center gap-2 py-4 px-6 rounded-r-lg bg-secondary-800 font-ibm"
                }
            >
                <div className={"text-3xl"}>{icon}</div>

                <h2 className={"text-xl font-semibold"}>{title}</h2>
                <h6 className={"text-lg font-thin"}>{subTitle}</h6>
            </div>
        </div>
    );
};

export default SkillCard;
