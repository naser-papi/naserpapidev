"use client";
import { usePathname } from "next/navigation";
import { LinkLable } from "@/components/atom";
import SearchBoxContainer from "../search-box-container";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={"flex items-center gap-4"}>
            <LinkLable href="/" text={"Home"} active={pathname === "/"} />
            <LinkLable href="/" text={"Blogs"} active={pathname === "blogs"} />
        </div>
    );
};

export default Navbar;
