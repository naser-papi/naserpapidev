import { GlobalKeys, RegularExpression } from "@/constants";

export const delay = (sec: number) =>
    new Promise((resolve) => setTimeout(resolve, sec * 1000));
export const isEmail = (email: string) => RegularExpression.EMAIL.test(email);

export const getAppLocalStorage = () => {
    const value = localStorage.getItem(GlobalKeys.localStorageInfo);
    if (value) {
        return JSON.parse(value);
    }
    return null;
};

export const getIndexName = (arr: unknown[], index: number) =>
    arr.length == 0
        ? undefined
        : index === 0
          ? "first"
          : index === arr.length - 1
            ? "last"
            : "middle";

export function replaceParams(
    urlTemplate: string,
    params: { [key: string]: string }
): string {
    // Regular expression to match placeholder patterns like {param1}, {param2}, etc.
    const regex = /{([^}]+)}/g;

    // Replace each placeholder in the URL template with the corresponding value from the params object
    return urlTemplate.replace(regex, (match, paramName) => {
        // Check if the paramName exists in the params object
        if (params.hasOwnProperty(paramName)) {
            // If the paramName exists, replace the placeholder with its corresponding value
            return params[paramName];
        } else {
            // If paramName doesn't exist in params, return the original placeholder
            return match;
        }
    });
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

export * from "./error-types";
