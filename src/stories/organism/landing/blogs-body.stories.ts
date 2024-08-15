import { Meta, StoryObj } from "@storybook/react";
import { BlogsBody } from "@/components/organism/landing";

const meta: Meta<typeof BlogsBody> = {
    component: BlogsBody,
    title: "organism/landing/BlogsBody",
};
export default meta;

export const Default: StoryObj<typeof BlogsBody> = {};
