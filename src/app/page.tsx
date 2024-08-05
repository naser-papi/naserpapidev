import { redirect } from "next/navigation";

export default function Home() {
    if (process.env.SHOW_CONSTRUCTION === "yes") {
        redirect("/construction");
    }
    return <main className="min-h-screen"></main>;
}
