import { cva, VariantProps } from "class-variance-authority";

const lableVaraints = cva(["font-semibold"], {
    variants: {
        state: {
            active: ["text-secondary-900"],
            normal: ["text-primary-100"],
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
        state: "normal",
        isLink: false,
    },
});

interface LinkLableProps extends VariantProps<typeof lableVaraints> {
    text: string;
    href?: string;
}

const LinkLabel = ({ text, href, state, size }: LinkLableProps) => {
    return href ? (
        <a href={href} className={lableVaraints({ isLink: true, size, state })}>
            {text}
        </a>
    ) : (
        <label className={lableVaraints({ isLink: false, size, state })}>
            {text}
        </label>
    );
};

export default LinkLabel;
