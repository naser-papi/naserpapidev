import Image from "next/image";
import { SectionTitle } from "@/components/molecule";
import { Summery } from "@/components/organism/landing";
import aboutImg from "assets/images/about-me.png";
import aboutMeBkImg from "assets/images/about-me-bk.png";

const AboutMe = () => {
    return (
        <div
            className={
                "relative w-full py-12 px-6 sm:p-12 scroll-mt-10 lg:px-12 xl:px-20 2xl:py-32 2xl:px-32"
            }
            id="about-me"
        >
            <Image
                src={aboutMeBkImg}
                alt={"naser papi background image"}
                fill
                className={"object-cover px-0"}
            />
            <div
                className={
                    "relative w-full grid place-items-center gap-x-6 gap-y-4 z-10 sm:gap-12 xl:grid-cols-[1fr_auto] xl:[&>.section-title]:col-span-2 2xl:place-items-start 2xl:[&>.section-title]:col-span-1  2xl:[&>.img]:row-span-2 2xl:[&>.img]:row-start-1 2xl:[&>.img]:col-start-2 2xl:[&>.img]:place-self-end max-w-[1280px] mx-auto"
                }
            >
                <SectionTitle title="About Me" />
                <Summery />
                <Image
                    src={aboutImg}
                    alt={"about naser papi"}
                    className={
                        "img w-[320px] sm:w-[420px] xl:w-[320px] 2xl:w-[400px]"
                    }
                />
            </div>
        </div>
    );
};

export default AboutMe;
