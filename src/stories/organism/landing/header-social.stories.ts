import { Meta, StoryObj } from "@storybook/react";
import { HeaderSocial } from "@/components/organism/landing";

const meta: Meta<typeof HeaderSocial> = {
    parameters: {
        layout: "top",
    },
    component: HeaderSocial,
    title: "organism/landing/HeaderSocial",
};
export default meta;

export const Default: StoryObj<typeof HeaderSocial> = {};
