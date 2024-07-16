import { Meta, StoryObj } from "@storybook/react";
import { SearchBox } from "@/components";

const meta: Meta<typeof SearchBox> = {
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    title: "atom/SearchBox",
    component: SearchBox,
};
export default meta;

export const Default: StoryObj<typeof SearchBox> = {};
