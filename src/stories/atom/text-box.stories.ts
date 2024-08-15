import { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "@/components/atom";

const meta: Meta<typeof TextBox> = {
    title: "Atom/TextBox",
    component: TextBox,
    tags: ["autodoc"],
};
export default meta;

export const Default: StoryObj<typeof TextBox> = {
    args: {
        label: "Email",
        intent: "primary",
    },
};
export const Secondary: StoryObj<typeof TextBox> = {
    args: {
        label: "Email Address",
        intent: "secondary",
        placeholder: "Enter your email address",
        required: true,
    },
};
