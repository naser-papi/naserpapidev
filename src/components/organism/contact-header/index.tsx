import { SectionTitle } from "@/components";

const ContactHeader = () => {
    return (
        <div className={"flex flex-col items-center gap-2"}>
            <SectionTitle title={"Contact"} mode={"underline"} />
            <p className={"text-center text-lg font-base text-primary-100"}>
                I’m currently available for freelance work
            </p>
        </div>
    );
};

export default ContactHeader;
