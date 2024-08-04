import { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "@/components";

const meta: Meta<typeof ContactForm> = {
    component: ContactForm,
    title: "organism/ContactForm",
};
export default meta;

export const Default: StoryObj<typeof ContactForm> = {};
