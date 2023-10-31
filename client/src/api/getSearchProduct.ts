import axios, { AxiosResponse } from "axios";
import { TFormSearch } from "../types/type";

export const getSearchProduct = async (data:TFormSearch): Promise<AxiosResponse<any, any> | any> => {
    const url: string = "http://localhost:3000/api/search"
    try {
        return await axios.post(url, {
            category: data
        })
    } catch (err) {
        console.log(err)
    }
}