import { SectionTitle } from "@/components";

const SkillHeader = () => {
    return (
        <div className={"flex flex-col items-center gap-2"}>
            <SectionTitle title={"Skills"} mode={"underline"} />
            <p className={"text-center text-lg font-base text-primary-100"}>
                I am striving to never stop learning and improving
            </p>
        </div>
    );
};

export default SkillHeader;
