import { SkillCard } from "@/components/molecule";

const SkillCards = () => {
    return (
        <div className={"w-full grid gap-y-6 gap-x-6 xl:grid-cols-2"}>
            <SkillCard
                title={"Web Development"}
                subTitle={"HTML.CSS.JS.REACT"}
                icon={<i className="fa-regular fa-desktop" />}
            />
            <SkillCard
                title={"App Development"}
                subTitle={"iOS.Android"}
                icon={<i className="fa-regular fa-mobile" />}
            />
        </div>
    );
};

export default SkillCards;
