import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import mainBk from "assets/images/main-bk.png";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
    title: "welcome to naser papi website ",
    description:
        "here you can find a lot of articles about my best development experiences",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.className} bg-secondary text-primary bg-[url(/assets/images/main-bk.png)] bg-center bg-no-repeat bg-cover`}
            >
                {children}
            </body>
        </html>
    );
}
