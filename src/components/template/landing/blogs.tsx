import { BlogsHeader, BlogsActions, BlogsBody } from "@/components";

const Blogs = () => {
    return (
        <div className={"w-screen grid gap-14 bg-primary-700 py-16 px-5"}>
            <BlogsHeader />
            <BlogsBody />
            <BlogsActions />
        </div>
    );
};

export default Blogs;
