import {
    Footer,
    Header,
    SubscribeAction,
} from "@/components/organism/construction";
const UnderConstruction = () => {
    return (
        <div
            className={
                "flex flex-col flex-grow items-center justify-start h-full max-w-lg"
            }
        >
            <Header />
            <SubscribeAction />
            <Footer />
        </div>
    );
};

export default UnderConstruction;
