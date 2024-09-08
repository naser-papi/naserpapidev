import { Meta, StoryObj } from "@storybook/react";
import { TimeSkillCard } from "@/components/molecule";

const meta: Meta<typeof TimeSkillCard> = {
    title: "molecule/TimeSkillCard",
    component: TimeSkillCard,
};
export default meta;

export const Default: StoryObj<typeof TimeSkillCard> = {
    args: {
        start: "2020",
        end: "2024",
        title: "Senior JavaScript Developer",
        skills: [
            {
                icon: "js",
                title: "JavaScript",
                bgColor: "#FAFF00",
            },
            {
                icon: "ts",
                title: "TypeScript",
                bgColor: "#D2DBE0",
            },
            {
                icon: "react",
                title: "React",
                bgColor: "#CAE7EE",
            },
            {
                icon: "next",
                title: "NextJs",
                bgColor: "#CBCFCE",
            },
        ],
    },
};
