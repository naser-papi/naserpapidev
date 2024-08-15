import { Meta, StoryObj } from "@storybook/react";
import { BlogsHeader } from "@/components/organism/landing";

const meta: Meta<typeof BlogsHeader> = {
    component: BlogsHeader,
    title: "organism/landing/BlogsHeader",
};
export default meta;

export const Default: StoryObj<typeof BlogsHeader> = {};
