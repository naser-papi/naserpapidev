"use client";
import { ButtonHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Spinner } from "@/components";

const buttonVariants = cva(
    [
        "flex",
        "w-full",
        "rounded-md",
        "items-center",
        "bg-white",
        "text-black",
        "justify-center",
    ],
    {
        variants: {
            size: {
                small: ["h-6", "px-2", "text-sm", "font-medium"],
                medium: ["h-8", "px-4", "text-base", "font-semibold"],
                large: ["h-12", "px-6", "text-md", "font-bold"],
            },
            loading: {
                true: ["grid", "grid-cols-[auto_1fr]"],
                false: [],
            },
        },
        defaultVariants: {
            size: "medium",
        },
    }
);

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children">,
        VariantProps<typeof buttonVariants> {
    text: string;
}

const Button = ({
    text,
    loading,
    size,
    onClick,
    disabled,
    ...rest
}: ButtonProps) => {
    return (
        <button
            className={buttonVariants({ loading, size })}
            onClick={onClick}
            disabled={loading || disabled}
            {...rest}
        >
            {loading ? (
                <>
                    <Spinner fillColor={"bg-blue"} size={size} />
                    <span>{text}</span>
                </>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
