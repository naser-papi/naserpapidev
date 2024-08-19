import { WorksHeader, WorksCarousel } from "@/components/organism/landing";

const Works = () => {
    return (
        <div
            id={"works"}
            className={
                "relative w-full bg-primary-900 grid place-items-center gap-y-12 px-6 py-12 sm:p-12 xl:px-20 scroll-mt-[200px] 2xl:px-32 2xl:py-32 [&_.card-carousel]:max-w-[1280px] 2xl:-scroll-mt-10"
            }
        >
            <WorksHeader />
            <WorksCarousel />
        </div>
    );
};

export default Works;
