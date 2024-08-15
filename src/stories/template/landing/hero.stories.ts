import { Meta, StoryObj } from "@storybook/react";
import { Hero } from "@/components/template/landing";

const meta: Meta<typeof Hero> = {
    component: Hero,
    title: "template/landing/Hero",
};
export default meta;

export const Default: StoryObj<typeof Hero> = {};
