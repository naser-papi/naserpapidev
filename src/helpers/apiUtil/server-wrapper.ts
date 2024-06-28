"use server";
import { IAPIInfo } from "@/types";
import mainCall from "./main-call";

const serverWrapper = async <T>(info: IAPIInfo, token = "") => {
    const resp = await mainCall<T>(info, token);
    //TODO:: add the logger here for errors
    return resp.data;
};
export default serverWrapper;
