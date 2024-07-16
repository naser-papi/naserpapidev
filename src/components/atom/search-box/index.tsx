"use client";
const SearchBox = () => {
    return (
        <div className="flex items-center bg-primary-100 text-primary-900 py-2 px-4 rounded-full text-base font-semibold">
            <input className={"border-0 bg-transparent flex-1 outline-none"} />
            <i className="fa-regular fa-magnifying-glass" />
        </div>
    );
};

export default SearchBox;
