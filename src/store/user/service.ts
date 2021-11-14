import { AxiosInstance } from "../../http";
import { TUser } from "./types";

export const GetUsersRequest = async (): Promise<TUser[]> => {
    const { data } = await AxiosInstance.get('/users');

    return data;
}