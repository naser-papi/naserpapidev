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
                "w-screen grid gap-y-4 bg-primary-700 py-12 px-6 sm:p-12 xl:px-20 scroll-mt-10"
            }
        >
            <BlogsHeader />
            <BlogsBody />
            <BlogsActions />
        </div>
    );
};

export default Blogs;
