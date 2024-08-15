import { Meta, StoryObj } from "@storybook/react";
import { ContentFrame } from "@/components/atom";

const meta: Meta<typeof ContentFrame> = {
    parameters: {
        layout: "centered",
    },
    title: "atom/ContentFrame",
    component: ContentFrame,
};
export default meta;

export const Default: StoryObj<typeof ContentFrame> = {
    args: {
        children: (
            <div className={"flex flex-col h-full w-full text-white p-10"}>
                <p>test</p>
            </div>
        ),
    },
};
