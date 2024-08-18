import { SectionTitle } from "@/components/molecule";

const WorksHeader = () => {
    return (
        <div className={"flex flex-col max-w-5xl items-center gap-2 sm:gap-4"}>
            <SectionTitle title={"Works"} mode={"underline"} />
            <p
                className={
                    "text-center text-lg font-base text-primary-100 sm:text-2xl"
                }
            >
                A Comprehensive Showcase of the Diverse Projects I've
                Engineered, Demonstrating My Commitment to Excellence and
                Innovation in Every Endeavor. Each project is a testament to my
                ability to blend creativity with technical precision, delivering
                solutions that not only meet but exceed expectations, pushing
                the boundaries of what's possible.
            </p>
        </div>
    );
};

export default WorksHeader;
