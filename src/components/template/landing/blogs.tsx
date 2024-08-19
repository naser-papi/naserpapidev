import {
    BlogsHeader,
    BlogsActions,
    BlogsBody,
} from "@/components/organism/landing";

const Blogs = () => {
    return (
        <div
            id={"blogs"}
            className={
                "w-full grid place-items-center gap-y-4 bg-primary-700 py-12 px-6 sm:p-12 xl:px-20 scroll-mt-10 [&>.blogs-body]:max-w-[1280px] [&>.blogs-action]:max-w-[1280px]"
            }
        >
            <BlogsHeader />
            <BlogsBody />
            <BlogsActions />
        </div>
    );
};

export default Blogs;
