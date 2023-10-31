import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";



export const store = configureStore({
    reducer: {
        products: productReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch












