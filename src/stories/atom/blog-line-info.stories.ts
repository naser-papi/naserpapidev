import { Meta, StoryObj } from "@storybook/react";
import { BlogLineInfo } from "@/components";

const meta: Meta<typeof BlogLineInfo> = {
    title: "Atom/BlogLineInfo",
    component: BlogLineInfo,
};

export default meta;
export const Default: StoryObj<typeof BlogLineInfo> = {
    args: {
        writer: "Naser",
        date: "2024-05-07",
        readTime: 5,
    },
};
