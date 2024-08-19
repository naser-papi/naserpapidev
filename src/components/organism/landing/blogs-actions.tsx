import { Button } from "@/components/atom";

const BlogsAction = () => {
    return (
        <div className={"blogs-action flex items-center w-full gap-4"}>
            <Button
                text={"View More"}
                shape={"oval"}
                size={"large"}
                intend={"primary"}
                style={{ flex: 1 }}
            />
            <Button
                text={"Subscribe"}
                shape={"oval"}
                size={"large"}
                intend={"secondary"}
                style={{ flex: 1 }}
            />
        </div>
    );
};

export default BlogsAction;
