import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Background from "./(components)/background";

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
                className={`${poppins.className} bg-secondary text-primary relative`}
            >
                {children}
                <Background />
            </body>
        </html>
    );
}
