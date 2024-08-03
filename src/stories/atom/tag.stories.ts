import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/components";

const meta: Meta<typeof Tag> = {
    title: "Atom/Tag",
    component: Tag,
    argTypes: {
        intend: {
            control: "radio",
            options: ["primary", "secondary"],
        },
    },
};
export default meta;

export const Primary: StoryObj<typeof Tag> = {
    args: {
        text: "HTML",
        intend: "primary",
    },
};

export const Secondary: StoryObj<typeof Tag> = {
    args: {
        text: "Web Developer",
        intend: "secondary",
    },
};
