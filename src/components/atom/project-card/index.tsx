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
        <div className={"text-center py-4"}>
            <Link href={link} target={"_blank"}>
                <div
                    className={
                        "relative w-[300px] h-[200px] sm:w-[600px] sm:h-[400px] xl:w-[800px] xl:h-[600px]"
                    }
                >
                    <div
                        className={
                            "absolute z-10 text-secondary-600 top-[30px] left-[140px] sm:top-[65px] sm:left-[290px] sm:text-2xl xl:text-4xl xl:top-[100px] xl:left-[360px]"
                        }
                    >
                        <i className="fa-sharp-duotone fa-solid fa-bullseye-pointer" />
                    </div>
                    <h2
                        className={
                            "absolute z-10 text-secondary-600 top-[25px] left-[160px] border-b-2 border-primary-100 font-ibm sm:top-[60px] sm:left-[320px] sm:text-2xl xl:text-5xl xl:top-[90px] xl:left-[400px]"
                        }
                    >
                        {title}
                    </h2>
                    <Image
                        src={image1}
                        alt={"image"}
                        className={
                            "absolute left-[25px] top-[26px] z-10 object-cover w-[100px] h-[130px] sm:left-[50px] sm:top-[52px] sm:w-[200px] sm:h-[260px] xl:left-[25px] xl:top-[80px] xl:w-[295px] xl:h-[385px]"
                        }
                    />
                    <Image
                        src={image2}
                        alt={"image"}
                        className={
                            "absolute top-[60px] left-[140px] z-10 object-cover w-[138px] h-[82px] sm:top-[120px] sm:left-[280px] sm:w-[272px] sm:h-[164px] xl:top-[180px] xl:left-[370px] xl:w-[415px] xl:h-[244px]"
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
            <p className={"sm:text-2xl xl:text-5xl"}>{description}</p>
        </div>
    );
};

export default ProjectCard;
