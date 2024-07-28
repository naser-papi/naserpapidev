import { SkillCard } from "@/components";

const SkillCards = () => {
    return (
        <div className={"grid gap-y-6"}>
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
