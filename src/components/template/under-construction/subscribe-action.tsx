"use client";
import { useState } from "react";
import { Button, TextBox } from "@/components";
import { APIPath } from "@/constants/api";
import { callApi } from "@/services";
import { isEmail } from "@/helpers";

const SubscribeAction = () => {
    const [email, setEmail] = useState("");
    const subscribeHandler = async () => {
        if (email && isEmail(email)) {
            const apiInfo = APIPath.subscribe;
            apiInfo.body = {
                email,
            };
            const resp = await callApi(apiInfo);
            if (resp) {
                alert("Thanks for subscribing with email");
            }
        } else {
            alert("Please enter a valid email");
        }
    };
    return (
        <div className={"flex flex-col items-center gap-4 w-full py-8"}>
            <TextBox label={"Email"} onChange={setEmail} />
            <Button text={"Subscribe"} onClick={subscribeHandler} />
        </div>
    );
};

export default SubscribeAction;
