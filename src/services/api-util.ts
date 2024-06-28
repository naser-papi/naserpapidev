"use client";
import { IAPIInfo, IServerError } from "@/types";
import { replaceParams } from "@/helpers";

export const normalizeURLForE2ETest = (url: string) =>
    process.env.E2E_TEST === "yes"
        ? url.replace(/[\/](?=.*[\/])/g, "_").replace(/_{/g, "/{")
        : url;

export const callApi = async (
    info: IAPIInfo,
    token?: string,
    skipJsonResult?: boolean
) => {
    try {
        const url = normalizeURLForE2ETest(info.url);
        const normalizUrl = info.params ? replaceParams(url, info.params) : url;
        console.log(
            "URL",
            process.env.API_SERVER,
            process.env.NEXT_PUBLIC_API_SERVER
        );
        const fullURL = `${
            process.env.API_SERVER ?? process.env.NEXT_PUBLIC_API_SERVER
        }/${normalizUrl}`;
        const resp = await fetch(fullURL, {
            method: info.method,
            body: info.method !== "GET" ? JSON.stringify(info.body) : null,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization:
                    info.tokenLess || !token ? "" : `Bearer ${token}`,
            },
            ...info.options,
        });

        if (skipJsonResult) return resp;
        if (resp.status === 200 || resp.status === 201) {
            return await resp.json();
        } else if (resp.status === 400 || resp.status === 401) {
            const { error } = (await resp.json()) as IServerError;
            alert(error);
        } else {
            alert("Something went wrong");
        }
    } catch (error) {
        console.log("error!", error);
        alert("Something went wrong");
    }
};
