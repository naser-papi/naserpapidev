import { Indicator } from "@/components/molecule";

const TopSkills = () => {
    return (
        <div
            className={
                "top-skills w-full max-w-5xl grid place-items-start gap-y-12 py-12 px-9 rounded-[80px] bg-primary-900 "
            }
        >
            <Indicator count={16} text={"Years of SD Expertise"} />
            <Indicator count={"05"} text={"Development Team Works"} />
            <Indicator count={10} text={"Web/Mobile Applications"} />
        </div>
    );
};

export default TopSkills;
