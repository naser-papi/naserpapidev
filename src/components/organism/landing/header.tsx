import { Navbar, SimpleLogo } from "@/components/molecule";
import HeaderSocial from "./header-social";

const Header = () => {
    return (
        <header
            className={
                "flex items-center justify-between px-6 py-3 border-b-[1px] border-primary-600 w-full sticky top-0 z-50 shadow-md bg-primary-700 lg:px-12 xl:px-20"
            }
        >
            <SimpleLogo bold={"<C/>"} title={"naser.papi"} />
            <Navbar />
            <HeaderSocial />
        </header>
    );
};

export default Header;
