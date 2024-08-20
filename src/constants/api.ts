import { IAPIInfo } from "@/types";
import { ContactDto } from "@/types/dto";

export const APIPath = {
    subscribe: {
        url: "api/subscribe",
        method: "POST",
        body: {
            email: "",
        },
    },
    contact: {
        url: "api/contact",
        method: "POST",
        body: {} as ContactDto,
    },
} satisfies { [key: string]: IAPIInfo };
