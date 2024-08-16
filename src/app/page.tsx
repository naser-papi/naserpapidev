import { redirect } from "next/navigation";
import { Header } from "@/components/organism/landing";
import {
    Hero,
    AboutMe,
    Skills,
    Works,
    Blogs,
    Contact,
} from "@/components/template/landing";
export default function Home() {
    if (process.env.SHOW_CONSTRUCTION === "yes") {
        redirect("/construction");
    }
    return (
        <main className="min-h-screen bg-primary-700 grid place-items-center ">
            <Header />
            <Hero />
            <AboutMe />
            <Skills />
            <Works />
            <Blogs />
            <Contact />
        </main>
    );
}
