import UnderConstruction from "@/components/template/under-construction";
import Background from "./background";
import { redirect } from "next/navigation";

export default function constructPage() {
    if (process.env.SHOW_CONSTRUCTION !== "yes") {
        redirect("/");
    }
    return (
        <>
            <Background />
            <main className="font-ubuntu flex min-h-screen flex-col items-center justify-between p-4 lg:items-start lg:pl-20">
                <UnderConstruction />
            </main>
        </>
    );
}
