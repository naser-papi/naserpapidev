import { IconBox } from "@/components/atom";

const HeaderSocials = () => {
    return (
        <div className={"hidden sm:flex items-center gap-2"}>
            <IconBox
                icon={<i className="fa-brands fa-linkedin-in" />}
                intend={"tertiary"}
            />
            <IconBox
                icon={<i className="fa-brands fa-github" />}
                intend={"tertiary"}
            />
            <IconBox
                icon={<i className="fa-brands fa-telegram" />}
                intend={"tertiary"}
            />
        </div>
    );
};

export default HeaderSocials;
