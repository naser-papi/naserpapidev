import { cva, VariantProps } from "class-variance-authority";

const sectionTitleVaraints = cva(["text-center"], {
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
            ],
            underline: [
                "text-4xl",
                "text-secondary-800",
                "[&>.line-with-bullets]:mt-3",
                "[&>.line-with-bullets]:bg-secondary-700",
                "[&>.line-with-bullets:after]:bg-secondary-800",
                "[&>.line-with-bullets:before]:bg-secondary-800",
            ],
        },
    },
});
import { LabelHTMLAttributes } from "react";

interface SectionTitleProps
    extends LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof sectionTitleVaraints> {
    title: string;
}

const SectionTitle = ({ title, mode }: SectionTitleProps) => {
    return (
        <div className={sectionTitleVaraints({ mode })}>
            {title}
            <div className={"line-with-bullets"} />
        </div>
    );
};

export default SectionTitle;
