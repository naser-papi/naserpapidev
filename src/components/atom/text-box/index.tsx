"use client";
import { InputHTMLAttributes, useState, ChangeEvent } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const textBoxVariants = cva(["relative", "w-full"], {
    variants: {
        intent: {
            primary: ["border", "border-primary-100", "radius-lg"],
            secondary: [
                "border-b-2",
                "border-secondary-600",
                "flex",
                "flex-col",
                "pb-1",
                "gap-4",
            ],
        },
        disabled: {
            true: [],
            false: [],
        },
        hasFocus: {
            true: [],
            false: [],
        },
        hasText: {
            true: [],
            false: [],
        },
    },
    defaultVariants: {
        intent: "primary",
        disabled: false,
        hasFocus: false,
    },
});
const labelVariants = cva([], {
    variants: {
        intent: {
            primary: [
                "absolute",
                "-top-4",
                "left-1",
                "px-1",
                "bg-primary-700",
                "text-primary-100",
                "z-10",
            ],
            secondary: ["text-secondary-600", "text-lg"],
        },
        disabled: {
            true: [],
            false: [],
        },
        hasFocus: {
            true: [],
            false: [],
        },
        hasText: {
            true: [],
            false: [],
        },
    },
    defaultVariants: {
        intent: "primary",
        disabled: false,
        hasFocus: false,
    },
    compoundVariants: [
        {
            hasFocus: false,
            hasText: false,
            intent: "primary",
            className: ["hidden"],
        },
    ],
});
const inputVariants = cva(["w-full", "bg-transparent", "outline-none"], {
    variants: {
        intent: {
            primary: ["text-primary-50", "p-3"],
            secondary: ["text-primary-200"],
        },
        disabled: {
            true: [],
            false: [],
        },
        hasFocus: {
            true: [],
            false: [],
        },
        hasText: {
            true: [],
            false: [],
        },
        defaultVariants: {
            intent: "primary",
            disabled: false,
            hasFocus: false,
        },
    },
});

interface TextBoxProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "onChange" | "disabled" | "type"
        >,
        VariantProps<typeof textBoxVariants> {
    label: string;
    onChange?: (value: string) => void;
    type?: "text" | "email" | "url" | "area";
    labelBackgroundColor?: string;
}

const TextBox = ({
    value,
    onChange,
    disabled,
    label,
    intent,
    placeholder,
    type,
    required,
    className,
    labelBackgroundColor,
    ...rest
}: TextBoxProps) => {
    const [hasFocus, setHasFocuse] = useState(false);
    const [textValue, setTextValue] = useState(value);
    const textChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div
            {...rest}
            className={twMerge(
                textBoxVariants({
                    disabled,
                    intent,
                    hasFocus,
                    hasText: !!textValue,
                }),
                className
            )}
        >
            <label
                className={labelVariants({
                    intent,
                    hasText: !!textValue,
                    hasFocus,
                })}
                style={{ backgroundColor: labelBackgroundColor }}
            >
                {label}
                {required && " *"}
            </label>
            <input
                className={inputVariants({
                    disabled,
                    intent,
                    hasFocus,
                    hasText: !!textValue,
                })}
                value={textValue}
                onChange={textChanged}
                placeholder={
                    hasFocus || textValue || intent === "secondary"
                        ? placeholder
                        : label
                }
                type={type ?? "text"}
                onFocus={() => setHasFocuse(true)}
                onBlur={() => setHasFocuse(false)}
            />
        </div>
    );
};

export default TextBox;
