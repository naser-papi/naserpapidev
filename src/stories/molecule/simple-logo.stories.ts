import { Meta, StoryObj } from "@storybook/react";
import { SimpleLogo } from "@/components";

const meta: Meta<typeof SimpleLogo> = {
    parameters: {
        layout: "centered",
    },
    title: "molecule/SimpleLogo",
    component: SimpleLogo,
};
export default meta;

export const Default: StoryObj<typeof SimpleLogo> = {
    args: {
        bold: "<C/>",
        title: "naser papi",
    },
};
