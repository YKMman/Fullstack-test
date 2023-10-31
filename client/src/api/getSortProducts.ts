import axios, { AxiosResponse } from "axios";
import { TFormSort } from "../types/type";

export const getSortProducts = async (data:TFormSort): Promise<AxiosResponse<any, any> | any> => {
    const url: string = "http://localhost:3000/api/sort"
    try {
        return await axios.post(url, {
            sort: data
        })
    } catch (err) {
        console.log(err)
    }
}