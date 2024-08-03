import { Button, SectionTitle } from "@/components";

const ContactForm = () => {
    return (
        <form className={"grid grid-cols-2 gap-14"}>
            <SectionTitle
                title={"Send Me A Message"}
                extraClassName={"col-span-2"}
            />
            <Button
                text={"Send Message"}
                icon={<i className="fa-sharp fa-light fa-paper-plane" />}
            />
        </form>
    );
};

export default ContactForm;
