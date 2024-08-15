import { Meta, StoryObj } from "@storybook/react";
import { Contact } from "@/components/template/landing";

const meta: Meta<typeof Contact> = {
    component: Contact,
    title: "template/landing/Contact",
};
export default meta;

export const Default: StoryObj<typeof Contact> = {};
