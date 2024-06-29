import { Ubuntu, IBM_Plex_Mono } from "next/font/google";

export const ubuntuInit = Ubuntu({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ubuntu",
    weight: ["300", "400", "500", "700"],
});
export const ibmmonoInit = IBM_Plex_Mono({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-ibmmono",
    weight: ["300", "400", "500", "600", "700"],
});

export const ubunto = ubuntuInit.variable;
export const ibmmono = ibmmonoInit.variable;
