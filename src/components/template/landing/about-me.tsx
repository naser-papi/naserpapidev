import Image from "next/image";
import { SectionTitle } from "@/components/molecule";
import { Summery } from "@/components/organism/landing";
import aboutImg from "assets/images/about-me.png";
import aboutMeBkImg from "assets/images/about-me-bk.png";

const AboutMe = () => {
    return (
        <div className={"relative w-screen py-5"}>
            <SectionTitle title={"About Me"} />
            <Image
                src={aboutMeBkImg}
                alt={"naser papi background image"}
                fill
                className={"object-cover x-0"}
            />
            <div
                className={
                    "relative w-full grid place-items-center gap-y-4 z-10"
                }
            >
                <SectionTitle title="About Me" />
                <Summery />
                <Image src={aboutImg} alt={"about naser papi"} />
            </div>
        </div>
    );
};

export default AboutMe;
