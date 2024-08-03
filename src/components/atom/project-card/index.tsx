import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import frameImg from "assets/images/project-frame.png";

export interface ProjectCardProps {
    image1: StaticImageData;
    image2: StaticImageData;
    title: string;
    link: string;
}

const ProjectCard = ({ image1, image2, title, link }: ProjectCardProps) => {
    return (
        <Link href={link} target={"_blank"}>
            <div className={"relative w-[300px] h-[200px]"}>
                <div
                    className={
                        "absolute z-10 text-secondary-600 top-[30px] left-[140px]"
                    }
                >
                    <i className="fa-sharp-duotone fa-solid fa-bullseye-pointer" />
                </div>
                <h2
                    className={
                        "absolute z-10 text-secondary-600 top-[25px] left-[160px] border-b-2 border-primary-100 font-ibm"
                    }
                >
                    {title}
                </h2>
                <Image
                    src={image1}
                    alt={"image"}
                    className={
                        "absolute left-[25px] top-[26px] z-10 object-cover w-[100px] h-[130px]"
                    }
                />
                <Image
                    src={image2}
                    alt={"image"}
                    className={
                        "absolute top-[60px] left-[140px] z-10 object-cover w-[138px] h-[82px]"
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
    );
};

export default ProjectCard;
