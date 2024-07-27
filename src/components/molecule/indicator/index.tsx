import { BaseHTMLAttributes } from "react";

interface IndicatorProps extends BaseHTMLAttributes<HTMLLabelElement> {
    count: number;
    text: string;
}

const Indicator = ({ count, text }: IndicatorProps) => {
    return (
        <div className={"grid grid-cols-[50px_auto] items-center gap-x-4"}>
            <strong className={"font-medium text-5xl text-secondary-700"}>
                {count}
            </strong>
            <strong
                className={"text-primary-50 text-xl font-ibm whitespace-wrap"}
            >
                {text}
            </strong>
        </div>
    );
};

export default Indicator;
