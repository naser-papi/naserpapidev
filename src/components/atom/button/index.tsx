import { ButtonHTMLAttributes } from "react";

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    text: string;
}

const Button = ({ text }: ButtonProps) => {
    return (
        <button
            className={
                "flex w-full rounded-md px-6 items-center bg-white text-black h-12 font-bold justify-center"
            }
        >
            {text}
        </button>
    );
};

export default Button;
