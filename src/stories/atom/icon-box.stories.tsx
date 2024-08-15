import { Meta, StoryObj } from "@storybook/react";
import { IconBox } from "@/components/atom";

const meta: Meta<typeof IconBox> = {
    parameters: {
        layout: "centered",
    },
    title: "atom/IconBox",
    component: IconBox,
};
export default meta;

export const Primary: StoryObj<typeof IconBox> = {
    args: {
        intend: "primary",
        icon: <i className="fa-brands fa-rocketchat" />,
    },
};
export const Secondary: StoryObj<typeof IconBox> = {
    args: {
        intend: "secondary",
        icon: <i className="fa-brands fa-linkedin-in" />,
    },
};
