import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components";
import sampleImg from "../assets/images/profile.png";

const meta: Meta<typeof Avatar> = {
    parameters: {
        layout: "centered",
    },
    title: "Atom/Avatar",
    component: Avatar,
    argTypes: {
        shape: {
            control: "select",
            options: ["circle", "square"],
        },
    },
};
export default meta;
export const Default: StoryObj<typeof Avatar> = {
    args: {
        src: sampleImg,
        alt: "sample",
        border: true,
        shape: "circle",
    },
};
