import { BaseHTMLAttributes } from "react";

interface BigCircleIconProps extends BaseHTMLAttributes<HTMLDivElement> {
    icon: JSX.Element;
    color: string;
    title: string;
}

const BigCircleIcon = ({ icon, color, title }: BigCircleIconProps) => {
    return (
        <div className={"flex flex-col gap-6 items-center"}>
            <div
                className={`w-[112px] h-[112px] text-primary-50 rounded-full text-6xl grid place-items-center`}
                style={{ backgroundColor: color }}
            >
                {icon}
            </div>
            <h4 className={`text-3xl`} style={{ color: color }}>
                {title}
            </h4>
        </div>
    );
};

export default BigCircleIcon;
