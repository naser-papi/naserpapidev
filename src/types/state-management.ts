import { IUserInfo } from "./user";
import { IGlobalMessage } from "./common";

export interface IAppState {
    userInfo?: IUserInfo;
    globalMessage?: IGlobalMessage;
    appVersion: string;
}
