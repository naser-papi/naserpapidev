import { Meta, StoryObj } from "@storybook/react";
import { Blogs } from "@/components";

const meta: Meta<typeof Blogs> = {
    component: Blogs,
    title: "template/Blogs",
};
export default meta;

export const Default: StoryObj<typeof Blogs> = {};
