import { cva, VariantProps } from "class-variance-authority";

const lableVaraints = cva(["font-semibold"], {
    variants: {
        active: {
            true: ["text-secondary-900"],
            false: ["text-primary-100"],
        },
        size: {
            large: [],
            medium: ["text-xl"],
            small: [],
        },
        isLink: {
            true: ["cursor-pointer"],
            false: [],
        },
    },
    defaultVariants: {
        size: "medium",
        active: false,
        isLink: false,
    },
});

interface LinkLableProps extends VariantProps<typeof lableVaraints> {
    text: string;
    href?: string;
}

const LinkLabel = ({ text, href, active, size }: LinkLableProps) => {
    return href ? (
        <a
            href={href}
            className={lableVaraints({ isLink: true, size, active })}
        >
            {text}
        </a>
    ) : (
        <label className={lableVaraints({ isLink: false, size, active })}>
            {text}
        </label>
    );
};

export default LinkLabel;
