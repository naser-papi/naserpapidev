import { TitleIcon } from "@/components";

const Intro = () => {
    return (
        <div className={"grid place-items-start gap-y-3 w-full"}>
            <div
                className={
                    "flex flex-col gap-2 text-primary-50 text-2xl font-ubuntu [&>h4]:text-lg [&>h3]:pl-4 [&>h4]:text-secondary-600 [&>span]:text-secondary-600 [&>h4]:font-ibm"
                }
            >
                <h4>{"<h1>"}</h4>
                <h3>Hey</h3>
                <h3>
                    I'm <span>Naser</span>
                </h3>
                <h3>Senior Web Developer</h3>
                <h4>{"</h1>"}</h4>
            </div>
            <div
                className={
                    "flex flex-col font-ibm text-base text-primary-50 [&>h4]:text-secondary-600 [&>p]:font-ubuntu [&>p]:pl-4"
                }
            >
                <h4>{"<p>"}</h4>
                <p>
                    I help business grow by crafting amazing web experiences. If
                    you’re looking for a developer that likes to get stuff done,
                </p>
                <h4>{"</p>"}</h4>
            </div>
            <div className={"justify-self-center"}>
                <TitleIcon
                    title={"Let's Talk"}
                    icon={<i className="fa-brands fa-rocketchat" />}
                />
            </div>
        </div>
    );
};

export default Intro;
