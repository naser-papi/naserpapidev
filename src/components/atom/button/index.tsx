"use client";
import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Spinner } from "@/components";

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
                large: ["h-12", "px-6", "text-md", "font-semibold"],
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
    extends Omit<
            ButtonHTMLAttributes<HTMLButtonElement>,
            "children" | "className"
        >,
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
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={buttonVariants({ loading, size, shape, intend })}
            onClick={onClick}
            disabled={loading || disabled}
            {...rest}
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
