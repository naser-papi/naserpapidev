import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/organism/landing";

const meta: Meta<typeof Header> = {
    parameters: {
        layout: "top",
    },
    component: Header,
    title: "organism/landing/Header",
};
export default meta;

export const Default: StoryObj<typeof Header> = {};
