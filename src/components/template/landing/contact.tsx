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
                "grid w-full scroll-mt-10 place-items-center gap-y-12 bg-primary-700 px-6 sm:p-12 xl:px-20"
            }
        >
            <ContactHeader />
            <ContactForm />
            <ContactFooter />
        </div>
    );
};

export default Contact;
