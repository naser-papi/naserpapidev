import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const tagVariants = cva(
    ["rounded-full", "px-2", "py-0.5", "text-sm", "font-base", "sm:text-lg"],
    {
        variants: {
            intend: {
                primary: ["bg-secondary-900", "text-primary-900"],
                secondary: [
                    "bg-primary-800",
                    "text-primary-100",
                    "px-3",
                    "py-1",
                    "sm:text-2xl",
                    "sm:px-6",
                    "sm:py-2",
                ],
            },
        },
        defaultVariants: {
            intend: "primary",
        },
    }
);

interface TagProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof tagVariants> {
    text: string;
}

const Tag = ({ text, intend }: TagProps) => {
    return <label className={tagVariants({ intend })}>{text}</label>;
};

export default Tag;
