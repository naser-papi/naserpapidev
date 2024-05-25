export interface ISocial {
    title: string;
    icon: string;
    url: string;
}
export interface ISubscibeSaveDto {
    email: string;
}

export interface IServerMessage {
    [key: string]: {
        code: number;
        message: string;
    };
}
