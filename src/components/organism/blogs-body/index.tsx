import Image from "next/image";
import bbImg from "assets/images/blogs-body.png";
import { BlogLineInfo, LinkButton, Tag } from "@/components";

const BlogsBody = () => {
    return (
        <div
            className={
                "flex flex-col items-start gap-8 py-6 px-4 border-y-[1px] border-primary-100"
            }
        >
            <Image
                src={bbImg}
                alt={"blogs"}
                className={"w-[120px] h-[120px] object-cover self-center"}
            />
            <h2 className={"text-secondary-600 text-3xl font-semibold"}>
                What does it take to become a web developer?
            </h2>
            <p className={"text-base text-primary-100"}>
                Web development, also known as website development, encompasses
                a variety of tasks and processes involved in creating websites
                for the internet…
            </p>
            <LinkButton text={"Read More"} />
            <Tag text={"Web Developer"} intend={"secondary"} />
            <BlogLineInfo writer={"Naser"} date={"10-7-2024"} readTime={5} />
        </div>
    );
};

export default BlogsBody;
