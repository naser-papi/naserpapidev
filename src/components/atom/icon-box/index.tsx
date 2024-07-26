import { BaseHTMLAttributes } from "react";

interface IconBox extends BaseHTMLAttributes<HTMLDivElement> {
    icon: JSX.Element;
}

const IconBox = ({ icon }: IconBox) => {
    return (
        <div
            className={
                "bg-primary-600 bg-opacity-70 p-2 text-secondary-900 text-xl rounded-full w-12 h-12 text-center"
            }
        >
            {icon}
        </div>
    );
};

export default IconBox;
