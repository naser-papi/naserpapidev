import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components";

const meta: Meta<typeof Header> = {
    parameters: {
        layout: "top",
    },
    component: Header,
    title: "organism/Header",
};
export default meta;

export const Default: StoryObj<typeof Header> = {};
