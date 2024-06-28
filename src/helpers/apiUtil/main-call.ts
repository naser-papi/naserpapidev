import { IAPIInfo, IAPIResponse } from "@/types";
import coreCall from "./core-call";

const mainCall = async <T>(
    info: IAPIInfo,
    token = ""
): Promise<IAPIResponse<T>> => {
    try {
        const resp = await coreCall(info, token);
        if (resp.status === 200 || resp.status === 201) {
            const res = await resp.json();
            return { data: res as T, status: resp.status };
        } else {
            console.log("API Resp status", info.url, resp.status);
            const res = await resp.json();
            return {
                status: resp.status,
                error:
                    (res.error as string) ||
                    (res.message as string) ||
                    "Something went wrong",
            };
        }
    } catch (error) {
        console.log("error!", error);
        return {
            status: 500,
            error: "Something went wrong",
        };
    }
};

export default mainCall;
