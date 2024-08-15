import { Meta, StoryObj } from "@storybook/react";
import { Intro } from "@/components/organism/landing";

const meta: Meta<typeof Intro> = {
    parameters: {
        layout: "centered",
    },
    title: "organism/landing/Intro",
    component: Intro,
};

export default meta;

export const Default: StoryObj<typeof Intro> = {};
