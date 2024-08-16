import { BaseHTMLAttributes } from "react";
import { formatBlogDateString } from "@/helpers";

interface BlogLineInfoProps extends BaseHTMLAttributes<HTMLDivElement> {
    writer: string;
    date: string;
    readTime: number;
}

const BlogLineInfo = ({ writer, date, readTime }: BlogLineInfoProps) => {
    return (
        <div
            className={
                "flex items-center gap-2 text-base font-normal text-primary-500 [&>strong]:text-primary-50 [&>strong]:font-normal sm:text-2xl"
            }
        >
            <strong>Text</strong>
            <span>{writer}</span>
            <strong>Date</strong>
            <span>{formatBlogDateString(date)}</span>
            <strong>Read</strong>
            <span>{readTime} Min</span>
        </div>
    );
};

export default BlogLineInfo;
