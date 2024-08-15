import { Meta, StoryObj } from "@storybook/react";
import { SearchBoxContainer } from "@/components/molecule";

const meta: Meta<typeof SearchBoxContainer> = {
    parameters: {
        layout: "centered",
    },
    component: SearchBoxContainer,
    title: "molecule/SearchBox",
};
export default meta;

export const Default: StoryObj<typeof SearchBoxContainer> = {};
