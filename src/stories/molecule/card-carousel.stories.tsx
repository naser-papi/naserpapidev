import { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "@/components/atom";
import { CardCarousel } from "@/components/molecule";
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
            <ProjectCard
                link={"#"}
                image1={img1}
                image2={img2}
                title={"Project Test"}
            />,
            <ProjectCard
                link={"#"}
                image1={img1}
                image2={img2}
                title={"Project New"}
            />,
            <ProjectCard
                link={"#"}
                image1={img1}
                image2={img2}
                title={"Project old"}
            />,
        ],
    },
};
