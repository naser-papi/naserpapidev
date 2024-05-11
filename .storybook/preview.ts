import type { Preview } from "@storybook/react";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import "../src/app/globals.css";
import "../public/assets/font-awsome/css/all.min.css";

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: "dark",
            values: [
                {
                    name: "light",
                    value: "#d6e3e3",
                },
                {
                    name: "dark",
                    value: "#08101a",
                },
            ],
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
