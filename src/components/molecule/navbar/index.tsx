"use client";
import { usePathname } from "next/navigation";
import { LinkLable, SearchBoxContainer } from "@/components";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className={"flex items-center gap-4"}>
            <LinkLable href="/" text={"Home"} active={pathname === "/"} />
            <LinkLable href="/" text={"Blogs"} active={pathname === "blogs"} />
            <div className={"ml-4"}>
                <SearchBoxContainer />
            </div>
        </div>
    );
};

export default Navbar;
