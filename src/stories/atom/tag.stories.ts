import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "@/components";

const meta: Meta<typeof Tag> = {
    parameters: {
        layout: "centered",
    },
    title: "Atom/Tag",
    component: Tag,
};
export default meta;

export const Default: StoryObj<typeof Tag> = {
    args: {
        text: "HTML",
    },
};
