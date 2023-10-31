import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"

import { TFormSort } from "../types/type"
import { getSortProducts } from "../api/getSortProducts"
import { useAppDispatch } from "../store/hooks"
import { addProduct } from "../store/product/productSlice"




const Sort:FC = ():JSX.Element => {
    const {register, handleSubmit} = useForm<TFormSort>()

    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<TFormSort> = (data) => {
        getSortProducts(data)
        .then(response => dispatch(addProduct(response.data.rows)))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-end gap-[20px] justify-center mb-[60px]">
            <div className="flex flex-col gap-[5px]">
                <p>Sort by category</p>
                <select {...register("category")}>
                    <option value="fruit">fruit</option>
                    <option value="vegetable">vegetable</option>
                </select>
            </div>

            <div className="flex flex-col gap-[5px]">
                <p>Sort by price</p>
                <select {...register("price")}>
                    <option value="ASC">по возрастанию цены</option>
                    <option value="DESC">по убыванию цены</option>
                </select>
            </div>

            <button className="p-[10px] bg-lightGreen text-center max-w-[175px] w-full duration-500 hover:bg-green">Find</button>
        </form>
    )
}

export default Sort
