import { Meta, StoryObj } from "@storybook/react";
import { AboutMe } from "@/components/template/landing";

const meta: Meta<typeof AboutMe> = {
    component: AboutMe,
    title: "template/landing/AboutMe",
};
export default meta;

export const Default: StoryObj<typeof AboutMe> = {};
