import { Meta, StoryObj } from "@storybook/react";
import { SkillCard } from "@/components/molecule";

const meta: Meta<typeof SkillCard> = {
    title: "molecule/SkillCard",
    component: SkillCard,
};
export default meta;

export const Default: StoryObj<typeof SkillCard> = {
    args: {
        icon: <i className={"fa-solid fa-home"} />,
        title: "Web Development",
        subTitle: "HTML.CSS.JS.REACT",
    },
};
