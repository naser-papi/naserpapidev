import { Meta, StoryObj } from "@storybook/react";
import { IconBox } from "@/components";

const meta: Meta<typeof IconBox> = {
    parameters: {
        layout: "centered",
    },
    title: "atom/IconBox",
    component: IconBox,
};
export default meta;

export const Default: StoryObj<typeof IconBox> = {
    args: {
        icon: <i className="fa-brands fa-rocketchat" />,
    },
};
