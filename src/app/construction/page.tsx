import UnderConstruction from "@/components/template/under-construction";
import Background from "./background";

export default function constructPage() {
    return (
        <>
            <Background />
            <main className="font-ubuntu flex min-h-screen flex-col items-center justify-between p-4 lg:items-start lg:pl-20">
                <UnderConstruction />
            </main>
        </>
    );
}
