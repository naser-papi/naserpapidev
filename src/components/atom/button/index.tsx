import { ButtonHTMLAttributes } from "react";

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button
            className={
                "flex width-full rounded-md px-6 items-center bg-white text-black h-12"
            }
        >
            {text}
        </button>
    );
};

export default Button;
