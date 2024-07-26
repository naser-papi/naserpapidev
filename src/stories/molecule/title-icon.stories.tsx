import { Meta, StoryObj } from "@storybook/react";
import { TitleIcon } from "@/components";

const meta: Meta<typeof TitleIcon> = {
    parameters: {
        layout: "centered",
    },
    component: TitleIcon,
    title: "molecule/TitleIcon",
};

export default meta;

export const Default: StoryObj<typeof TitleIcon> = {
    args: {
        title: "Let's Talk more",
        icon: <i className="fa-brands fa-rocketchat" />,
    },
};
