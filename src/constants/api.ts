import { IAPIInfo } from "@/types";
import { ContactDto } from "@/types/dto";

export const APIPath = {
    subscribe: {
        url: "user/subscribe",
        method: "POST",
        body: {
            email: "",
        },
    },
    contact: {
        url: "user/contact",
        method: "POST",
        body: {} as ContactDto,
    },
} satisfies { [key: string]: IAPIInfo };
