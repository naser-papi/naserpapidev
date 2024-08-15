import { Avatar, Button, ContentFrame, Tag } from "@/components/atom";
import avatar from "assets/images/naser-avatar.jpg";
import IconLabel from "@/components/atom/label-icon";

const HeroBox = () => {
    return (
        <ContentFrame>
            <div
                className={
                    "h-full w-full grid place-items-center text-primary-100"
                }
            >
                <div className={"flex flex-col gap-3 items-center"}>
                    <Avatar src={avatar} alt={"naser papi"} />
                    <h3>Naser Papi</h3>
                    <strong>Senior Web Developer</strong>
                </div>
                <div className={"flex flex-col gap-3"}>
                    <IconLabel
                        icon={<i className={"fa-solid fa-envelope"} />}
                        label={"naserpapi@hotmail.com"}
                    />
                    <IconLabel
                        icon={<i className="fa-solid fa-location-dot" />}
                        label={"Iran"}
                    />
                    <IconLabel
                        icon={<i className="fa-solid fa-display-code" />}
                        label={"Full time - freelancer"}
                    />
                    <IconLabel
                        icon={<i className="fa-solid fa-globe-pointer" />}
                        label={"https://www.naserpapi.dev"}
                    />
                    <div className={"flex items-center gap-2"}>
                        <Tag text={"React"} />
                        <Tag text={"TypeScript"} />
                        <Tag text={"NextJs"} />
                        <Tag text={"MongoDB"} />
                    </div>
                </div>
                <div className={"w-2/3 justify-self-start px-2"}>
                    <Button
                        text={"Download CV"}
                        icon={<i className="fa-regular fa-download" />}
                    />
                </div>
            </div>
        </ContentFrame>
    );
};

export default HeroBox;
