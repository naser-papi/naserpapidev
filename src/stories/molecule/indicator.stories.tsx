import { Meta, StoryObj } from "@storybook/react";
import { Indicator } from "@/components/molecule";

const meta: Meta<typeof Indicator> = {
    title: "molecule/Indicator",
    component: Indicator,
};
export default meta;

export const Default: StoryObj<typeof Indicator> = {
    args: {
        count: 4,
        text: "Programming Language",
    },
};
