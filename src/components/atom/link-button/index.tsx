import { ButtonHTMLAttributes } from "react";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const LinkButton = ({ text, onClick, ...rest }: LinkButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={
                "text-lg font-normal flex items-center gap-1 text-secondary-500"
            }
            {...rest}
        >
            <span className={"border-primary-100 border-b-[1px]"}>{text}</span>
            <i className="text-base fa-regular fa-chevrons-right" />
        </button>
    );
};

export default LinkButton;
