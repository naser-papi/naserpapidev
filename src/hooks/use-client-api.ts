"use client";
import { IAPIInfo } from "@/types";
import { mainCall } from "@/helpers/apiUtil";
import { appState } from "@/stores";
import { useRouter } from "next/navigation";
import { useSnapshot } from "valtio";

const useClientApi = () => {
    const { userInfo } = useSnapshot(appState);
    const router = useRouter();
    const callRestAPI = async <T>(info: IAPIInfo) => {
        const resp = await mainCall<T>(info, userInfo?.token);
        if (resp.status === 403 || resp.status === 401) {
            appState.globalMessage = undefined;
            router.push("/auth/sign-in");
        }
        if (resp.status != 200 && resp.status != 201) {
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

    return { callRestAPI };
};

export default useClientApi;
