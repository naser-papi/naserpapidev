import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/components";

const meta: Meta<typeof Hero> = {
    component: Hero,
    title: "template/Hero",
};
export default meta;

export const Default: StoryObj<typeof Hero> = {};
