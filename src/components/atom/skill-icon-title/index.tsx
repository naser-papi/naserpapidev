import "./styles.css";

export interface SkillIconTitleProps {
    icon: string;
    title: string;
    bgColor: string;
}

const SkillIconTitle = ({ icon, title, bgColor }: SkillIconTitleProps) => {
    return (
        <div
            className={`flex items-center gap-1 rounded-lg px-2 py-2 lg:gap-2 lg:px-3`}
            style={{ backgroundColor: bgColor }}
        >
            <span className={`skill skill-${icon}`} />
            <label
                className={"text-lg font-medium text-primary-900 lg:text-2xl"}
            >
                {title}
            </label>
        </div>
    );
};

export default SkillIconTitle;
