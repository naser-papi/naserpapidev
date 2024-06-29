import type { Metadata } from "next";
import "./globals.css";
import { ubunto, ibmmono } from "./(utils)/fonts";
import Background from "./(components)/background";

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
                className={`${ubunto} ${ibmmono} bg-secondary text-primary-100 relative`}
            >
                {children}
                <Background />
            </body>
        </html>
    );
}
