import { CardCarousel } from "@/components/molecule";
import { ProjectCard } from "@/components/atom";
import wodioDesk from "assets/images/projects/wodio-d.png";
import wodioMob from "assets/images/projects/wodio-m.png";
import optimyarDesk from "assets/images/projects/optimyar-d.png";
import optimyarMob from "assets/images/projects/optimyar-m.png";
import ariyadisDesk from "assets/images/projects/ariyadis-d.png";
import ariyadisMob from "assets/images/projects/ariyadis-m.png";
import niocDesk from "assets/images/projects/nioc-d.png";
import niocMob from "assets/images/sample-prj-1.png";
import kwpaDesk from "assets/images/projects/kwpa-d.png";
import kwpaMob from "assets/images/projects/kwpa-m.png";

const WorksCarousel = () => {
    return (
        <CardCarousel>
            <ProjectCard
                image1={wodioMob}
                image2={wodioDesk}
                title={"Wodio AI app"}
                link={"https://wodio.ai/"}
                description={"sales marketing based-on AI"}
            />
            <ProjectCard
                image1={optimyarMob}
                image2={optimyarDesk}
                title={"Optimyar LMS app"}
                link={"https://app.optimyar.com"}
                description={"sales marketing based-on AI"}
            />
            <ProjectCard
                image1={ariyadisMob}
                image2={ariyadisDesk}
                title={"Kookaat IS app"}
                link={"https://www.ariyadis.com/#platform"}
                description={"sales marketing based-on AI"}
            />
            <ProjectCard
                image1={niocMob}
                image2={niocDesk}
                title={"NIOC TDMS app"}
                link={"/projects/tdms-winapp"}
                description={"sales marketing based-on AI"}
            />
            <ProjectCard
                image1={kwpaMob}
                image2={kwpaDesk}
                title={"KWPA Finance App"}
                link={"/projects/kwpa-isapp"}
                description={"sales marketing based-on AI"}
            />
        </CardCarousel>
    );
};

export default WorksCarousel;
