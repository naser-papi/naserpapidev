import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    900: "#1A1E23",
                    800: "#262D34",
                    700: "#374151",
                    600: "#4B5563",
                    500: "#6B7280",
                    400: "#9CA3AF",
                    300: "#D1D5DB",
                    200: "#E5E7EB",
                    100: "#F3F4F6",
                    50: "#FFFFFF",
                },
                secondary: {
                    900: "#12F7D6",
                    800: "#05E5C7", // Brighter shades of cyan/teal
                    700: "#08C7AF",
                    600: "#0BBFA7",
                    500: "#0ED7A1",
                },
                tertiary: {
                    900: "#0C73B8",
                    800: "#1E40AF", // Darker shades of blue
                    700: "#2563EB",
                    600: "#3B82F6",
                    500: "#60A5FA",
                },
                alternative: {
                    900: "#E7A020",
                    800: "#F59E0B", // Brighter shades of amber/orange
                    700: "#D97706",
                    600: "#B45309",
                    500: "#92400E",
                },
                warning: {
                    900: "#E54F26",
                    800: "#EF4444", // Brighter shades of red
                    700: "#DC2626",
                    600: "#B91C1C",
                    500: "#991B1B",
                },
            },
        },
    },
    plugins: [],
};
export default config;
