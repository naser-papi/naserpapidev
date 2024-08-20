"use client";
import { IAPIInfo } from "@/types";
import { mainCall } from "@/helpers/apiUtil";
import { appState } from "@/stores";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";
import { useState } from "react";

const useClientApi = () => {
    const { userInfo } = useSnapshot(appState);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const callRestAPI = async <T>(info: IAPIInfo) => {
        setIsLoading(true);
        const resp = await mainCall<T>(info, userInfo?.token);
        setIsLoading(false);
        if (resp.status === 403 || resp.status === 401) {
            appState.globalMessage = undefined;
            router.push("/auth/sign-in");
        } else if (resp.status >= 500 && resp.status < 599) {
            alert("Something went wrong...");
        } else if (resp.status != 200 && resp.status != 201) {
            appState.globalMessage = {
                type: "error",
                message: resp.error!,
            };
            alert(resp.error);
        } else {
            appState.globalMessage = undefined;
        }
        return resp.data;
    };

    return { callRestAPI, isLoading };
};

export default useClientApi;
