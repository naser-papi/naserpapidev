import { WorksHeader, WorksCarousel } from "@/components/organism/landing";

const Works = () => {
    return (
        <div
            id={"works"}
            className={
                "relative w-screen bg-primary-900 grid place-items-center gap-y-12 px-6 py-12 sm:p-12 xl:px-20 scroll-mt-[200px]"
            }
        >
            <WorksHeader />
            <WorksCarousel />
        </div>
    );
};

export default Works;
