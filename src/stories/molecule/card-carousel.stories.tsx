import { Meta, StoryObj } from "@storybook/react";
import { CardCarousel, ProjectCard } from "@/components";
import img1 from "assets/images/sample-prj-1.png";
import img2 from "assets/images/sample-prj-2.png";

const meta: Meta<typeof CardCarousel> = {
    title: "molecule/CardCarousel",
    component: CardCarousel,
};
export default meta;

export const Default: StoryObj<typeof CardCarousel> = {
    args: {
        children: [
            <ProjectCard image1={img1} image2={img2} title={"Project Test"} />,
            <ProjectCard image1={img1} image2={img2} title={"Project New"} />,
            <ProjectCard image1={img1} image2={img2} title={"Project old"} />,
        ],
    },
};
