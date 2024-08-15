import { Meta, StoryObj } from "@storybook/react";
import { SectionTitle } from "@/components/molecule";

const meta: Meta<typeof SectionTitle> = {
    title: "molecule/SectionTitle",
    component: SectionTitle,
};
export default meta;

export const Default: StoryObj<typeof SectionTitle> = {
    args: {
        title: "About Me",
        mode: "default",
    },
};
export const Underline: StoryObj<typeof SectionTitle> = {
    args: {
        title: "Skills",
        mode: "underline",
    },
};
