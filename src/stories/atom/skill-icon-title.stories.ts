import { Meta, StoryObj } from "@storybook/react";
import { SkillIconTitle } from "@/components/atom";

const meta: Meta<typeof SkillIconTitle> = {
    tags: ["autodocs"],
    title: "atom/SkillIconTitle",
    component: SkillIconTitle,
};
export default meta;

export const Default: StoryObj<typeof SkillIconTitle> = {
    args: {
        icon: "html",
        bgColor: "#f00",
        title: "HTML",
    },
};
