import { Meta, StoryObj } from "@storybook/react";
import { ContactHeader } from "@/components/organism/landing";

const meta: Meta<typeof ContactHeader> = {
    component: ContactHeader,
    title: "organism/landing/ContactHeader",
};
export default meta;

export const Default: StoryObj<typeof ContactHeader> = {};
