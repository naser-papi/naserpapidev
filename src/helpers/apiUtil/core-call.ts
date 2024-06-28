import { IAPIInfo } from "@/types";
import {
    addQueryParamsToUrl,
    normalizeURLForE2ETest,
    replaceParams,
} from "../common";

const coreCall = async (info: IAPIInfo, token = "") => {
    const url = normalizeURLForE2ETest(info.url);
    const normalizUrl = info.params
        ? replaceParams(url, info.params)
        : info.query
          ? addQueryParamsToUrl(url, info.query)
          : url;
    const fullURL = `${
        process.env.API_SERVER ?? process.env.NEXT_PUBLIC_API_SERVER
    }/${normalizUrl}`;
    return await fetch(fullURL, {
        method: info.method,
        body: info.method !== "GET" ? JSON.stringify(info.body) : null,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: info.tokenLess || !token ? "" : `Bearer ${token}`,
        },
        ...info.options,
    });
};

export default coreCall;
