import { Meta, StoryObj } from "@storybook/react";
import { TextBox } from "@/components";

const meta: Meta<typeof TextBox> = {
    title: "Atom/TextBox",
    component: TextBox,
    tags: ["autodoc"],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: "Email",
        intent: "primary",
    },
};
