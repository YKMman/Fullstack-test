import { useEffect, useState } from "react"

import { RootState } from "../store/store"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { productAsyncData } from "../store/product/productSliceThunk"
import { ProductState } from "../types/type"



const Table = ():JSX.Element => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const itemsPerPage = 3

    const dispatch = useAppDispatch()
    const data = useAppSelector((state:RootState) => state.products.info)

    useEffect(() => {
        dispatch(productAsyncData())
    }, [dispatch])

    if (!data) {
        return <div className="container">Loading...</div>
    }

    const getCurrentItems = ():ProductState[] => {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        return data.slice(startIndex, endIndex)
    }
    const totalPages = Math.ceil(data.length / itemsPerPage)


    const handlePrevPage = ():void => {
        setCurrentPage((prevPage) => prevPage - 1)
    }

    const handleNextPage = ():void => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    return (
        <section className="mb-[30px]">
            <div className="container">
                <h2 className="text-[32px] mb-[20px]">Table products</h2>
                <div className="rounded-[8px] border-x-[1px] border-black overflow-hidden border-t-[1px] text-[22px]">
                    <div className="grid grid-cols-3 text-white py-[10px] text-center border-b-[1px] border-black">
                        <p className="text-left text-[18px] border-r-[1px] border-black pl-[30px] uppercase">Name</p>
                        <p className="border-r-[1px] border-black uppercase">Price</p>
                        <p className="pr-[30px] uppercase">Category</p>
                    </div>
                    {
                        data &&
                        (getCurrentItems().map((el:any, index:any) => {
                            return (
                                <div className="grid grid-cols-3 text-white py-[10px] text-center border-b-[1px] border-black" key={index}>
                                    <p className="text-left text-[18px] border-r-[1px] border-black pl-[30px]">{el.name}</p>
                                    <p className="border-r-[1px] border-black">{el.price}</p>
                                    <p className="pr-[30px]">{el.category}</p>
                                </div>
                            )
                        }))
                    } 
                </div>
                <div className="flex items-center justify-center py-[20px] gap-x-[20px]">
                    <button disabled={currentPage === 1} onClick={handlePrevPage}>prev</button>
                    <button disabled={currentPage === totalPages} onClick={handleNextPage}>next</button>
                    <span className="ml-auto">Page: {currentPage} / {totalPages}</span>
                </div>
            </div>
        </section>
    )
}

export default Table
