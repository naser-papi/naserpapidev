import { IconBox } from "@/components/atom";
import { SocialLinks } from "@/constants";
import Link from "next/link";

const ContactFooter = () => {
    return (
        <div
            className={
                "grid grid-cols-2 gap-4 border-t-primary-400 text-primary-200 pb-12"
            }
        >
            <div
                className={
                    "flex items-center gap-6 justify-center col-span-2 xl:gap-12"
                }
            >
                {SocialLinks.map((social) => (
                    <Link
                        href={social.link}
                        target={"_blank"}
                        key={social.title.replace(" ", "_")}
                    >
                        <IconBox
                            icon={<i className={social.icon} />}
                            intend={"secondary"}
                        />
                    </Link>
                ))}
            </div>
            <h3
                className={
                    "pt-12 col-span-2 text-lg font-bold text-left sm:text-center sm:text-2xl xl:text-4xl"
                }
            >
                © 2024 Naser Papi. All rights reserved.
            </h3>
            <p className={"text-center col-span-2 pt-6"}>
                Figma Designer: JohannLeon
            </p>
        </div>
    );
};

export default ContactFooter;
