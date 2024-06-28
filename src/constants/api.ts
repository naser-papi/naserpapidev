import { IAPIInfo } from "@/types";

export const APIPath = {
    subscribe: {
        url: "api/subscribe",
        method: "POST",
        body: {
            email: "",
        },
    },
} satisfies { [key: string]: IAPIInfo };
