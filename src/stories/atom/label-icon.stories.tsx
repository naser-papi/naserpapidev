import { Meta, StoryObj } from "@storybook/react";
import { LabelIcon } from "@/components/atom";

const meta: Meta<typeof LabelIcon> = {
    parameters: {
        layout: "centered",
    },
    title: "Atom/LabelIcon",
    component: LabelIcon,
};

export default meta;
export const Default: StoryObj<typeof LabelIcon> = {
    args: {
        icon: <i className={"fa-solid fa-envelope"} />,
        label: "naserpapi@hotmail.com",
    },
};
