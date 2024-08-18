import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const iconBoxVariants = cva(
    ["p-2", "text-xl", "rounded-full", "w-12", "h-12", "text-center"],
    {
        variants: {
            intend: {
                primary: [
                    "text-secondary-900",
                    "bg-primary-600",
                    "bg-opacity-70",
                    "sm:text-4xl",
                    "sm:h-16",
                    "sm:w-16",
                    "sm:p-3",
                ],
                secondary: [
                    "bg-secondary-900",
                    "text-primary-600",
                    "sm:text-4xl",
                    "sm:h-16",
                    "sm:w-16",
                    "sm:p-3",
                    "xl:h-24",
                    "xl:w-24",
                    "xl:p-6",
                    "xl:text-5xl",
                ],
                tertiary: ["text-secondary-500"],
            },
        },
        defaultVariants: {
            intend: "primary",
        },
    }
);

interface IconBox
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof iconBoxVariants> {
    icon: JSX.Element;
}

const IconBox = ({ icon, intend }: IconBox) => {
    return <div className={iconBoxVariants({ intend })}>{icon}</div>;
};

export default IconBox;
