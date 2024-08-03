import WorksHeader from "@/components/organism/works-header";
import { WorksCarousel } from "@/components";

const Works = () => {
    return (
        <div
            className={
                "relative w-screen bg-primary-900 grid place-items-center gap-y-16 px-6 py-10"
            }
        >
            <WorksHeader />
            <WorksCarousel />
        </div>
    );
};

export default Works;
