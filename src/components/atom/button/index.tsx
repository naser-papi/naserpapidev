"use client";
import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import Spinner from "../spinner";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
    ["flex", "w-auto", "items-center", "justify-center", "gap-2"],
    {
        variants: {
            intend: {
                default: ["bg-primary-100", "text-primary-900"],
                primary: ["bg-secondary-800", "text-primary-900"],
                secondary: [
                    "bg-transparent",
                    "text-primary-50",
                    "border-secondary-500",
                    "border-2",
                ],
            },
            size: {
                small: ["h-6", "px-2", "text-sm", "font-normal"],
                medium: ["h-8", "px-4", "text-base", "font-normal"],
                large: [
                    "h-12",
                    "px-6",
                    "text-md",
                    "font-semibold",
                    "sm:text-2xl",
                    "sm:px-8",
                    "sm:h-16",
                ],
            },
            loading: {
                true: ["grid", "grid-cols-[auto_1fr]"],
                false: [],
            },
            shape: {
                rect: ["rounded-md"],
                oval: ["rounded-full"],
            },
        },
        defaultVariants: {
            size: "medium",
            intend: "default",
            shape: "rect",
        },
    }
);

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">,
        VariantProps<typeof buttonVariants> {
    text: string;
    icon?: JSX.Element;
}

const Button = ({
    text,
    loading,
    size,
    onClick,
    disabled,
    icon,
    intend,
    shape,
    className,
    ...rest
}: ButtonProps) => {
    return (
        <button
            {...rest}
            className={twMerge(
                buttonVariants({ loading, size, shape, intend }),
                className
            )}
            onClick={onClick}
            disabled={loading || disabled}
        >
            {loading ? (
                <>
                    <Spinner fillColor={"bg-blue"} size={size} />
                    <span>{text}</span>
                </>
            ) : icon ? (
                <>
                    {text}
                    {icon}
                </>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
