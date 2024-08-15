import { Meta, StoryObj } from "@storybook/react";
import { BlogsActions } from "@/components/organism/landing";

const meta: Meta<typeof BlogsActions> = {
    component: BlogsActions,
    title: "organism/landing/BlogsActions",
};
export default meta;

export const Default: StoryObj<typeof BlogsActions> = {};
