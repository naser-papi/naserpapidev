import {
    ContactForm,
    ContactHeader,
    ContactFooter,
} from "@/components/organism/landing";

const Contact = () => {
    return (
        <div
            id={"contact"}
            className={
                "w-full grid place-items-center px-6 bg-primary-700 pt-12 gap-y-12 sm:p-12 xl:px-20 scroll-mt-10"
            }
        >
            <ContactHeader />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;
