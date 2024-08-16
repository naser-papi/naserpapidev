import { WorksHeader, WorksCarousel } from "@/components/organism/landing";

const Works = () => {
    return (
        <div
            className={
                "relative w-screen bg-primary-900 grid place-items-center gap-y-12 px-6 py-12 sm:p-12"
            }
        >
            <WorksHeader />
            <WorksCarousel />
        </div>
    );
};

export default Works;
