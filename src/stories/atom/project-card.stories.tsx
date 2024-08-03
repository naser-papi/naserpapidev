import { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "@/components";
import img1 from "assets/images/sample-prj-1.png";
import img2 from "assets/images/sample-prj-2.png";

const meta: Meta<typeof ProjectCard> = {
    title: "atom/ProjectCard",
    component: ProjectCard,
};

export default meta;

export const Default: StoryObj<typeof ProjectCard> = {
    args: {
        image1: img1,
        image2: img2,
        link: "/",
        title: "View website",
    },
};
