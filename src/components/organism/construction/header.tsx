import Image from "next/image";
import naserLogo from "assets/images/naser-logo.png";

const Header = () => {
    return (
        <>
            <div className={"mb-[64px] w-full flex justify-center"}>
                <Image
                    src={naserLogo}
                    alt={"naser logo"}
                    className={"w-[300px]"}
                />
            </div>
            <div className={"flex flex-col justify-start gap-6"}>
                <h1 className={"font-bold text-5xl"}>Under Maintenance</h1>
                <p className={"font-normal text-xl"}>
                    Our team is working hard to resolve the issue. You can
                    subscribe to our mailing list order to get notified.
                </p>
            </div>
        </>
    );
};

export default Header;
