import { IAppState } from "@/types";
import { proxy } from "valtio";

const initialState: IAppState = {
    appVersion: "1.0.0",
};

export default proxy(initialState);
