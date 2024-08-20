"use client";
import { FormEvent, useState } from "react";
import { useClientApi } from "@/hooks";
import { Button, TextBox } from "@/components/atom";
import { SectionTitle } from "@/components/molecule";
import { ContactDto } from "@/types/dto";
import { APIPath } from "@/constants/api";

const ContactForm = () => {
    const [dto, setDto] = useState<ContactDto>({
        name: "",
        message: "",
        email: "",
    });
    const { callRestAPI, isLoading } = useClientApi();
    const handleTextChanged = (name: keyof ContactDto, value: string) => {
        setDto((perv) => ({ ...perv, [name]: value }));
    };
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!dto.name) {
            alert("Please enter your name");
            return;
        }
        if (!dto.email) {
            alert("Please enter your email");
            return;
        }
        if (!dto.message) {
            alert("Please enter your message");
            return;
        }
        const apiInfo = APIPath.contact;
        apiInfo.body = dto;
        const resp = await callRestAPI<ContactDto>(apiInfo);
        if (resp && resp.id) {
            alert(
                "Thank you, we just received your message and will email an answer soon."
            );
        }
    };
    return (
        <form
            className={
                "w-full grid grid-cols-2 gap-y-12 gap-x-4 max-w-[1280px]"
            }
            onSubmit={handleSubmit}
        >
            <SectionTitle
                title={"Send Me A Message"}
                className={"col-span-2"}
            />
            <TextBox
                label={"Your Name"}
                required
                placeholder={"Enter your name"}
                intent={"secondary"}
                onChange={(value) => handleTextChanged("name", value)}
            />
            <TextBox
                label={"Your Email"}
                required
                placeholder={"Enter your email"}
                intent={"secondary"}
                onChange={(value) => handleTextChanged("email", value)}
            />
            <TextBox
                label={"Your Message"}
                required
                placeholder={"Enter your needs"}
                intent={"secondary"}
                className={"col-span-2"}
                onChange={(value) => handleTextChanged("message", value)}
            />
            <Button
                text={"Send Message"}
                icon={<i className="fa-regular fa-paper-plane" />}
                shape={"oval"}
                className={"col-span-2 justify-self-center xl:w-full"}
                intend={"primary"}
                size={"large"}
                loading={isLoading}
                type={"submit"}
            />
        </form>
    );
};

export default ContactForm;
