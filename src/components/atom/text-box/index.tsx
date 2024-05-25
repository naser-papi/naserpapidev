"use client";
import { InputHTMLAttributes, useState, ChangeEvent } from "react";
interface TextBoxProps
    extends Omit<
        InputHTMLAttributes<HTMLInputElement>,
        "type" | "placeholder" | "onChange"
    > {
    label: string;
    onChange?: (value: string) => void;
}
const TextBox = ({ value, onChange, label }: TextBoxProps) => {
    const [hasFocus, setHasFocuse] = useState(false);
    const [textValue, setTextValue] = useState(value);
    const textChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setTextValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div className={"border border-gray-100 radius-lg relative w-full"}>
            <label
                className={`${!hasFocus && !textValue ? "hidden" : ""} absolute -top-4 left-1 bg-[#08101a] px-1`}
            >
                {label}
            </label>
            <input
                className={"w-full p-3 text-white bg-transparent"}
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
