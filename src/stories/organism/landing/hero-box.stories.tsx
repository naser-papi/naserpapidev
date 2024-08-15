import { Meta, StoryObj } from "@storybook/react";
import { HeroBox } from "@/components/organism/landing";

const meta: Meta<typeof HeroBox> = {
    parameters: {
        layout: "centered",
    },
    title: "organism/landing/HeroBox",
    component: HeroBox,
};
export default meta;
export const Default: StoryObj<typeof HeroBox> = {};
