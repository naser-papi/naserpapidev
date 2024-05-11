import type { Preview } from "@storybook/react";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import {
    INITIAL_VIEWPORTS,
    MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "../src/app/globals.css";
import "../public/assets/font-awsome/css/all.min.css";

const customViewports = {
    desktopHD: {
        name: "Desktop 1080p",
        styles: {
            width: "1920px",
            height: "1080px",
        },
    },
    desktopNormal: {
        name: "Desktop Normal",
        styles: {
            width: "1440px",
            height: "900px",
        },
    },
};

const preview: Preview = {
    parameters: {
        viewport: {
            viewports: {
                ...INITIAL_VIEWPORTS,
                ...MINIMAL_VIEWPORTS,
                ...customViewports,
            },
            defaultViewport: "iphone14promax",
        },
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
