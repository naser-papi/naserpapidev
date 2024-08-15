import { Meta, StoryObj } from "@storybook/react";
import { SkillCards } from "@/components/organism/landing";

const meta: Meta<typeof SkillCards> = {
    component: SkillCards,
    title: "organism/landing/SkillCards",
};
export default meta;

export const Default: StoryObj<typeof SkillCards> = {};
