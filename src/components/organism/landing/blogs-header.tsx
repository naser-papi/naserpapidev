import { SectionTitle } from "@/components/molecule";

const BlogsHeader = () => {
    return (
        <div className={"flex flex-col items-center gap-2 sm:gap-4"}>
            <SectionTitle title={"Blogs"} mode={"underline"} />
            <p
                className={
                    "text-center text-lg font-base text-primary-100 sm:text-2xl"
                }
            >
                My thoughts on technology and business, welcome to subscribe
            </p>
        </div>
    );
};

export default BlogsHeader;
