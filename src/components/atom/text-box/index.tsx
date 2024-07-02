"use client";
import { InputHTMLAttributes, useState, ChangeEvent } from "react";
import { cva, VariantProps } from "class-variance-authority";

const textBoxVariants = cva(
    ["border", "border-gray-100", "radius-lg", "relative", "w-full"],
    {
        variants: {
            disabled: {
                true: [],
                false: [],
            },
        },
    }
);
const inputVariants = cva(["w-full", "p-3", "text-white", "bg-transparent"], {
    variants: {
        disabled: {
            true: [],
            false: [],
        },
    },
});

interface TextBoxProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "type" | "placeholder" | "onChange" | "disabled"
        >,
        VariantProps<typeof textBoxVariants> {
    label: string;
    onChange?: (value: string) => void;
}

const TextBox = ({ value, onChange, disabled, label }: TextBoxProps) => {
    const [hasFocus, setHasFocuse] = useState(false);
    const [textValue, setTextValue] = useState(value);
    const textChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={textBoxVariants({ disabled })}>
            <label
                className={`${!hasFocus && !textValue ? "hidden" : ""} absolute -top-4 left-1 bg-[#08101a] px-1`}
            >
                {label}
            </label>
            <input
                className={inputVariants({ disabled })}
                value={textValue}
                onChange={textChanged}
                placeholder={hasFocus || textValue ? "" : label}
                type={"text"}
                onFocus={() => setHasFocuse(true)}
                onBlur={() => setHasFocuse(false)}
            />
        </div>
    );
};

export default TextBox;
