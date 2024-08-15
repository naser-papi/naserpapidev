"use client";
import { SearchBox } from "@/components/atom";
import { useState } from "react";

const SearchBoxContainer = () => {
    const [modal, setModal] = useState(false);
    return (
        <div className={"flex text-primary-100"}>
            <div className={"hidden sm:block"}>
                <SearchBox />
            </div>
            <div className={"p-2 cursor-pointer sm:hidden"}>
                <i
                    className="fa-solid fa-magnifying-glass"
                    onClick={() => setModal((perv) => !perv)}
                />
                <div
                    className={`${modal ? "block" : "hidden"} absolute right-0 top-0 drop-shadow-2xl`}
                >
                    <SearchBox />
                </div>
            </div>
        </div>
    );
};

export default SearchBoxContainer;
