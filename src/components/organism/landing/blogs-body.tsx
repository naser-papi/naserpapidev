import Image from "next/image";
import bbImg from "assets/images/blogs-body.png";
import { BlogLineInfo, LinkButton, Tag } from "@/components/atom";

const BlogsBody = () => {
    return (
        <div
            className={
                "grid place-items-center gap-x-6 gap-y-8 py-6 my-6 border-y-[1px] border-primary-100 xl:grid-cols-[auto_1fr]"
            }
        >
            <Image
                src={bbImg}
                alt={"blogs"}
                className={
                    "w-[320px] h-[320px] object-cover self-center sm:w-[420px] sm:h-[420px]"
                }
            />
            <div className={"flex flex-col gap-8 items-start"}>
                <h2
                    className={
                        "text-secondary-600 text-3xl font-semibold sm:text-4xl"
                    }
                >
                    What does it take to become a web developer?
                </h2>
                <p className={"text-base text-primary-100 sm:text-2xl"}>
                    Web development, also known as website development,
                    encompasses a variety of tasks and processes involved in
                    creating websites for the internet…
                </p>
                <LinkButton text={"Read More"} />
                <Tag text={"Web Developer"} intend={"secondary"} />
                <BlogLineInfo
                    writer={"Naser"}
                    date={"10-7-2024"}
                    readTime={5}
                />
            </div>
        </div>
    );
};

export default BlogsBody;
