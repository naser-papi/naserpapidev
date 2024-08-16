import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const sectionTitleVariants = cva(["text-center"], {
    variants: {
        mode: {
            default: [
                "px-10",
                "py-2",
                "border-4",
                "border-secondary-600",
                "rounded-tl-[40px]",
                "rounded-br-[40px]",
                "text-2xl",
                "font-semibold",
                "text-primary-50",
                "[&>.line-with-bullets]:hidden",
                "sm:text-4xl",
                "sm:py-4",
                "sm:px-20",
            ],
            underline: [
                "text-4xl",
                "text-secondary-800",
                "[&>.line-with-bullets]:mt-3",
                "[&>.line-with-bullets]:bg-secondary-700",
                "[&>.line-with-bullets:after]:bg-secondary-800",
                "[&>.line-with-bullets:before]:bg-secondary-800",
                "sm:text-8xl",
            ],
        },
    },
    defaultVariants: {
        mode: "default",
    },
});
import { BaseHTMLAttributes } from "react";

interface SectionTitleProps
    extends BaseHTMLAttributes<HTMLDivElement>,
        VariantProps<typeof sectionTitleVariants> {
    title: string;
}

const SectionTitle = ({
    title,
    mode,
    className,
    ...rest
}: SectionTitleProps) => {
    return (
        <div
            {...rest}
            className={twMerge(sectionTitleVariants({ mode }), className)}
        >
            {title}
            <div className={"line-with-bullets"} />
        </div>
    );
};

export default SectionTitle;
