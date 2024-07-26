import { Meta, StoryObj } from "@storybook/react";
import { HeroBox } from "@/components";

const meta: Meta<typeof HeroBox> = {
    parameters: {
        layout: "centered",
    },
    title: "organism/HeroBox",
    component: HeroBox,
};
export default meta;
export const Default: StoryObj<typeof HeroBox> = {};
