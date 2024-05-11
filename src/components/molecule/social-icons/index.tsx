import { socials } from "@/constants";

const SocialIcons = () => {
    return (
        <div className={"flex flex-col gap-4 items-center"}>
            <ul className={"flex gap-4"}>
                {socials.map((social) => (
                    <li
                        key={social.title}
                        className={"text-[48px] cursor-pointer"}
                    >
                        <i className={social.icon} />
                    </li>
                ))}
            </ul>
            <small className={"font-normal text-regular "}>
                © Copyrights Naser Papi | All Rights Reserved
            </small>
        </div>
    );
};

export default SocialIcons;
