import { BaseHTMLAttributes } from "react";

interface IndicatorProps extends BaseHTMLAttributes<HTMLLabelElement> {
    count: number;
    text: string;
}

const Indicator = ({ count, text }: IndicatorProps) => {
    return (
        <div
            className={
                "grid grid-cols-[50px_1fr] items-center gap-x-4 sm:grid-cols-[80px_1fr]"
            }
        >
            <strong
                className={
                    "font-medium text-5xl text-secondary-700 sm:text-7xl"
                }
            >
                {count}
            </strong>
            <strong
                className={
                    "text-primary-50 text-lg font-ibm whitespace-wrap sm:text-2xl"
                }
            >
                {text}
            </strong>
        </div>
    );
};

export default Indicator;
