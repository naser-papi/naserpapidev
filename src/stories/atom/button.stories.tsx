import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@/components/atom";
const meta: Meta = {
    parameters: {
        layout: "centered",
    },
    decorators: [
        (Story) => (
            <div style={{ width: "400px" }}>
                <Story />
            </div>
        ),
    ],
    title: "Atom/Button",
    component: Button,
    tags: ["autodoc"],
    argTypes: {
        size: {
            control: "radio",
            options: ["small", "medium", "large"],
        },
        intend: {
            control: "radio",
            options: ["default", "primary", "secondary"],
        },
        shape: {
            control: "radio",
            options: ["rect", "oval"],
        },
    },
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Default: Story = {
    args: {
        text: "Subscribe",
    },
};
export const WithLoading: Story = {
    args: {
        text: "Sample text",
        loading: true,
        size: "small",
    },
};
