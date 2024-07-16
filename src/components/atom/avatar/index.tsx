import Image, { ImageProps } from "next/image";
import { cva, VariantProps } from "class-variance-authority";

const avtarVariants = cva(["w-[128px]", "h-[128px]", "relative"], {
    variants: {
        shape: {
            circle: ["[&>img]:rounded-full"],
            square: [],
        },
        border: {
            true: ["[&>img]:border-secondary-800", "[&>img]:border-[3px]"],
            false: [],
        },
    },
    defaultVariants: {
        border: true,
        shape: "circle",
    },
});

interface AvatarProps extends VariantProps<typeof avtarVariants>, ImageProps {}

const Avatar = ({ border, shape, src, alt }: AvatarProps) => {
    return (
        <div className={avtarVariants({ border, shape })}>
            <Image src={src} alt={alt} fill />
        </div>
    );
};

export default Avatar;
