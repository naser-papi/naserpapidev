import { Meta, StoryObj } from "@storybook/react";
import { Socials } from "@/components";

const meta: Meta<typeof Socials> = {
    parameters: {
        layout: "centered",
    },
    title: "Molecule/Socials",
    component: Socials,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
