"use client";
import { cva, VariantProps } from "class-variance-authority";
import { BaseHTMLAttributes } from "react";

const spinnerVariants = cva(["animate-spin", "mr-3"], {
    variants: {
        size: {
            small: ["h-4", "w-4"],
            medium: ["h-6", "w-6"],
            large: ["h-10", "w-10"],
        },
    },
});

interface SpinnerProps
    extends BaseHTMLAttributes<SVGSVGElement>,
        VariantProps<typeof spinnerVariants> {
    fillColor: string;
}

const Spinner = ({ size, fillColor, ...rest }: SpinnerProps) => (
    <svg
        className={spinnerVariants({ size })}
        xmlns="http://www.w3.org/2000/svg"
        fill={fillColor}
        viewBox="0 0 24 24"
        {...rest} // Spread additional props (e.g.,style)
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill={fillColor}
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
);

export default Spinner;
