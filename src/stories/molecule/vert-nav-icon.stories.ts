import { Meta, StoryObj } from "@storybook/react";
import { NarrowNavIcon } from "@/components/molecule";

const meta: Meta<typeof NarrowNavIcon> = {
    component: NarrowNavIcon,
    title: "molecule/VertNavIcon",
};
export default meta;

export const Default: StoryObj<typeof NarrowNavIcon> = {
    args: {
        items: [
            {
                icon: "fa-light fa-grid-round-2-plus",
                title: "hero",
                href: "#hero",
            },
            {
                icon: "fa-regular fa-user",
                title: "About Me",
                href: "#about",
            },
            {
                icon: "fa-regular fa-code",
                title: "Skills",
                href: "#skill",
            },
            {
                icon: "fa-regular fa-presentation-screen",
                title: "Works",
                href: "#works",
            },
        ],
    },
};
