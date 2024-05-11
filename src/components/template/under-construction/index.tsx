import Image from "next/image";
import naserLogo from "assets/images/naser-logo.png";
import { TextBox, Button } from "@/components";

const UnderConstruction = () => {
    return (
        <div>
            <div>
                <Image src={naserLogo} alt={"naser logo"} />
            </div>
            <div>
                <h1>Under Maintenance</h1>
                <p>
                    Our team is working hard to resolve the issue. You can
                    subscribe to our mailing list order to get notified.
                </p>
            </div>
            <div>
                <TextBox label={"Email"} />
                <Button text={"Subscribe"} />
            </div>
        </div>
    );
};

export default UnderConstruction;
