import { Meta, StoryObj } from "@storybook/react";
import { TopSkills } from "@/components/organism/landing";

const meta: Meta<typeof TopSkills> = {
    parameters: {
        layout: "centered",
    },
    title: "organism/landing/TopSkills",
    component: TopSkills,
};

export default meta;

export const Default: StoryObj<typeof TopSkills> = {};
