import {
    BlogsHeader,
    BlogsActions,
    BlogsBody,
} from "@/components/organism/landing";

const Blogs = () => {
    return (
        <div
            className={"w-screen grid gap-4 bg-primary-700 py-12 px-6 sm:p-12"}
        >
            <BlogsHeader />
            <BlogsBody />
            <BlogsActions />
        </div>
    );
};

export default Blogs;
