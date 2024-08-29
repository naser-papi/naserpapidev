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
                <div className={"flex flex-col gap-3 items-center sm:text-2xl"}>
                    <Avatar src={avatar} alt={"naser papi"} />
                    <h3>Naser Papi</h3>
                    <strong>Senior Javascript Developer</strong>
                </div>
                <div className={"flex flex-col gap-3 sm:gap-4 pl-4"}>
                    <IconLabel
                        icon={<i className={"fa-solid fa-envelope"} />}
                        label={"naserpapi@hotmail.com"}
                        link={"mailto:naserpapi@hotmail.com"}
                    />
                    <IconLabel
                        icon={<i className="fa-regular fa-crown" />}
                        label={"Fan of JavaScript Anywhere"}
                    />

                    <IconLabel
                        icon={<i className="fa-regular fa-graduation-cap" />}
                        label={"Education: BD of software Engineering"}
                    />
                    <IconLabel
                        icon={<i className="fa-regular fa-heart" />}
                        label={
                            "Teamwork, Leadership, Creativity, Problem-Solving"
                        }
                    />
                    <div className={"flex items-center gap-2"}>
                        <Tag text={"React"} />
                        <Tag text={"NeXt.JS"} />
                        <Tag text={"NeSt.JS"} />
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
