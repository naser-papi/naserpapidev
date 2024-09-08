import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import frameImg from "assets/images/project-frame.png";

export interface ProjectCardProps {
    image1: StaticImageData;
    image2: StaticImageData;
    title: string;
    link: string;
    description: string;
}

const ProjectCard = ({
    image1,
    image2,
    title,
    link,
    description,
}: ProjectCardProps) => {
    return (
        <div className={"py-4 text-center"}>
            <Link href={link} target={"_blank"}>
                <div
                    className={
                        "relative h-[200px] w-[300px] sm:h-[400px] sm:w-[600px] xl:h-[600px] xl:w-[800px]"
                    }
                >
                    <div
                        className={
                            "absolute left-[140px] top-[30px] z-10 text-secondary-600 sm:left-[290px] sm:top-[65px] sm:text-2xl xl:left-[360px] xl:top-[100px] xl:text-4xl"
                        }
                    >
                        <i className="fa-sharp-duotone fa-solid fa-bullseye-pointer" />
                    </div>
                    <h2
                        className={
                            "absolute left-[160px] top-[25px] z-10 border-b-2 border-primary-100 font-ibm text-secondary-600 sm:left-[320px] sm:top-[60px] sm:text-2xl xl:left-[400px] xl:top-[90px] xl:text-4xl"
                        }
                    >
                        {title}
                    </h2>
                    <Image
                        src={image1}
                        alt={"image"}
                        className={
                            "absolute left-[25px] top-[26px] z-10 h-[130px] w-[100px] object-cover sm:left-[50px] sm:top-[52px] sm:h-[260px] sm:w-[200px] xl:left-[25px] xl:top-[80px] xl:h-[385px] xl:w-[295px]"
                        }
                    />
                    <Image
                        src={image2}
                        alt={"image"}
                        className={
                            "absolute left-[140px] top-[60px] z-10 h-[82px] w-[138px] object-cover sm:left-[280px] sm:top-[120px] sm:h-[164px] sm:w-[272px] xl:left-[370px] xl:top-[180px] xl:h-[244px] xl:w-[415px]"
                        }
                    />
                    <Image
                        src={frameImg}
                        alt={"frame"}
                        fill
                        className={"z-0 object-cover"}
                    />
                </div>
            </Link>
            <br />
            <p className={"sm:text-2xl xl:text-3xl"}>{description}</p>
        </div>
    );
};

export default ProjectCard;
