import {  PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ProductState } from "../../types/type";
import { productAsyncData } from "./productSliceThunk";

const initialState: ProductState | any = {
    info: null
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Date>) => {
            state.info = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(productAsyncData.fulfilled, (state, action) => {
            state.info = action.payload;
        })
    }
});

export const { addProduct } = productSlice.actions;

export const getProduct = (state: RootState): ProductState => state.products;

export default productSlice.reducer;