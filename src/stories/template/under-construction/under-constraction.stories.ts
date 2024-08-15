import { Meta, StoryObj } from "@storybook/react";
import UnderConstructionTemplate from "@/components/template/under-construction";
const meta: Meta<typeof UnderConstructionTemplate> = {
    parameters: {
        layout: "centered",
    },
    component: UnderConstructionTemplate,
    title: "template/construction/UnderConstraction",
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
