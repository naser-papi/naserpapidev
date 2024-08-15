import {
    ContactForm,
    ContactHeader,
    ContactFooter,
} from "@/components/organism/landing";

const Contact = () => {
    return (
        <div className={"grid w-screen px-6 bg-primary-700 gap-y-4"}>
            <ContactHeader />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;
