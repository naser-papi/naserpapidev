import { BigCircleIcon } from "@/components/atom";

const SkillIcons = () => {
    return (
        <div className={"grid grid-cols-2 gap-x-10 gap-y-10"}>
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
        </div>
    );
};

export default SkillIcons;
