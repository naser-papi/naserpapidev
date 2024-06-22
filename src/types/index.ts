import { HTTP_METHOD } from "next/dist/server/web/http";

export interface IServerError {
    error: string;
}
export interface ISocial {
    title: string;
    icon: string;
    url: string;
}
export interface ISubscibeSaveDto {
    createSubscription: {
        data: {
            id: string;
            attributes: {
                email: string;
            };
        };
    };
}

export interface IServerMessage {
    [key: string]: {
        code: number;
        message: string;
    };
}

export interface IAPIInfo {
    url: string;
    method: HTTP_METHOD;
    body?: any;
    tokenLess?: boolean;
    params?: {
        [key: string]: string;
    };
    options?: RequestInit;
}
