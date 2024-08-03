import { SectionTitle } from "@/components";

const WorksHeader = () => {
    return (
        <div className={"flex flex-col items-center gap-2"}>
            <SectionTitle title={"Works"} mode={"underline"} />
            <p className={"text-center text-lg font-base text-primary-100"}>
                I had the pleasure of working with these awesome projects
            </p>
        </div>
    );
};

export default WorksHeader;
