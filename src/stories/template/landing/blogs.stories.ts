import { Meta, StoryObj } from "@storybook/react";
import { Blogs } from "@/components/template/landing";

const meta: Meta<typeof Blogs> = {
    component: Blogs,
    title: "template/landing/Blogs",
};
export default meta;

export const Default: StoryObj<typeof Blogs> = {};
