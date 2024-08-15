import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@/components/atom";

const meta: Meta = {
    parameters: {
        layout: "centered",
    },
    title: "Atom/Spinner",
    component: Spinner,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
    },
};
export default meta;
export const Default: StoryObj<typeof Spinner> = {
    args: {
        size: "medium",
        fillColor: "#ffeedd",
    },
};
