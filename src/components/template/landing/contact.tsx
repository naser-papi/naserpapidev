import {
    ContactForm,
    ContactHeader,
    ContactFooter,
} from "@/components/organism/landing";

const Contact = () => {
    return (
        <div
            className={
                "grid w-screen px-6 bg-primary-700 pt-12 gap-y-12 sm:p-12"
            }
        >
            <ContactHeader />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;
