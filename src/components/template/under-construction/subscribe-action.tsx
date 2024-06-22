"use client";
import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Button, TextBox } from "@/components";
import { APIQuery } from "@/constants";
import { isEmail } from "@/helpers";
import { ISubscibeSaveDto } from "@/types";

const SubscribeAction = () => {
    const [email, setEmail] = useState("");
    const [createSubscription, { data, loading, error }] =
        useMutation<ISubscibeSaveDto>(APIQuery.subscribe);
    const subscribeHandler = async () => {
        if (email && isEmail(email)) {
            createSubscription({ variables: { email } });
        } else {
            alert("Please enter a valid email");
        }
    };
    useEffect(() => {
        console.log("Subscribe action", data);
        if (data && data.createSubscription) {
            alert("Thanks for your subscription");
        }
    }, [data]);
    useEffect(() => {
        if (error && error.message) {
            alert(error.message);
        }
    }, [error]);
    return (
        <div className={"flex flex-col items-center gap-4 w-full py-8"}>
            <TextBox label={"Email"} onChange={setEmail} />
            <Button
                text={"Subscribe"}
                onClick={subscribeHandler}
                disabled={loading}
            />
        </div>
    );
};

export default SubscribeAction;
