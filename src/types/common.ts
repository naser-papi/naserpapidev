import { HTTP_METHOD } from "next/dist/server/web/http";

export interface IServerError {
    error: string;
}

export interface ISocial {
    title: string;
    icon: string;
    url: string;
}

export type IParams = {
    [key: string]: string | number;
};

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
    query?: IParams;
}

export interface IAPIResponse<T> {
    status: number;
    data?: T;
    error?: string;
}

export type MessageType = "error" | "warning" | "normal" | "success";

export interface IGlobalMessage {
    type: MessageType;
    message: string;
}

export interface IAlertMessage {
    type: MessageType;
    text: string;
    delay?: number;
}

export interface ILocalStorageInfo {
    tokens: {
        access: string;
        refresh: string;
    };
}

export type Status = "error" | "success" | "process" | "warning";
export type Side = "top" | "right" | "bottom" | "left";

export interface ICol {
    key: string;
    header: string;
    width?: string;
    index?: number;
    format?: string;
}

export interface ICell {
    key: string; //colKey
    text?: string;
    status?: Status;
}

export interface IRow {
    key: string; //row unique key
    cells: ICell[];
    isSelected?: boolean;
    disabled?: boolean;
    index?: number;
}

export type RowAction = "remove" | "update" | "select" | "move" | "drag";

export interface IKeyText {
    key: string;
    text: string;
}
