import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const iconBoxVariants = cva(
    [
        "bg-primary-600",
        "bg-opacity-70",
        "p-2",
        "text-xl",
        "rounded-full",
        "w-12",
        "h-12",
        "text-center",
    ],
    {
        variants: {
            intend: {
                primary: ["text-secondary-900"],
                secondary: ["text-primary-50"],
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
