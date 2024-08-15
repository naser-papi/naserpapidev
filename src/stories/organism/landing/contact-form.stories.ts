import { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "@/components/organism/landing";

const meta: Meta<typeof ContactForm> = {
    component: ContactForm,
    title: "organism/landing/ContactForm",
};
export default meta;

export const Default: StoryObj<typeof ContactForm> = {};
