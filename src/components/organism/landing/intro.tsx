import Link from "next/link";
import { TitleIcon } from "@/components/molecule";
const Intro = () => {
    return (
        <div className={"intro grid w-full place-items-start gap-y-2"}>
            <div
                className={
                    "flex flex-col gap-2 font-ubuntu text-2xl text-primary-50 sm:text-3xl [&>h3]:pl-4 [&>h4]:font-ibm [&>h4]:text-lg [&>h4]:text-secondary-600 [&>span]:text-secondary-600"
                }
            >
                <h4>{"<h1>"}</h4>
                <h3>Hi,</h3>
                <h3>
                    I&apos;m <span>Naser</span>
                </h3>
                <h3>a Senior Javascript Developer</h3>
                <h4>{"</h1>"}</h4>
            </div>
            <div
                className={
                    "flex flex-col font-ibm text-base text-primary-50 sm:text-xl [&>h4]:text-secondary-600 [&>p]:pl-4 [&>p]:font-ubuntu"
                }
            >
                <h4>{"<p>"}</h4>
                <p>
                    I specialize in driving business growth by creating
                    exceptional web and mobile experiences. If you need a
                    developer who brings ideas to life and gets things done,
                </p>
                <h4>{"</p>"}</h4>
            </div>
            <Link
                href={"https://calendly.com/naserpapi/technical"}
                target={"_blank"}
                className={"justify-self-center xl:justify-self-start"}
            >
                <TitleIcon
                    title={"Let’s connect!"}
                    icon={<i className="fa-brands fa-rocketchat" />}
                />
            </Link>
        </div>
    );
};

export default Intro;
