"use client";
import { usePathname } from "next/navigation";
import { LinkLable } from "@/components/atom";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <>
            <div className={"flex items-center gap-4 xl:flex-1 xl:ml-10"}>
                <LinkLable href="/" text={"Home"} active={pathname === "/"} />
                <LinkLable
                    href="/"
                    text={"Blogs"}
                    active={pathname === "blogs"}
                />
            </div>
        </>
    );
};

export default Navbar;
