import { IconBox, LinkLable } from "@/components/atom";

const ContactFooter = () => {
    return (
        <div
            className={
                "grid grid-cols-2 gap-4 border-t-primary-400 py-5 text-primary-200"
            }
        >
            <div
                className={"flex items-center gap-6 justify-center col-span-2"}
            >
                <IconBox
                    icon={<i className="fa-brands fa-linkedin-in" />}
                    intend={"secondary"}
                />
                <IconBox
                    icon={<i className="fa-brands fa-github" />}
                    intend={"secondary"}
                />
                <IconBox
                    icon={<i className="fa-brands fa-telegram" />}
                    intend={"secondary"}
                />
            </div>
            <h3 className={"col-span-2 text-xl font-bold text-center"}>
                © 2024 Naser Papi. All rights reserved.
            </h3>
            <LinkLable text={"Privacy Policy"} isLink />
            <LinkLable text={"Terms & Conditions"} isLink />
            <p className={"text-center col-span-2"}>
                Figma Designer: JohannLeon
            </p>
        </div>
    );
};

export default ContactFooter;
