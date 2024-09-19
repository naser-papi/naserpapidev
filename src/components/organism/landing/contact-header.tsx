import { SectionTitle } from "@/components/molecule";

const ContactHeader = () => {
    return (
        <div className={"flex flex-col items-center gap-2"}>
            <SectionTitle title={"Contact"} mode={"underline"} />
            <p
                className={
                    "font-base text-center text-lg text-primary-100 sm:text-2xl"
                }
            >
                I’m currently available for full time work just high-tech and
                international companies.
            </p>
        </div>
    );
};

export default ContactHeader;
