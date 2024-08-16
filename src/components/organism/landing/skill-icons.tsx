import { BigCircleIcon } from "@/components/atom";

const SkillIcons = () => {
    return (
        <div className={"w-full grid grid-cols-2 gap-x-6 gap-y-12 sm:gap-y-16"}>
            <BigCircleIcon
                icon={<i className="fa-brands fa-node-js" />}
                color={"#E7A020"}
                title={"JS"}
            />
            <BigCircleIcon
                icon={<i className="fa-brands fa-react" />}
                color={"#28A9E0"}
                title={"REACT"}
            />
            <BigCircleIcon
                icon={<i className="fa-brands fa-html5" />}
                color={"#E54F26"}
                title={"HTML"}
            />
            <BigCircleIcon
                icon={<i className="fa-brands fa-css3-alt" />}
                color={"#0C73B8"}
                title={"CSS"}
            />
        </div>
    );
};

export default SkillIcons;
