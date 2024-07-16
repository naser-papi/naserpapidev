import { Navbar, SimpleLogo } from "@/components";

const Header = () => {
    return (
        <header
            className={
                "flex items-center justify-between p-6 border-b-[1px] border-primary-600 w-full relative"
            }
        >
            <SimpleLogo bold={"<C/>"} title={"naser.papi"} />
            <Navbar />
        </header>
    );
};

export default Header;
