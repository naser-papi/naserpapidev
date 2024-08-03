"use client";
import { InputHTMLAttributes, useState, ChangeEvent } from "react";
import { cva, VariantProps } from "class-variance-authority";

const textBoxVariants = cva(["relative", "w-full"], {
    variants: {
        intent: {
            primary: ["border", "border-primary-100", "radius-lg"],
            secondary: [],
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
const labelVariants = cva(
    [
        "absolute",
        "-top-4",
        "left-1",
        "bg-primary-700",
        "px-1",
        "text-primary-100",
        "z-10",
    ],
    {
        variants: {
            intent: {
                primary: [],
                secondary: [],
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
                className: ["hidden"],
            },
        ],
    }
);
const inputVariants = cva(["w-full", "p-3", "bg-transparent", "outline-none"], {
    variants: {
        intent: {
            primary: ["text-primary-50"],
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
}

const TextBox = ({
    value,
    onChange,
    disabled,
    label,
    intent,
    placeholder,
    type,
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
            className={textBoxVariants({
                disabled,
                intent,
                hasFocus,
                hasText: !!textValue,
            })}
        >
            <label
                className={labelVariants({
                    intent,
                    hasText: !!textValue,
                    hasFocus,
                })}
            >
                {label}
            </label>
            <input
                {...rest}
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
