import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@/components";

const meta: Meta<typeof Navbar> = {
    parameters: {
        layout: "centered",
    },
    component: Navbar,
    title: "molecule/Navbar",
};
export default meta;

export const Default: StoryObj<typeof Navbar> = {};
