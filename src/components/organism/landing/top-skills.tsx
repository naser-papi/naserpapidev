import { Indicator } from "@/components/molecule";

const TopSkills = () => {
    return (
        <div
            className={
                "top-skills w-full max-w-5xl grid place-items-start gap-y-12 py-12 px-9 rounded-[80px] bg-primary-900 "
            }
        >
            <Indicator count={2} text={"Programming Languages"} />
            <Indicator count={10} text={"Development Tools"} />
            <Indicator count={16} text={"Years Of Experiences"} />
        </div>
    );
};

export default TopSkills;
