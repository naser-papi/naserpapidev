import { SectionsNav } from "@/constants";
import { NarrowNavIcon } from "@/components/molecule";

const SectionNav = () => {
    return (
        <nav
            className={
                "hidden sm:block fixed top-[100px] left-2 bg-primary-700 bg-opacity-90 z-50 rounded-full"
            }
        >
            <NarrowNavIcon items={SectionsNav} />
        </nav>
    );
};

export default SectionNav;
