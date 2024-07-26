import type { Preview, StoryFn, StoryObj } from "@storybook/react";
import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
import {
    INITIAL_VIEWPORTS,
    MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";
import "../src/app/globals.css";
import { ubunto, ibmmono } from "../src/app/(utils)/fonts";
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
        layout: "centered",
        decorators: [
            (Story: StoryFn) => (
                <div
                    className={`${ubunto} ${ibmmono} bg-secondary text-primary-100`}
                >
                    {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
                    <Story />
                </div>
            ),
        ],
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
                    value: "#1A1E23",
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
