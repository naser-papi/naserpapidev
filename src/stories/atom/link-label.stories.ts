import { Meta, StoryObj } from "@storybook/react";
import { LinkLable } from "@/components";
import LinkLabel from "@/components/atom/link-lable";

const meta: Meta<typeof LinkLable> = {
    parameters: {
        layout: "centered",
    },
    title: "atom/LinkLabel",
    component: LinkLabel,
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: "radio",
            options: ["large", "medium", "small"],
        },
        state: {
            control: "radio",
            options: ["active", "normal"],
        },
    },
};
export default meta;

export const DefaultLink: StoryObj<typeof LinkLable> = {
    args: {
        text: "test link",
        href: "https://atom.io/",
    },
};

export const DefaultLabel: StoryObj<typeof LinkLable> = {
    args: {
        text: "test label",
    },
};
