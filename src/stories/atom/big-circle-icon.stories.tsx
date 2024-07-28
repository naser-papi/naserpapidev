import { Meta, StoryObj } from "@storybook/react";
import { BigCircleIcon } from "@/components";

const meta: Meta<typeof BigCircleIcon> = {
    title: "Atom/BigCircleIcon",
    component: BigCircleIcon,
};

export default meta;
export const Default: StoryObj<typeof BigCircleIcon> = {
    args: {
        icon: <i className="fa-brands fa-html5" />,
        title: "HTML",
        color: "#f00",
    },
};
