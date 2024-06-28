import { GlobalKeys, RegularExpression } from "@/constants";
import { ICell, ILocalStorageInfo, IParams, IRow } from "@/types";

export function getDayStartAndEnd(dateString: string): [string, string] {
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string");
    }

    const startDateTime = new Date(date);
    startDateTime.setHours(0, 0, 0, 0);

    const endDateTime = new Date(date);
    endDateTime.setHours(23, 59, 59, 999);

    // Convert to ISO 8601 string format with 'Z' for UTC timezone
    const startISOString = startDateTime.toISOString();
    const endISOString = endDateTime.toISOString();

    return [startISOString, endISOString];
}

export function getLastNDaysDateTime(n: number): [string, string] {
    if (n <= 0) return ["", ""];
    const now = new Date();
    const pad = (num: number) => String(num).padStart(2, "0");

    const endDate = `${now.getUTCFullYear()}-${pad(now.getUTCMonth() + 1)}-${pad(now.getUTCDate())}T${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())}.${String(now.getUTCMilliseconds()).padStart(3, "0")}Z`;

    const startDateMilliseconds = now.getTime() - n * 24 * 60 * 60 * 1000;
    const startDateObj = new Date(startDateMilliseconds);

    // Set time components to 0 for start of day in UTC
    startDateObj.setUTCHours(0, 0, 0, 0);

    const startDate = `${startDateObj.getUTCFullYear()}-${pad(startDateObj.getUTCMonth() + 1)}-${pad(startDateObj.getUTCDate())}T${pad(startDateObj.getUTCHours())}:${pad(startDateObj.getUTCMinutes())}:${pad(startDateObj.getUTCSeconds())}.${String(startDateObj.getUTCMilliseconds()).padStart(3, "0")}Z`;

    return [startDate, endDate];
}

export const formatDateTimeString = (dateTimeString: string) => {
    const date = new Date(dateTimeString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date/time string provided.");
    }

    const options: Intl.DateTimeFormatOptions = {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    };

    const formattedDate = date.toLocaleString("en-US", options);
    return `${formattedDate}`;
};

export const convertAPIRow = (
    row: { [key in string]: any },
    columns: string[],
    key: string
): IRow => {
    return {
        key: row[key] as string,
        cells: columns.map(
            (k) =>
                ({
                    key: k,
                    text: row[k],
                }) as ICell
        ),
    };
};

export const isEmail = (email: string): boolean => {
    const regexExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexExp.test(email);
};

export const delay = (sec: number) =>
    new Promise((resolve) => setTimeout(resolve, sec * 1000));
export const normalizeURLForE2ETest = (url: string) =>
    process.env.E2E_TEST === "yes"
        ? url.replace(/[\/](?=.*[\/])/g, "_").replace(/_{/g, "/{")
        : url;

export const downloadFileFromURL = async (url: string) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
};

export const getAppLocalStorage = () => {
    const value = localStorage.getItem(GlobalKeys.localStorageInfo);
    if (value) {
        return JSON.parse(value) as ILocalStorageInfo;
    }
    return null;
};

export const clreaTokensFormAppLocalStorage = () => {
    const exist = getAppLocalStorage() as any;
    if (exist && exist.hasOwnProperty("tokens")) {
        delete exist.tokens;
    }
    localStorage.setItem(GlobalKeys.localStorageInfo, JSON.stringify(exist));
};

export const isQuestion = (text: string) => {
    if (!text) return false;
    const wordCount = text.split(" ");
    return wordCount.length >= 2; //&& text.indexOf("?") !== -1;
};
export const getIndexName = (arr: unknown[], index: number) =>
    arr.length == 0
        ? undefined
        : index === 0
          ? "first"
          : index === arr.length - 1
            ? "last"
            : "middle";

export function replaceParams(urlTemplate: string, params: IParams): string {
    // Regular expression to match placeholder patterns like {param1}, {param2}, etc.
    const regex = /{([^}]+)}/g;

    // Replace each placeholder in the URL template with the corresponding value from the params object
    return urlTemplate.replace(regex, (match, paramName) => {
        // Check if the paramName exists in the params object
        if (params.hasOwnProperty(paramName)) {
            // If the paramName exists, replace the placeholder with its corresponding value
            return params[paramName].toString();
        } else {
            // If paramName doesn't exist in params, return the original placeholder
            return match;
        }
    });
}

export function addQueryParamsToUrl(url: string, queryParams: IParams): string {
    const urlObject = new URL(url, "http://example.com"); // Base URL for parsing

    for (const [key, value] of Object.entries(queryParams)) {
        urlObject.searchParams.append(key, value.toString());
    }

    // Remove the base and return the constructed URL without the leading slash
    return urlObject.pathname.slice(1) + urlObject.search;
}

export function partialData<T extends { [key in string]: any }>(data: any): T {
    const dummy: T = data as T;
    const result = {} as { [key in string]: any };
    for (const key in dummy) {
        if (data.hasOwnProperty(key)) {
            result[key] = data[key];
        }
    }
    return result as T;
}

export function normalizeEmail(email: string) {
    const [localPart, domain] = email.split("@");
    const cleanedLocalPart = localPart.replace(/\./g, "");
    return `${cleanedLocalPart}@${domain}`;
}
