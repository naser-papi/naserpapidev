import Image from "next/image";
import mainBk from "assets/images/main-bk.png";

const Background = () => {
    return (
        <div className={"absolute w-full h-full inset-0 -z-10"}>
            <Image
                alt="under-construction"
                src={mainBk}
                placeholder={"blur"}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
        </div>
    );
};

export default Background;
