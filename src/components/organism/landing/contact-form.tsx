import { Button, TextBox } from "@/components/atom";
import { SectionTitle } from "@/components/molecule";

const ContactForm = () => {
    return (
        <form
            className={
                "w-full grid grid-cols-2 gap-y-12 gap-x-4 max-w-[1280px]"
            }
        >
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
                className={"col-span-2 justify-self-center xl:w-full"}
                intend={"primary"}
                size={"large"}
            />
        </form>
    );
};

export default ContactForm;
