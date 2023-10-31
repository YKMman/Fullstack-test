import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"

import { TFormSearch } from "../types/type"
import { getSearchProduct } from "../api/getSearchProduct"
import { useAppDispatch } from "../store/hooks"
import { addProduct } from "../store/product/productSlice"
import { productAsyncData } from "../store/product/productSliceThunk"


const Search:FC = ():JSX.Element => {
    const {register, handleSubmit} = useForm<TFormSearch>()
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<TFormSearch> = (data) => {
        getSearchProduct(data)
        .then(response => dispatch(addProduct(response.data.rows)))
    }

    const handleRefresh = ():void => {
        dispatch(productAsyncData())
    }

    return (
        <section className="my-[20px] mb-[60px]">
            <div className="container flex items-center justify-center gap-x-[20px]">
                <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-x-[20px]">
                    <label>
                        <input className="outline-none p-[5px] bg-transparent border-[1px] border-black placeholder:text-white" type='search' placeholder="search" {...register("search")} />
                    </label>
                    <button className="p-[10px] bg-lightGreen text-center max-w-[175px] w-full min-w-[175px] duration-500 hover:bg-black hover:text-white">Find</button>
                </form>
                <button className="p-[10px] bg-red text-center max-w-[175px] w-full duration-500 hover:bg-green" onClick={handleRefresh}>Refresh</button>
            </div>
        </section>
    )
}

export default Search
