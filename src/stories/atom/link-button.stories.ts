import { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "@/components";

const meta: Meta<typeof LinkButton> = {
    component: LinkButton,
    title: "atom/LinkButton",
};

export default meta;

export const Default: StoryObj<typeof LinkButton> = {
    args: {
        text: "Read More",
    },
};
