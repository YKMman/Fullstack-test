import axios, { AxiosResponse } from "axios"

export const getAllProducts = async (): Promise<AxiosResponse<any, any> | any> => {
    const url: string = "http://localhost:3000/api/products"
    try {
        return await axios.post(url)
    } catch (err) {
        console.log(err)
    }

}