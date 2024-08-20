import { IconBox } from "@/components/atom";
import Link from "next/link";
import { SocialLinks } from "@/constants";
const HeaderSocials = () => {
    return (
        <div className={"hidden sm:flex items-center gap-2"}>
            {SocialLinks.map((social) => (
                <Link
                    href={social.link}
                    target={"_blank"}
                    key={social.title.replace(" ", "_")}
                >
                    <IconBox
                        icon={<i className={social.icon} />}
                        intend={"tertiary"}
                    />
                </Link>
            ))}
        </div>
    );
};

export default HeaderSocials;
