import { Meta, StoryObj } from "@storybook/react";
import { BlogsActions } from "@/components";

const meta: Meta<typeof BlogsActions> = {
    component: BlogsActions,
    title: "organism/BlogsActions",
};
export default meta;

export const Default: StoryObj<typeof BlogsActions> = {};
