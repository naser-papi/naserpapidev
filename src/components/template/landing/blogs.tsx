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
                "grid w-full scroll-mt-10 place-items-center gap-y-4 bg-primary-700 px-6 py-[200px] sm:px-12 xl:px-20 [&>.blogs-action]:max-w-[1280px] [&>.blogs-body]:max-w-[1280px]"
            }
        >
            <BlogsHeader />
            <BlogsBody />
            <BlogsActions />
        </div>
    );
};

export default Blogs;
