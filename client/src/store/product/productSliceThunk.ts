import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../api/getAllProducts";

export const productAsyncData = createAsyncThunk('product/getProduct', async () => {
    const response = await getAllProducts()
    return response.data.rows
})