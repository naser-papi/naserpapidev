import { LabelHTMLAttributes } from "react";
import { IconBox } from "@/components";

interface TitleIconProps extends LabelHTMLAttributes<HTMLHeadingElement> {
    title: string;
    icon: JSX.Element;
}

const TitleIcon = ({ title, icon }: TitleIconProps) => {
    return (
        <div className={"flex items-center gap-3"}>
            <h1
                className={
                    "text-2xl font-bold font-ibm text-secondary-900 font-ibm"
                }
            >
                {title}
            </h1>
            <IconBox icon={icon} />
        </div>
    );
};

export default TitleIcon;
