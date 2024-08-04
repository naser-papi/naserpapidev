import { Button, SectionTitle, TextBox } from "@/components";

const ContactForm = () => {
    return (
        <form className={"grid grid-cols-2 gap-y-14 gap-x-4"}>
            <SectionTitle
                title={"Send Me A Message"}
                className={"col-span-2"}
            />
            <TextBox
                label={"Your Name"}
                required
                placeholder={"Enter your name"}
                intent={"secondary"}
            />
            <TextBox
                label={"Your Email"}
                required
                placeholder={"Enter your email"}
                intent={"secondary"}
            />
            <TextBox
                label={"Your Message"}
                required
                placeholder={"Enter your needs"}
                intent={"secondary"}
                className={"col-span-2"}
            />
            <Button
                text={"Send Message"}
                icon={<i className="fa-regular fa-paper-plane" />}
                shape={"oval"}
                className={"col-span-2 justify-self-center"}
                intend={"primary"}
                size={"large"}
            />
        </form>
    );
};

export default ContactForm;
